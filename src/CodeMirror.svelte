<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  import CodeMirror from './codemirror.js'; //this works

  let editor;
  let frame;
  export let code; //code comes into this module
  const refs = {}

  const dispatch = createEventDispatcher();

  function createEditor () {
    const cm_opts = {
      lineNumbers: true,
      lineWrapping: true,
      indentWithTabs: true,
      indentUnit: 2,
      tabSize: 2,
      value: '',
      mode: 'javascript'
    };
    editor = CodeMirror.fromTextArea(refs.editor, cm_opts);
    editor.on('change', instance => {
      code = instance.getValue();
      dispatch('change', code); // or { value }
     });
  }

  onMount(() => {
    createEditor();
  });

  //not sure what for: https://github.com/sveltejs/svelte-repl/blob/master/src/CodeMirror.svelte
  $: if (editor) { 
    editor.refresh();
    console.log("hit editor.refresh() $: ");
  }


</script>

<style>
  .codemirror-container {
      position: relative;
      width: 50%;
      line-height: 1.5;
  }
</style>

<div class="codemirror-container" bind:this={frame}>
  <textarea
    bind:this={refs.editor}
    bind:value={code}
  ></textarea>
</div>

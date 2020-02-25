<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  import { store } from './store.js';

  import CodeMirror from './codemirror.js'; //this works

  let editor;
  let frame;

  export let index;

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
      $store.collections[index].string = instance.getValue();
      dispatch('change');
     });
  }

  onMount(() => {
    createEditor();
  });

  //not sure what for: https://github.com/sveltejs/svelte-repl/blob/master/src/CodeMirror.svelte
  $: if (editor) { 
    editor.refresh();
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
    value={$store.collections[index].string}
  ></textarea>
</div>

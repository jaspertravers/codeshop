<script>
  //codemirror is avaliable from script in public/index.html, so the following import has been commented out
  //import codemirror from 'codemirror';

  import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

  let editor;
  export let code;

  let frame;

	const dispatch = createEventDispatcher();
  
  onMount(() => {
      editor = CodeMirror.fromTextArea(editor, {
        lineNumbers: true,
        lineWrapping: true
      });
      /*
      editor.on ("change", (cm, co) => {
        code=cm.getValue();
      });
      */
		editor.on('change', instance => {
      //const value = instance.getValue();
      //dispatch('change', { value });
      code = instance.getValue();
      dispatch('change', code);
		});
  });


</script>

<div class="code" bind:this={frame}>

  <textarea bind:value="{code}" bind:this={editor}></textarea>

</div>

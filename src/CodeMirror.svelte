<script>
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
		editor.on('change', instance => {
      code = instance.getValue();
      dispatch('change', code);
		});
  });


</script>

<div class="code" bind:this={frame}>

  <textarea bind:value="{code}" bind:this={editor}></textarea>

</div>

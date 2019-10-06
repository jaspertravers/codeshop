<script>
  import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

  let editor;
  export let code;

  let frame;
  let play = false;

	const dispatch = createEventDispatcher();

  onMount(() => {
      editor = CodeMirror.fromTextArea(editor, {
        mode: "javascript",
        lineNumbers: true,
        lineWrapping: true
      });
		editor.on('change', instance => {
      code = instance.getValue();
      if (play) {
        dispatch('change', code);
      }
		});
  });

  function handlePlay () {
    play = !play;
    dispatch('change', code);
  }
</script>

<div class="code" bind:this={frame}>
  <textarea bind:value="{code}" bind:this={editor}></textarea>
  <button on:click={handlePlay}>
    {play ? "play" : "pause"}
  </button>
</div>


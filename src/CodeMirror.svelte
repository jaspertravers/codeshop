<script>
  import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

  let editor;
  export let code;

  let frame;
  let playtoggle = false;

	const dispatch = createEventDispatcher();

  onMount(() => {
      editor = CodeMirror.fromTextArea(editor, {
        mode: "javascript",
        indentWithTabs: false,
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true
      });
		editor.on('change', instance => {
      code = instance.getValue();
      if (playtoggle) {
        dispatch('change', code);
      }
		});
  });

  function handlePlay () {
    playtoggle = !playtoggle;
    if (playtoggle) {
      dispatch('change', code);
    }
  }
</script>

<div class="code" bind:this={frame}>
  <textarea bind:value="{code}" bind:this={editor}></textarea>
  <button on:click={handlePlay}>
    {#if playtoggle}
      <strong>play</strong>/pause
    {/if}
    {#if !playtoggle}
      play/<strong>pause</strong>
    {/if}
  </button>
</div>


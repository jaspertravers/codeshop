<!-- --
  -- Runtime/Library will organize through Workspace.svelte --
  -- -->

<script>
  import Group from './Group.svelte';
  import sketches from './sketches.js';

  //TODO this was just for testing?
  import CodeMirror from './CodeMirror.svelte';

  //set context
  function handleButton () {

  }
</script>

<style>
  .workspace {
  }
</style>

<div class="workspace">
  <Group name="s1" sketch="{sketches.s1}"/>
  <CodeMirror code="x = 5"/>
  <button id="new" on:click={handleButton}> New Editor </button>
</div>

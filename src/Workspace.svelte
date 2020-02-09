<!-- --
  -- Runtime/Library will organize through Workspace.svelte --
  -- -->

<script>
  import Group from './Group.svelte';
  import sketches from './sketches.js';

  //TODO this was just for testing?
  import CodeMirror from './CodeMirror.svelte';

  let state = [{name:"name", sketch:`x = 5`}];
  let newState = {name:"name", sketch:`x = 5`};

  //set context
  function handleButton () {
      //state.push({name:"name", sketch:`x = 5`})
      state = [...state, newState];
      console.log(state)
  }
</script>

<style>
  .workspace {
      border: dashed purple;
  }
</style>

<div class="workspace">

  {#if state.length}
    {#each state as element}
      <Group name={element.name} sketch={element.sketch}/>
    {/each}
  {/if}



  <Group name="s1" sketch="{sketches.s1}"/>
  <!-- <Group name="s2" sketch="{sketches.s2}"/> -->
  <!-- <CodeMirror code="x = 5"/> -->
  <button id="new" on:click={handleButton}> New Editor </button>
  <button id="new" on:click={handleButton}> Copy Editor </button>
</div>

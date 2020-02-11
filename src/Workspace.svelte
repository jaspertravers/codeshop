<!-- --
  -- Runtime/Library will organize through Workspace.svelte --
  -- -->

<script>
  import { onMount } from 'svelte';
  import Group from './Group.svelte';
  import sketches from './sketches.js';
  import CodeMirror from './CodeMirror.svelte';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  let newState = {name:$store.state.length, sketch: sketches.def};

  console.log("store.state: ", $store.state)
  // if no localstorage, initiate with default
  if (!$store.state.length) {
      store.set({state: [newState]})
  }

  function handleNewButton () {
      $store.state = [...$store.state, newState];
  }
  function handleDeleteButton () {
      $store.state = $store.state.slice(0, -1);
  }

  //store into store
  function restore ({detail: source}) {
      
  }

  console.log("store[0]: ", $store.state[0])
</script>

<style>

</style>

<div class="workspace">

  {#if $store.state.length}
    {#each $store.state as element, i}
      <Group name={i} sketch={element.sketch} on:change={restore}/>
    {/each}
  {/if}

  <button id="new" on:click={handleNewButton}> New Editor </button>
  <button id="copy" on:click={handleNewButton}> Copy Editor </button>
  <button id="delete" on:click={handleDeleteButton}> Delete Editor </button>
</div>

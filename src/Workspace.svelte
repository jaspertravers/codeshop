<!-- --
  -- Runtime/Library will organize through Workspace.svelte --


  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session
  //$store.state[name].sketch = code;
  -- -->

<script>
  import { onMount } from 'svelte';
  import Group from './Group.svelte';
  import sketches from './sketches.js';
  import CodeMirror from './CodeMirror.svelte';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  let newState = {name:$store.state.length, sketch: sketches.def};

  // if no localstorage, initiate with default
  if (!$store.state.length) {
      store.set({state: [newState]})
  }

  function handleNewButton () {
      $store.state = [...$store.state, newState];
  }
  function handleCopyButton () {
      $store.state = [...$store.state, $store.state[$store.state.length - 1]]
  }
  function handleDeleteButton () {
      $store.state = $store.state.slice(0, -1);
  }

  //store into store
  function restore ({detail: source}) {
      
  }
</script>

<style>

</style>

<div class="workspace">
  {#if $store.state.length}
    {#each $store.state as element, i}
      <Group name={i} sketch={element.sketch}/>
    {/each}
  {/if}

  <button id="new" on:click={handleNewButton}> New Editor </button>
  <button id="copy" on:click={handleCopyButton}> Copy Editor </button>
  <button id="delete" on:click={handleDeleteButton}> Delete Editor </button>
</div>

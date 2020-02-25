<script>
  import { onMount } from 'svelte';
  import { p5def } from './sketches.js';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  export let index;

  function handleNewButton () {
    $store.collections.splice (index + 1, 0, {string: p5def});
    $store.collections = $store.collections;
  }

  function handleCopyButton () {
    let strCopy = $store.collections[index].string;
    $store.collections.splice (index + 1, 0, {string: strCopy});
    $store.collections = $store.collections;
  }

  function handleDeleteButton () {
    $store.collections.splice (index, 1);
    $store.collections = $store.collections;
  }
</script>

<style>
</style>

<div class="instance-menu">
  <button id="new" on:click={handleNewButton}> New Editor </button>
  <button id="copy" on:click={handleCopyButton}> Copy Editor </button>
  <button id="delete" on:click={handleDeleteButton}> Delete Editor </button>
</div>

<script>
  import { onMount } from 'svelte';
  import { p5def } from './sketches.js';

  import { v4 as uuid } from 'uuid';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  export let index;

  function handleNewButton () {
    let str = new String (p5def)
    $store.collections.splice (index + 1, 0, {string: str, id: uuid(), play: false});
    $store.collections = $store.collections;
  }

  function handleCopyButton () {
    let strCopy = $store.collections[index].string;
    $store.collections.splice (index + 1, 0, {string: strCopy, id: uuid(),
    play: false});
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
  <button class="new" on:click={handleNewButton}> New Editor </button>
  <button class="copy" on:click={handleCopyButton}> Copy Editor </button>
  <button class="delete" on:click={handleDeleteButton}> Delete Editor </button>
</div>

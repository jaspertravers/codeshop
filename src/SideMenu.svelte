<script>
  import { onMount } from 'svelte';
  import { p5def } from './sketches.js';

  import { v4 as uuid } from 'uuid';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  export let index;

  function handlePlay () {
    $store.collections[index].play = true;
    //$store.collections = $store.collections;
  }
  function handlePause () {
    $store.collections[index].play = false;
    //$store.collections = $store.collections;
  }
</script>

<style>
  .instance-menu {
  }
</style>

<div class="instance-menu">
  <button class="local-play" on:click={handlePlay}> ▶ </button>
  <button class="local-pause" on:click={handlePause}> ⏸ </button>
</div>

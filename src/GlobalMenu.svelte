<script>
  import { onMount } from 'svelte';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  function handlePlay () {
    $store.collections.forEach (e => e.play = true);
  }
  function handlePause () {
    $store.collections.forEach (e => e.play = false);
  }
</script>

<style>
  .instance-menu {
    display: flex;
    flex-direction: row;
  }

</style>

<div class="global-menu">
  <button class="button play" on:click={handlePlay}> Global Play </button>
  <button class="button pause" on:click={handlePause}> Global Pause </button>
</div>

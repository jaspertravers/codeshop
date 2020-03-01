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
    display: flex;
    flex-direction: column;
  }

  .button.play {
    /*
    margin: 0 auto;
    box-sizing: border-box;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0px 10px 20px;
    border-color: transparent transparent transparent #282828;
    */
  }
</style>

<div class="instance-menu">
  <button class="button play" on:click={handlePlay}> Play </button>
  <button class="button pause" on:click={handlePause}> Pause </button>
</div>

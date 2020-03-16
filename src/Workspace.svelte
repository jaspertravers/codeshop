<script>
  import { onMount } from 'svelte';
  import Collection from './Collection.svelte';
  import CodeMirror from './CodeMirror.svelte';
  import InstanceMenu from './InstanceMenu.svelte';
  import { p5def } from './sketches.js'

  import GlobalMenu from './GlobalMenu.svelte'

  import { v4 as uuid } from 'uuid';


  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  // if no localstorage, initiate with default
  if (!$store.collections[0]) {
      store.set({collections: [{string: p5def, id: uuid(), play: false}]});
  }

  //pause all collections on startup
  onMount(() => {
    $store.collections.forEach (e => e.play = false);
  });

</script>

<style>
  .workspace {
  }
  .globalmenu {
      position: relative;
      left: 8%;
  }
</style>

<div class="workspace">
  <div class="globalmenu">
    <h3> Global Controls : </h3>
    <GlobalMenu/>
  </div>
  <hr/>
  {#if $store.collections}
    {#each $store.collections as collection, index (collection.id)}
      <Collection index={index} />
      <hr/>
    {/each}
  {/if}
</div>

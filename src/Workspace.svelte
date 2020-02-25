<script>
  import { onMount } from 'svelte';
  import Collection from './Collection.svelte';
  import CodeMirror from './CodeMirror.svelte';
  import InstanceMenu from './InstanceMenu.svelte';
  import { p5def } from './sketches.js'

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  // if no localstorage, initiate with default
  if (!$store.collections[0]) {
      //store.set({state: [newState]})
      store.set({collections: [{string: p5def}]});
  }

</script>

<style>
</style>

<div class="workspace">
  {#if $store.collections}
    {#each $store.collections as collection, index}
      <p>{index}</p>
      <Collection collection={collection} index={index} />
      <InstanceMenu index={index}/>
    {/each}
  {/if}
</div>

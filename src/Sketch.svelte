<script>
  import p5 from 'p5';
  import { onMount } from 'svelte';

  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  export let sketch; //this receives the passed sketch= value from a caller
  export let index;

  let frame;
  let myp5;
  let isMounted = false;


  //canvas mounted; sketch exists; play button pressed
  $: if (isMounted && sketch && $store.collections[index].play) {
    frame.innerHTML="";
    try {
      myp5 = new p5(sketch, frame);
    } catch(e) {
      
    }
  }

  onMount(() => {
    isMounted = true;
  })
</script>

<div class="sketch" bind:this={frame}>
</div>

<script>
  import p5 from 'p5';
  import { onMount } from 'svelte';

  export let sketch;

  let frame;
  
  onMount(() => {
      if (sketch) {
        let myp5 = new p5(sketch, frame);
      }
  })

</script>

<div class="sketch" bind:this={frame}>

</div>


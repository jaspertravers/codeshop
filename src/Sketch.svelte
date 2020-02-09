<script>
  import p5 from 'p5';
  import { onMount } from 'svelte';

  export let sketch; //this receives the passed sketch= value from a caller

  let frame;
  let myp5;
  let isMounted = false;

  $: if (isMounted && sketch) {
    frame.innerHTML="";
    try {
      myp5 = new p5(sketch, frame);
    } catch(e) {
      
    }
  }

  onMount(() => {
    isMounted = true;
      if (sketch) {
        try {
          myp5 = new p5(sketch, frame);
        }
        catch (e) {}
      }
  })
</script>
  <div class="sketch" bind:this={frame}>
</div>

<script>
  import { onMount } from 'svelte';


  export let sketch = undefined; //this receives the passed sketch= value from a caller

  let frame;
  let myp5;
  let isMounted = false;
  let p5 = undefined;

  onMount(async () => {
    let p5js = await import('p5');
    p5 = p5js.default;

    isMounted = true;
  })

  $: if (isMounted && sketch && p5) {
    try {
      frame.innerHTML="";
      myp5 = new p5(sketch, frame);
    } catch(e) {
      
    }
  }

  
</script>
<div class="sketch" bind:this={frame}>
</div>

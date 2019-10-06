<script>
  import { onMount } from 'svelte';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  let frame;
  export let sketch;
  let initial = `${sketch}`;

  function update (value) {
    if (typeof sketch === "function") {
      sketch = (new Function ("return " + value.detail))();
      console.log ("typeof", typeof sketch);
    }
    //sketch = value.detail;

  }
</script>
<style>
  .pair {
    display: flex;
    flex-flow: row wrap;
  }
</style>
<div class="pair" bind:this={frame}>
  <CodeMirror code={initial} on:change={update}/>
  <Sketch sketch={sketch} />
</div>

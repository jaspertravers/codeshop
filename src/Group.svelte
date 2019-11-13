<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  export let sketch;
  let initial = `${sketch}`;

  function update ({detail: sourceCode}) {
    try {
      acorn.parse(sourceCode);
      // sketch is a function that returns a function that embodies a p5 sketch.
    } catch (e) {
      console.error(e);
      return;
    }
    sketch = (new Function ("return " + sourceCode))();

  }
</script>
<style>
  .group {
    display: flex;
    flex-flow: row wrap;
  }
</style>
<div class="group">
  <CodeMirror code={initial} on:change={update}/>
  <Sketch sketch={sketch} />
</div>

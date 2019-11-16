<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';

  import { runtime } from '../../stores/runtime';

  import Canvas from './Canvas.svelte';
  import CodeMirror from '../CodeMirror.svelte';

  export let sketch;

  function update ({detail: sourceCode}) {
    // Syntactic error handling

    // inject source code into our namespace
    try {
      const AST = acorn.parse(sourceCode);
      console.log(AST);
      // you can read the AST and initiate UI/UX changes based on what's in the code

      const closure = new Function (
        `return function(lib) {
          return ${sourceCode}
        }`
      );
    
      sketch = closure()($runtime);

      runtime.update(rt => { 
        return Object.assign(rt, {[sketch.name]: sketch})
      });
      // sketch is a function that returns a function that embodies a p5 sketch.
    } catch (e) {
      console.error(e);
      return;
    }
   
  }
</script>
<style>
  .pair {
    display: flex;
    flex-flow: row wrap;
  }
</style>
<div class="pair">
  <CodeMirror code={sketch.toSource()} on:change={update}/>
  <Canvas sketch={sketch} />
</div>

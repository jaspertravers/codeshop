<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';

  import { runtime } from './runtime';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  export let sketch;
  export let name = "";
  let initial = `${sketch}`;

  function update ({detail: sourceCode}) {
    // Syntactic error handling

    // inject source code into our namespace
    try {
      const AST = acorn.parse(sourceCode);
      console.log(AST);
      // you can read the AST and initiate UI/UX changes based on what's in the code
      runtime.update(rt => { 
        return Object.assign(rt, {[name]: sourceCode})
      });
      // sketch is a function that returns a function that embodies a p5 sketch.
    } catch (e) {
      console.error(e);
      return;
    }
    const library = Object.keys($runtime).reduce((acc, fName)  => {
      const functionObj = (new Function(`return ${$runtime[fName]}`))();
      acc[fName] = functionObj;
      return acc;
    }, {});

    const closure = new Function (
      `return function(lib) {
        return ${sourceCode}
      }`
    );

    sketch = closure()(library);
  

    /*
    function (p) {
      function linspace(...) {

      }
      
      return sketchFunction(p) {
        setup() {...}
        draw() {...}
      };
    }()


    */

  }
</script>
<style>
  .pair {
    display: flex;
    flex-flow: row wrap;
  }
</style>
<div class="pair">
  <CodeMirror code={initial} on:change={update}/>
  <Sketch sketch={sketch} />
</div>

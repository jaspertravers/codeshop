<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';
  import { runtime } from './runtime';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  export let sketch;
  let initial = `${sketch}`;

  function update ({detail: sourceCode}) {
    // Syntactic error handling
    try {
      const AST = acorn.parse(sourceCode);
      console.log(AST);
      runtime.update(rt => { 
        return Object.assign(rt, {[name]: sourceCode})
      });
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
    )();

    sketch = closure(library);
  }
</script>
<style>
  .group {
    display: flex;
    flex-flow: row wrap;
    border: dashed red;
  }
</style>
<div class="group">
  <CodeMirror code={initial} on:change={update}/>
  <Sketch sketch={sketch} />
</div>

<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';
  import { runtime } from './runtime';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  import { store } from './store.js';

  export let name;
  export let sketch; //this is always a string

  let func;

  function update ({detail: sourceCode}) {
    //localstorage updating
    $store.state[name].sketch = sourceCode;

    // Syntactic error handling
    try {
      const AST = acorn.parse(sourceCode);
      runtime.update(rt => { 
        return Object.assign(rt, {[name]: sourceCode})
      });
    } catch (e) {
      //console.error(e);
      return;
    }
    func = new Function (`return ${sourceCode}`)();
  }

  if (!func) update({detail: sketch}); //builds func on reload and new editor

</script>
<style>
  .group {
    display: flex;
    flex-flow: row wrap;
  }
</style>
<div class="group">
  <CodeMirror code={sketch} on:change={update}/>
  <Sketch sketch={func} />
</div>

<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';
  import { runtime } from './runtime';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';


  import { store } from './store.js';
  store.useLocalStorage(); //gets localstorage session

  export let name;
  export let sketch;
  
  let initial = sketch;

  function update ({detail: sourceCode}) {
    //localstorage updating
    //console.log("store: ", $store.state[name].sketch);

    //$store.state[name].sketch = sourceCode;

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

    sketch = new Function (`return ${sourceCode}`)();
  }
</script>
<style>
  .group {
    display: flex;
    flex-flow: row wrap;
  }
</style>
<div class="group">
  <p>id: {name}</p>
  <p>t: {typeof sketch}</p>
  <CodeMirror code={initial} on:change={update}/>
  <Sketch sketch={sketch} />
</div>

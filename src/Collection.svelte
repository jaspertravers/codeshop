<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  import { store } from './store.js';

  //import Stopify from '@stopify/stopify'

  //export let string;
  export let collection; //collection object
  export let index;

  let string = collection.string; //does this line need to be reactive? Is it already?

  let func;

  function update ({detail: sourceCode}) {
    //localstorage updating
    $store.collections[index].string = sourceCode;

    //  Syntactic error handling
    try {
      const AST = acorn.parse(sourceCode);
    } catch (e) {
      //console.error(e);
      return;
    }
    func = new Function (`return ${sourceCode}`)();
  }

  update({detail: string}); //builds func on reload and new editor


</script>
<style>
  .collection {
    display: flex;
    flex-flow: row wrap;
    border: 1px dashed #282828;
  }
</style>
<div class="collection">
  <CodeMirror code={string} on:change={update}/>
  <Sketch sketch={func} />
</div>

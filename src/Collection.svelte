<script>
  import { onMount } from 'svelte';
  import * as acorn from 'acorn';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';
  import InstanceMenu from './InstanceMenu.svelte';
  import SideMenu from './SideMenu.svelte';

  import { store } from './store.js';
  //import Stopify from '@stopify/stopify'

  export let index;

  let func;

  function update () {
    //localstorage updating
    let sourceCode = $store.collections[index].string; //lets only do this in one place
      
    //  Syntactic error handling
    try {
      const AST = acorn.parse(sourceCode);
    } catch (e) {
      //console.error(e);
      return;
    }
    func = new Function (`return ${sourceCode}`)();
  }

  update(); //builds func on reload and new editor


</script>
<style>
  .collection {
    display: flex;
    flex-flow: row wrap;
    border: 1px dashed #282828;
  }
  .collection-horizontal {
  }
</style>

<div class="collection-horizontal">
  <SideMenu class ="sidemenu" index={index}/>
  <div class="collection">
    <CodeMirror on:change={update} index={index}/>
    <Sketch sketch={func} />
  </div>
</div>
<InstanceMenu index={index}/>

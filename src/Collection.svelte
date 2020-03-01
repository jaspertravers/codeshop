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
  .wrapper {
    display: grid;
    grid-template-columns: auto repeat(2, 1fr);
    grid-template-rows: 1fr auto;
    border: 1px solid #000000;
  }
  .collection {
    grid-column: 2 / 4;
    grid-row: 1;
    display: flex;
    flex-flow: row wrap;
    border: 1px dashed #282828;
  }
  .side-menu {
      grid-column: 1;
      grid-row: 1;
  }
  .three {
      grid-column: 1;
      grid-row: 2;
  }
  .instance-menu {
      grid-column: 1/3;
      grid-row: 2;
  }

</style>

<div class="wrapper">
  <div class="side-menu">
    <SideMenu index={index}/>
  </div>
  <div class="collection">
    <CodeMirror on:change={update} index={index}/>
    <Sketch sketch={func} />
  </div>
  <div class="instance-menu">
    <InstanceMenu index={index}/>
  </div>
</div>

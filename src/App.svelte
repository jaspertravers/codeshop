<script>
  import { onMount } from 'svelte';

  /*
  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';
  */
  import Pair from './Pair.svelte';

  //import s1 from './sketches/s1.js';

  let frame;

  const s = ( p ) => {

    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(200, 200);
      p.background(127);
      p.noLoop();
    };

    p.draw = () => {
      p.background(0);
      p.fill(255, 127, 0);
      p.rect(x,y,50,50);
    };
  };

	let name = 'Jasper';
</script>

<div>
  <h1>Hello {name}!</h1>
  <div>
    <Pair sketch="{s}"/>
    <Pair sketch="{s}"/>
  </div>
</div>

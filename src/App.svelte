<script>
  import { onMount } from 'svelte';

  import Sketch from './Sketch.svelte';
  import CodeMirror from './CodeMirror.svelte';

  //import s1 from './sketches/s1.js';

  let frame;
  let frame2;


  const s = ( p ) => {

    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(200, 200);
    };

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(x,y,50,50);
    };
  };

  const s2 = ( p ) => {

    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(200, 200);
    };

    p.draw = () => {
      p.background(0);
      p.fill(255, 0, 0);
      p.rect(x,y,50,50);
    };
  };

let redV = 255;

$: paramerterizedSketch =  (p) => {

    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(200, 200);
    };

    p.draw = () => {
      p.background(0);
      p.fill(redV, 0, 0);
      p.rect(x,y,50,50);
    };
  }

	let name = 'world';
</script>

<div>
  <Sketch sketch="{s}" />
  <Sketch sketch="{s2}" />

  <CodeMirror/>

  <input type="range" min="0" max="255" bind:value={redV}>
  <Sketch sketch={paramerterizedSketch} />

  <h1>Hello {name}!</h1>
</div>

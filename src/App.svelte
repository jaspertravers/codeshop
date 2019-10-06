<script>
  import { onMount } from 'svelte';
  import Pair from './Pair.svelte';
  import sketches from './sketches.js';

  let frame;
	let name = 'Jasper';
</script>

<div>
  <h1>Hello {name}!</h1>
  <div>
    <Pair sketch="{sketches.s1}"/>
    <Pair sketch="{sketches.s2}"/>
  </div>
</div>

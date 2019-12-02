<script>
  import { onMount } from 'svelte';
  import Group from './Group.svelte';
  import sketches from './sketches.js';

  import {runtime} from './runtime';

</script>

<div>
  <div id="runtime">
    {#each Object.keys($runtime) as x}
      <span>{x}</span>
    {/each}
  </div>
  <div>
    <Pair name="s1" sketch="{sketches.s1}"/>
    <Pair name="s2" sketch="{sketches.s2}"/>
    <Pair name="s3" sketch="{sketches.s3}"/>
    <Pair name="sand" sketch="{sketches.sand}"/>
    <Pair name="zip" sketch="{sketches.zip}"/>
    <Pair name="linspace" sketch="{sketches.linspace}"/>
  </div>
</div>

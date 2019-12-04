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
    <Group name="s1" sketch="{sketches.s1}"/>
    <Group name="s2" sketch="{sketches.s2}"/>
    <Group name="s3" sketch="{sketches.s3}"/>
    <Group name="sand" sketch="{sketches.sand}"/>
    <Group name="zip" sketch="{sketches.zip}"/>
    <Group name="linspace" sketch="{sketches.linspace}"/>
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  import Group from './Group.svelte';
  import sketches from './sketches.js';

	let name = 'codeshop';
</script>

<div>
  <h1>{name}</h1>
  <div>
    <Group sketch="{sketches.s1}"/>
    <Group sketch="{sketches.s2}"/>
    <Group sketch="{sketches.s3}"/>
    <Group sketch="{sketches.sand}"/>
    <Group sketch="{sketches.zip}"/>
    <Group sketch="{sketches.linspace}"/>
  </div>
</div>

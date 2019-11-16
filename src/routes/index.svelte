<script>
  import { onMount } from 'svelte';
  import P5Pair from '../components/P5/Pair.svelte';

  import {runtime} from '../stores/runtime';

</script>

<svelte:head>
  <title>Where Chunking Happens</title>
</svelte:head>

<div id="runtime">
  {#each Object.keys($runtime) as x}
    <span>{x}</span>
  {/each}
</div>
<div>
  {#each Object.values($runtime) as func}
    <P5Pair sketch="{func}"/>
  {/each}
</div>

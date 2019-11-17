<script>
  import { onMount } from 'svelte';
  import P5Pair from '../components/P5/Pair.svelte';

  import {runtime} from '../stores/runTime';

  async function runTests() {
    const response = await fetch('/test', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: "post body"
      });
    
  }

</script>

<svelte:head>
  <title>Where Chunking Happens</title>
</svelte:head>

<div id="runtime">
  <button on:click="{runTests}">Test</button>
  <h4>Functions</h4>
  {#each Object.keys($runtime) as x}
    <span>{x} </span>
  {/each}
</div>
<div>
  {#each Object.values($runtime) as func}
    <P5Pair sketch="{func}"/>
  {/each}
</div>

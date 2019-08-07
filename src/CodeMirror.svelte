<script>
  //codemirror is avaliable from script in public/index.html
  //import codemirror from 'codemirror';

  import { onMount } from 'svelte';

  let editor;
  export let code="let x = 5;";

  let frame;
  
  onMount(() => {
      editor = CodeMirror.fromTextArea(editor, {
        lineNumbers: true,
        lineWrapping: true
      });

      editor.on ("change", (cm, co) => {
        code=cm.getValue();
      })
  });


</script>

<div class="code" bind:this={frame}>

  <p>
  {code}
  </p>
  <textarea bind:value="{code}" bind:this={editor}></textarea>
  <input type="text" bind:value={code} />

</div>

<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background: #d91b42;
    color: white;
  }

  .secondary {
    background: #4d7c0f;
    color: white;
  }

  .flat {
    box-shadow: none;
  }

  .primary.inverse {
    background: white;
    color: #d91b42;
    border: 2px solid #d91b42;
  }

  .secondary.inverse {
    background: white;
    color: #4d7c0f;
    border: 2px #4d7c0f;
  }
</style>

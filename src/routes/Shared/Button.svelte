<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class=" rounded-md p-1 {type}" class:flat class:inverse>
  <slot />
</button>

<style>
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
    border: 2px solid #4d7c0f;
  }
</style>

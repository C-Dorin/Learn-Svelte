<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="flex flex-col items-center">
  <div class="w-2/3 mb-10">
    <ul class="flex justify-center p-0">
      {#each items as item}
        <li on:click={() => dispatch("tabChange", item)}>
          <div class:active={item === activeItem}>
            {item}
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }
</style>

<script>
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../Stores/PollStore.js";
  import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list" in:fade>
  {#each $PollStore as poll (poll.id)}
    <div animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

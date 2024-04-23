<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import PollList from "./Components/PollList.svelte";
  import CreatePollForm from "./Components/CreatePollForm.svelte";
  import ThemeSwitch from "./Components/ThemeSwitch.svelte";
  import Tabs from "./Shared/Tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = () => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<ThemeSwitch />
<div>
  <if class="m-10 auto">
    <Tabs {activeItem} {items} on:tabChange={tabChange} />
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-left w-2/3">
        {#if activeItem === "Current Polls"}
          <PollList />
        {:else if activeItem === "Add New Poll"}
          <CreatePollForm on:add={handleAdd} />
        {/if}
      </div>
    </div>
  </if>
</div>
<Footer />

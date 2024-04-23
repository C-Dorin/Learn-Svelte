<script>
  import PollStore from "../Stores/PollStore.js";
  import { createEventDispatcher } from "svelte";
  import Button from "../Shared/Button.svelte";

  let dispatch = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };

  let valid = false;

  const submitHandler = () => {
    valid = true;

    // validate question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }

    // validate answer A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A must cannot be empty";
    } else {
      errors.answerA = "";
    }

    // validate answer B
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B must cannot be empty";
    } else {
      errors.answerB = "";
    }

    // add a new Poll
    if (valid) {
      let poll = { ...fields, id: Math.random(), votesA: 0, votesB: 0 };
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };
</script>

<div class="flex flex-col items-center">
  <form
    on:submit|preventDefault={submitHandler}
    class="w-[400px] m-0 text-center"
  >
    <div class="m-4">
      <label class="m-2.5 text-left" for="question">Poll question:</label><br />
      <input
        class="w-full rounded-md border-2 p-2"
        type="text"
        id="question"
        bind:value={fields.question}
      />
      <div class="error">{errors.question}</div>
    </div>
    <div class="m-4">
      <label for="answer-a">Answer A:</label><br />
      <input
        class="w-full rounded-md border-2 p-2"
        type="text"
        id="answer-a"
        bind:value={fields.answerA}
      />
      <div class="error">{errors.answerA}</div>
    </div>
    <div class="m-4">
      <label for="answer-b">Answer B:</label><br />
      <input
        class="w-full rounded-md border-2 p-2"
        type="text"
        id="answer-b"
        bind:value={fields.answerB}
      />
      <div class="error">{errors.answerB}</div>
    </div>
    <Button type="secondary" flat={true}>Add Poll</Button>
  </form>
</div>

<style>
  .error {
    font-weight: bold;
    font-size: 12;
    color: #d91b42;
  }
</style>

import { writable } from "svelte/store";

const PollStore = writable([
    {
      id: 1,
      question: "JavaFX or Svelte?",
      answerA: "JavaFX",
      answerB: "Svelte",
      votesA: 7,
      votesB: 3,
    },
  ]);

export default PollStore;
<template>
  <div class="flex min-h-screen items-center justify-center">
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>
<script setup>
import HelloWorld from "./components/HelloWorld.vue";

// use this mocked object to test babysitter card
const cardData = {
  img: "https://picsum.photos/209",
  firstName: "Alexandra",
  lastName: "Kasparov",
  languages: ["en", "de", "it"],
  tags: [
    {
      icon: "first-aid",
      text: "First Aid",
    },
    {
      icon: "car",
      text: "Own car",
    },
    {
      icon: "wine-glasses",
      text: "Event jobs",
    },
    {
      icon: "traveller",
      text: "Traveller",
    },
    {
      icon: "translate",
      text: "Multilingual",
    },
    {
      icon: "clock",
      text: "Flexible hours",
    },
    {
      icon: "sun",
      text: "Weekend babysitter",
    },
  ],
  aboutMe:
    "Reliable and with a strong motivation to grow professionally in the education sector, she knows how to take care of tasks assigned with commitment and resoluteness, always acting in compliance with the feedback and recommendations of colleagues and above with a view to continuous improve.",
};
</script>

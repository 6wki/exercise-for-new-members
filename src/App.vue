<template>
  <div class="flex min-h-screen items-center justify-center bg-zinc-900">
    <HelloWorld
      :profilePicture="cardData.img"
      :firstName="cardData.firstName"
      :lastName="cardData.lastName"
      :description="cardData.aboutMe"
      :tags="cardData.tags"
    />
  </div>
</template>
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import firstAid from "./assets/aid.svg";
import car from "./assets/car.svg";
import traveller from "./assets/traveller.svg";
import translate from "./assets/multilingual.svg";
import wineGlasses from "./assets/jobs.svg";

// use this mocked object to test babysitter card
const cardData = {
  img: "https://picsum.photos/209",
  firstName: "Alexandra",
  lastName: "Kasparov",
  languages: ["en", "de", "it"],
  tags: [
    {
      icon: firstAid,
      text: "First aid",
    },
    {
      icon: car,
      text: "Own car",
    },
    {
      icon: wineGlasses,
      text: "Event jobs",
    },
    {
      icon: traveller,
      text: "Traveller",
    },
    {
      icon: translate,
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

<template>
  <div
    class="w-[360px] cursor-pointer rounded-[8px] bg-pink-300 p-[30px] text-white"
    @click="count++"
  >
    <h1>{{ msg }}</h1>
    <p>count is: {{ count }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

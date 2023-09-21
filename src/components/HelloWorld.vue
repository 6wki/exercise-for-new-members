<template>
  <div
    class="mx-5 flex max-w-screen-xl cursor-pointer flex-wrap rounded-[20px] bg-white py-[32px] px-[56px] text-black"
  >
    <div class="flex flex-wrap gap-8">
      <div class="flex flex-wrap">
        <!-- Profile Picture -->
        <div class="flex min-w-[116px] justify-center">
          <img class="mb-20 rounded-full" :src="profilePicture" :alt="name" />
        </div>

        <div>
          <!-- Name -->
          <div class="mt-4">
            <h2 class="text-2xl font-bold">{{ name }}</h2>
          </div>

          <!-- Tags -->
          <div class="mt-2">
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tag in tags"
                :key="tag.text"
                class="rounded-2xl bg-red-200 bg-opacity-20 px-2 py-1 text-redpink"
              >
                {{ tag.text }}
              </li>
            </ul>
          </div>
        </div>
        <!-- Description -->
        <div class="mt-2">
          <p>{{ description }}</p>
        </div>
      </div>

      <!-- Actions -->
    </div>
    <!-- <div>
      <button>Book now</button>
      <button>Explore profile</button>
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  msg: String,
  profilePicture: String,
  description: String,
  tags: Array,
  name: String,
});
</script>

<template>
  <div class="component-container">
    <div class="flex flex-wrap text-center md:text-left">
      <!-- Profile Picture -->
      <div class="relative flex w-full justify-center md:w-[25%]">
        <div
          class="relative mt-[-4px] h-[127px] md:mt-[-5px] md:mr-[10px] md:h-[unset] lg:mr-[66px] lg:mt-[unset]"
        >
          <!-- Picture -->
          <img
            class="scale-[0.7] rounded-full md:mb-9 md:scale-[1.13] lg:scale-[unset]"
            :src="profilePicture"
            :alt="(firstName, lastName)"
          />

          <!-- Star Icon -->
          <img class="star-icon" :src="star" alt="rank" />
        </div>
      </div>

      <!-- Name & Tags & Flags -->
      <div class="mt-10 h-[10px] w-full md:mt-[unset] md:h-[unset] md:w-[75%]">
        <div class="nameAndFlags-container">
          <!-- Name -->
          <h1 class="text-[28px] font-semibold tracking-[-0.2px] md:text-2xl">
            {{ firstName }} {{ abbreviation }}.
          </h1>

          <!-- Flags -->
          <div class="flag hidden gap-4 md:flex">
            <img class="cursor-pointer" :src="italy" alt="Italy" />
            <img class="cursor-pointer" :src="britain" alt="Britain" />
            <img class="cursor-pointer" :src="germany" alt="Germany" />
          </div>
        </div>

        <!-- Tags -->
        <div v-if="renderComponent" class="mt-5 md:mt-2">
          <ul class="tags-container">
            <li v-for="(tag, index) in filteredTags" class="tag">
              <img :src="tag.icon" alt="" />
              <p>{{ tag.text }}</p>
            </li>

            <!-- Number of hidden tags -->
            <li
              v-if="hiddenTagsCount > 0"
              class="flex cursor-pointer gap-2 rounded-2xl bg-red-200 bg-opacity-20 px-2 py-1 text-redpink"
            >
              <p
                class="flex max-h-[33px] items-center px-2 font-bold md:text-[13px]"
              >
                {{
                  hiddenTagsCount === 5
                    ? `+${hiddenTagsCount}`
                    : `+${hiddenTagsCount} more`
                }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Description -->
      <div
        class="mt-[30px] flex w-full flex-col items-center md:mt-[unset] md:ml-[-8px] md:block lg:ml-[25%] lg:mt-[-12%]"
      >
        <p class="description">👋🏻 {{ description }}</p>

        <!-- Actions -->
        <button class="booking-button">Book Now</button>
        <buttons
          class="action-button hidden text-redpink md:ml-[32px] md:inline md:text-[14px] lg:text-[16px]"
        >
          Explore Profile
        </buttons>
      </div>
    </div>
  </div>

  <!-- Loading Animation -->
  <Loading v-if="isLoading" />
</template>

<script setup>
// Importing Icons
import italy from "../assets/flag-italy.svg";
import britain from "../assets/flag-britain.svg";
import germany from "../assets/flag-germany.svg";
import star from "../assets/star.svg";

// Importing loading component
import Loading from "./Loading.vue";
</script>

<script>
export default {
  props: {
    // Prop for the profile picture URL
    profilePicture: String,
    // Prop for the description text
    description: String,
    // Prop for an array of tags
    tags: Array,
    // Prop for the first name
    firstName: String,
    // Prop for the last name
    lastName: String,
  },
  data() {
    return {
      // Width for desktop responsive view
      DesktopResponsiveWidth: 1157,
      // Width for mobile responsive view
      MobileResponsiveWidth: 768,
      // Maximum number of tags to show
      maxTagsToShow: 7,
      // Array to store filtered tags
      filteredTags: [],
      // Count of hidden tags
      hiddenTagsCount: 0,
      // Flag to trigger component re-render
      renderComponent: true,
      // Initially set to true to show the loading animation
      isLoading: true,
      // Max tags to show in Desktop
      desktopTags: 5,
      // Max tags to show in Tablet
      tabletTags: 4,
      // Max tags to show in Mobile
      mobileTags: 2,
      // Loading timing
      loadingTime: 2000,
    };
  },

  beforeMount() {
    // Simulate an asynchronous action (e.g., fetching data)
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false to hide the loading animation
    }, this.loadingTime); // Simulate a 2-second loading time (you can adjust this value)
  },
  components: {
    Loading,
  },

  computed: {
    // Computed property to generate abbreviation from last name
    abbreviation() {
      const names = this.lastName.split(" ");
      let abbreviation = "";
      for (const name of names) {
        abbreviation += name.charAt(0);
      }
      return abbreviation;
    },
  },
  methods: {
    // Method to force re-render the component
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    // Method to update filtered tags based on maxTagsToShow
    updateFilteredTags() {
      this.filteredTags = this.tags.slice(0, this.maxTagsToShow);
      this.forceRerender();
    },
    // Method to update maxTagsToShow based on screen width
    updateTagsDisplay() {
      const currentWidth = window.innerWidth;
      if (currentWidth >= this.DesktopResponsiveWidth) {
        this.maxTagsToShow = this.desktopTags; // Desktop
      } else if (currentWidth >= this.MobileResponsiveWidth) {
        this.maxTagsToShow = this.tabletTags; // Tablet
      } else {
        this.maxTagsToShow = this.mobileTags; // Mobile
      }
      this.hiddenTagsCount = Math.max(this.tags.length - this.maxTagsToShow, 0);

      this.updateFilteredTags();
    },
  },
  mounted() {
    this.updateFilteredTags(); // Initial update
    window.addEventListener("resize", this.updateTagsDisplay); // Listen for resize events
    window.onload = this.updateTagsDisplay(); // Trigger initial update on window load
  },
};
</script>

<style scoped>
/* The styles that aren't mentioned here you can find them in the index css */
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

* {
  font-family: "Lato", sans-serif;
}
</style>

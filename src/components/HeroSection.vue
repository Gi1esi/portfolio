<template>
  <section
    class="md:max-h-screen md:mb-0 mb-12 py-6 w-[100%] md:max-w-6xl px-6 dark:bg-neutral-darkBg"
  >
    <!-- Hero Image -->
    <!-- <background-squares></background-squares> -->

    <!-- Full Overlay -->
    <div
      class="text-white flex items-center justify-around md:justify-between flex-wrap-reverse md:max-w-[100%]"
    >
      <!-- Content container (50% width, left aligned) -->
      <div class="text-left md:ml-8 space-y-6 md:px-14">
        <div class="text-brand-primary/60 dark:text-white">
          <h1 class="text-2xl md:text-4xl font-bold">Hi, I'm Grace Gausi</h1>
          <p class="text-lg md:text-xl">Systems Engineer | Innovator</p>
        </div>
        <!-- Typing Effect -->
        <div class="font-mono text-brand-secondary text-xl md:text-2xl">
          <span class="select-none">$ </span><span ref="typedEl" class="whitespace-nowrap"></span>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-3 pt-4">
          <button class="btn-primary text-sm">
            <router-link to="/projects">View Projects</router-link>
          </button>
          <button class="btn-secondary text-sm">
            <a href="https://www.linkedin.com/in/grace-gausi-947ab4269/">Follow my Journey</a>
          </button>
        </div>
      </div>
      <img
        src="/images/Grace-hero2.png "
        alt="Hero background"
        class="md:block dark:hidden h-[100%] w-[100%] md:w-1/3 object-cover"
      />
      <img
        src="/images/Grace-hero-dark.png"
        alt="Hero background dark"
        class="hidden dark:block h-full[80%] w-[80%] md:w-1/3 object-cover"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'

const typedEl = ref(null)

onMounted(() => {
  new Typed(typedEl.value, {
    strings: ['git clone Grace-Gausi', 'cd Grace-Gausi', 'npm run inspire'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1200,
    loop: true,
    cursorChar: '_',
    showCursor: true,
  })
})
</script>
<style scoped>
section {
  background-image: url(/images/stars.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain; /* or auto */
}
</style>

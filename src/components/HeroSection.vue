<template>
  <section class="relative h-screen w-full dark:bg-neutral-darkBg">
    <!-- Hero Image -->
    <!-- <background-squares></background-squares> -->

    <!-- Full Overlay -->
    <div
      class="text-white flex items-center justify-around md:justify-between flex-wrap-reverse md:max-w-[95%]"
    >
      <!-- Content container (50% width, left aligned) -->
      <div class="w-full md:w-4/6 text-left space-y-6 px-4 md:px-12">
        <div class="text-brand-primary/60 dark:text-white">
          <h1 class="text-2xl md:text-4xl font-bold">Hi, I'm Grace Gausi</h1>
          <p class="text-lg md:text-xl">Systems Engineer | Builder | Curious Mind</p>
        </div>
        <!-- Typing Effect -->
        <div class="font-mono text-brand-secondary text-xl md:text-2xl">
          <span class="select-none">$ </span><span ref="typedEl" class="whitespace-nowrap"></span>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 pt-4">
          <button class="btn-primary">View Projects</button>
          <button class="btn-secondary">Follow my Journey</button>
        </div>
      </div>
      <img
        src="/images/hero20.png"
        alt="Hero background"
        class="md:block dark:hidden h-[80%] w-[80%] md:w-1/3 object-cover"
      />
      <img
        src="/images/hero20_dark.png"
        alt="Hero background dark"
        class="hidden dark:block h-full[80%] w-[80%] md:w-1/3 object-cover"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Typed from 'typed.js'
import BackgroundSquares from './BackgroundSquares.vue'

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
}
</style>

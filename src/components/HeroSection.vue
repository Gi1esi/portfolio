<template>
  <section class="relative h-screen w-full">
    <!-- Hero Image -->
    <img
      src="/images/hero.png"
      alt="Hero background"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Full Overlay -->
    <div
      class="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm text-white px-4 flex items-center"
    >
      <!-- Content container (50% width, left aligned) -->
      <div class="w-full md:w-4/6 text-left space-y-6 px-4 md:px-12">
        <h1 class="text-4xl md:text-6xl font-bold">Hi, I'm Grace Gausi</h1>
        <p class="text-lg md:text-xl">Systems Engineer | Maker | Creative</p>

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

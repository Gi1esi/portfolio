<template>
  <header
    class="bg-brand-primary dark:bg-gray-900 text-white dark:text-gray-200 py-4 px-4 sm:px-6 md:px-12 lg:px-20 flex justify-between items-center w-full h-16 sticky top-0 shadow z-50"
  >
    <div class="flex items-center space-x-4">
      <div class="flex space-x-2">
        <span class="w-3 h-3 bg-red-500 rounded-full"></span>
        <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div class="font-semibold text-lg">Grace.Gausi()</div>
    </div>

    <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <nav class="hidden md:flex space-x-6 text-sm font-medium">
      <a href="/" class="hover:text-brand-secondary dark:hover:text-brand-secondary/50">Home</a>
      <a href="/projects" class="hover:text-brand-secondary dark:hover:text-brand-secondary/50"
        >Projects</a
      >
      <a href="/about" class="hover:text-brand-secondary dark:hover:text-brand-secondary/50"
        >About</a
      >
      <a href="/contact" class="hover:text-brand-secondary dark:hover:text-brand-secondary/50"
        >Contact</a
      >
      <button @click="toggleDark" class="text-xl">
        <i v-if="isDark" class="ri-moon-line"></i>
        <i v-else class="ri-sun-line"></i>
      </button>
    </nav>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-brand-primary/80 dark:bg-gray-800/80 backdrop-blur-md text-white dark:text-gray-200 flex flex-col items-center justify-center space-y-8 text-xl font-medium z-40"
      >
        <a href="/" class="hover:underline" @click="menuOpen = false">Home</a>
        <a href="/projects" class="hover:underline" @click="menuOpen = false">Projects</a>
        <a href="/about" class="hover:underline" @click="menuOpen = false">About</a>
        <a href="/contact" class="hover:underline" @click="menuOpen = false">Contact</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const isDark = ref(false)

const toggleDark = () => {
  const html = document.documentElement
  const darkNow = html.classList.toggle('dark')
  localStorage.theme = darkNow ? 'dark' : 'light'
  isDark.value = darkNow
}

onMounted(() => {
  const html = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const shouldBeDark = localStorage.theme === 'dark' || (!localStorage.theme && prefersDark)

  if (shouldBeDark) html.classList.add('dark')
  isDark.value = shouldBeDark
})
</script>

<template>
  <header
    class="bg-brand-primary text-white py-4 px-4 sm:px-6 md:px-12 lg:px-20 flex justify-between items-center w-full h-16 sticky top-0 shadow z-50"
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
      <a href="#" class="hover:text-brand-secondary">Home</a>
      <a href="#" class="hover:text-brand-secondary">Projects</a>
      <a href="#" class="hover:text-brand-secondary">About</a>
      <a href="#" class="hover:text-brand-secondary">Contact</a>
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
        class="fixed inset-0 bg-brand-primary/80 backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-xl font-medium z-40"
      >
        <a href="#" class="hover:underline" @click="menuOpen = false">Home</a>
        <a href="#" class="hover:underline" @click="menuOpen = false">Projects</a>
        <a href="#" class="hover:underline" @click="menuOpen = false">About</a>
        <a href="#" class="hover:underline" @click="menuOpen = false">Contact</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

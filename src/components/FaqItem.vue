<template>
  <div class="border border-gray-300 dark:border-neutral-700 rounded-xl overflow-hidden">
    <button
      class="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-brand-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition"
      @click="open = !open"
    >
      <span>{{ question }}</span>
      <span class="text-lg">{{ open ? '−' : '+' }}</span>
    </button>
    <div v-show="open" class="px-5 pb-4 text-sm text-gray-700 dark:text-gray-300">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
})

const open = ref(false)
</script>

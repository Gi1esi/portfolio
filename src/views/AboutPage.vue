<template>
  <section class="relative py-20 px-5 max-w-6xl mx-auto">
    <!-- <background-squares></background-squares> -->
    <!-- Intro Section -->
    <div class="max-w-3xl mb-16">
      <h1 class="text-2xl font-bold text-brand-primary mb-4">About Me</h1>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
        I'm Grace Gausi, a Systems Engineer with a passion for solving problems through clean
        infrastructure, thoughtful systems, and a little code magic. I love to build things that
        actually work for people, especially those often left out of the tech conversation.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[60%_40%] gap-13 items-start">
      <bio-section></bio-section>
      <professional-history></professional-history>
    </div>
  </section>
</template>

<script setup>
import BackgroundSquares from '@/components/BackgroundSquares.vue'
import BioSection from '@/components/BioSection.vue'
import ProfessionalHistory from '@/components/ProfessionalHistory.vue'
</script>

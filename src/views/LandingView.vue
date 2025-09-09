<template>
  <hero-section></hero-section>
  <change-log></change-log>
  <MyStack></MyStack>
  <featured-projects></featured-projects>
  <div class="h-20"></div>
  <MyBlog></MyBlog>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import MyBlog from '@/components/MyBlog.vue'
import MyStack from '@/components/MyStack.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'
import ChangeLog from '@/components/ChangeLog.vue'
</script>

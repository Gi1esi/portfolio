<template>
  <section></section>

  <section class="relative py-20 px-5 max-w-6xl mx-auto">
    <!-- Text content on the left -->
    <div class="relative z-10 max-w-lg">
      <h2 class="text-3xl font-bold text-brand-primary mb-8">My Portfolio</h2>
      <p class="text-gray-600 dark:text-gray-300">
        This space is a glimpse into the things I’m building, experimenting with, or refining as I
        grow. They all of them reflect where I’m headed and what I care about solving.
      </p>
    </div>
  </section>
  <div class="max-w-6xl mx-auto my-12 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(post, index) in posts" :key="index" class="flex flex-col">
        <div class="aspect-[3/2] bg-gray-200 rounded-md overflow-hidden">
          <img :src="post.thumbnail" :alt="post.title" class="w-full h-full object-cover" />
        </div>
        <h3 class="mt-3 text-base font-medium text-gray-800">{{ post.title }}</h3>
      </div>
    </div>
  </div>

  <my-stack></my-stack>
</template>

<script setup>
import BackgroundSquares from '@/components/BackgroundSquares.vue'
import MyStack from '@/components/MyStack.vue'
const posts = [
  {
    title: 'Project Alpha',
    thumbnail:
      'https://images.unsplash.com/photo-1716637644831-e046c73be197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'First Product',
    thumbnail:
      'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Third Project',
    thumbnail:
      'https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Project Alpha',
    thumbnail:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'First Product',
    thumbnail: 'https://cdn.pixabay.com/photo/2023/09/28/07/25/technology-8280863_1280.jpg',
  },
  {
    title: 'Third Project',
    thumbnail:
      'https://images.unsplash.com/photo-1621856751576-1ea064353795?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
</script>

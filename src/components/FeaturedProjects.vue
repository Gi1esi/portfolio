<template>
  <section class="max-w-6xl mx-auto my-12 px-4">
    <div class="flex justify-between items-center py-3">
      <h2 class="text-3xl font-bold text-brand-primary mb-8">Featured Projects</h2>
      <a
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-5 py-2 bg-brand-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition"
      >
        Explore My Code
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.1-1.48-1.1-1.48-.9-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.89 1.55 2.34 1.1 2.9.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.15-4.56-5.14 0-1.14.38-2.07 1-2.8-.1-.26-.44-1.32.1-2.76 0 0 .84-.27 2.75 1.06a9.38 9.38 0 0 1 5 0c1.9-1.33 2.74-1.06 2.74-1.06.54 1.44.2 2.5.1 2.76.62.73 1 1.66 1 2.8 0 4-.34 4.88-4.57 5.13.36.32.68.94.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(post, index) in posts" :key="index" class="flex flex-col">
        <div class="aspect-[4/3] bg-gray-200 rounded-md overflow-hidden">
          <img :src="post.thumbnail" :alt="post.title" class="w-full h-full object-cover" />
        </div>
        <h3 class="mt-3 text-base font-medium text-gray-800">{{ post.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
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
]
</script>

<style scoped>
.text-brand-primary {
  color: #00afb9;
}
</style>

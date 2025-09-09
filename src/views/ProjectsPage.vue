<template>
  <section
    class="relative py-20 px-5 my-7 max-w-6xl mx-auto flex justify-between items-center gap-5 flex-wrap"
    style="min-height: 250px"
  >
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold text-brand-primary mb-6">My Portfolio</h2>
      <p class="text-gray-600 dark:text-gray-300">
        This space is a glimpse into the things I’m building, experimenting with, or refining as I
        grow. They all reflect where I’m headed and what I care about solving.
      </p>
    </div>
    <div>
      <terminal-box :commands="commands" prompt="grace@portfolio:~/projects ❯" />
    </div>
  </section>

  <div class="max-w-6xl mx-auto px-4 hero">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(post, index) in posts" :key="index" class="flex flex-col">
        <div class="aspect-[3/2] bg-gray-200 rounded-md overflow-hidden">
          <img :src="post.thumbnail" :alt="post.title" class="w-full h-full object-cover" />
        </div>
        <div class="p-4 flex justify-between items-center">
          <h3 class="mt-3 text-base font-medium text-gray-800 dark:text-gray-500">
            {{ post.title }}
          </h3>
          <!-- GitHub link -->
          <div class="mt-auto pt-4">
            <a
              :href="post.github"
              target="_blank"
              class="inline-block text-sm text-brand-secondary hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <my-stack></my-stack>
</template>

<script setup>
import MyStack from '@/components/MyStack.vue'
import TerminalBox from '@/components/TerminalBox.vue'

const posts = [
  {
    title: 'Transactly',
    thumbnail:
      'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Gi1esi/transactly',
  },
  {
    title: 'NzeruBot',
    thumbnail:
      'https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    github: 'https://github.com/Gi1esi/nzerubot_frontend',
  },
  {
    title: 'News-Bot',
    thumbnail:
      'https://images.unsplash.com/photo-1621856751576-1ea064353795?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Soil Smart',
    thumbnail:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Farm CSIS',
    thumbnail:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
const commands = {
  help: 'Available commands: help, about, projects, clear',
  about: "Hi, I'm Grace Gausi — Systems Engineer & researcher. I build secure, efficient systems.",
  projects: () => '- Soil Smart\n- Farm CSIS\n- NzeruBot\n- News-Bot\n- Transactly',
}
</script>

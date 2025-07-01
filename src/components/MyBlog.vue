<template>
  <section
    class="max-w-6xl mx-auto my-16 px-6 py-12 bg-white rounded-lg shadow-lg relative overflow-hidden"
    style="
      background-image:
        radial-gradient(circle at top left, #e0f7f9 1px, transparent 1px),
        radial-gradient(circle at bottom right, #e0f7f9 1px, transparent 1px);
      background-size: 40px 40px;
    "
  >
    <h2
      class="text-4xl font-extrabold text-brand-primary mb-12 border-l-4 border-brand-primary pl-4"
    >
      Latest Blog Posts
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <article
        v-for="(post, i) in posts"
        :key="i"
        class="flex flex-col rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:scale-[1.03] border border-gray-200"
      >
        <div class="relative overflow-hidden rounded-t-lg aspect-[4/3]">
          <img
            :src="post.thumbnail"
            :alt="post.title"
            class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            aria-hidden="true"
          ></div>
        </div>
        <div class="p-5 flex flex-col flex-grow">
          <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {{ post.title }}
          </h3>
          <p class="text-sm text-gray-600 flex-grow leading-relaxed">
            {{ post.excerpt }}
          </p>
          <time class="mt-4 text-xs font-mono text-brand-primary" :datetime="post.date">
            {{ post.dateFormatted }}
          </time>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    title: 'Graduation & Beyond',
    thumbnail: '/images/blog1.jpg',
    excerpt: 'Reflecting on the journey and what lies ahead in my tech career.',
    date: '2025-06-01',
    dateFormatted: 'June 1, 2025',
  },
  {
    title: 'Launching My First Product',
    thumbnail: '/images/blog2.jpg',
    excerpt: 'Insights and lessons learned from bringing my first app to market.',
    date: '2025-05-15',
    dateFormatted: 'May 15, 2025',
  },
  {
    title: 'Lessons from Startup Life',
    thumbnail: '/images/blog3.jpg',
    excerpt: 'Real talk about challenges and victories in startup life.',
    date: '2025-04-30',
    dateFormatted: 'April 30, 2025',
  },
]
</script>

<style scoped>
.text-brand-primary {
  color: #00afb9;
}
</style>

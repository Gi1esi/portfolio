<template>
  <section class="max-w-6xl mx-auto px-6 py-12 md:py-1">
    <div
      class="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-center bg-white px-6 py-7 rounded-lg shadow-sm dark:bg-neutral-darkBg"
    >
      <!-- Image Grid (Wider) -->
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="relative rounded-xl overflow-hidden group shadow-sm aspect-[3/4]"
        >
          <img
            :src="job.image"
            :alt="job.org"
            class="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="text-white font-semibold text-lg text-center px-2">{{ job.org }}</span>
          </div>
        </div>
      </div>

      <!-- Experience Text -->
      <div class="space-y-5">
        <h2 class="text-3xl font-bold text-brand-primary">Experience</h2>
        <p class="text-gray-700 dark:text-gray-500 text-base leading-relaxed mb-3">
          I work at the intersection of systems, infrastructure, and impact.
          <span class="text-brand-secondary font-semibold"
            >Solving problems at scale is what I enjoy most.</span
          >
        </p>
        <a
          href="/about"
          class="inline-block px-5 py-2 btn btn-primary text-white rounded-md font-medium hover:bg-opacity-90 transition"
        >
          View My Experience
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    org: 'Malawi Research and Education Network (MAREN)',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQEE47Ld6m8yOw/feedshare-shrink_1280/B4DZake0w9GsAo-/0/1746516269326?e=1756944000&v=beta&t=TydwxckocY1vAaFREnt4k7y0pCrNKANnMDLj69qv-o4',
  },
  {
    org: 'ElevatEd',
    image:
      'https://media.licdn.com/dms/image/v2/D4D22AQFyYBXXkUHAxA/feedshare-shrink_800/B4DZZneFy_HwAg-/0/1745492664761?e=1756944000&v=beta&t=7o6tOviNDxnTrZsImxDNPkZwuIyAo1DwD6-1jQiJpVM',
  },
]
</script>

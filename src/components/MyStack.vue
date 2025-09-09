<template>
  <section
    class="relative bottom-10 md:static max-w-3xl mx-auto my-12 p-10 bg-white rounded-lg shadow-md dark:bg-transparent"
  >
    <h2 class="text-2xl font-extrabold text-brand-primary mb-10 text-center">Technologies I Use</h2>

    <div class="flex gap-3 flex-wrap items-center justify-center pb-7">
      <div
        v-for="(item, i) in allStack"
        :key="i"
        class="aspect-square w-16 sm:w-20 md:w-20 flex flex-col items-center justify-center border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition p-2 sm:p-3"
      >
        <img
          :src="item.logo"
          :alt="item.label"
          class="w-4 h-4 sm:w-5 sm:h-5 object-contain mb-1 sm:mb-2"
        />
        <span
          class="text-[10px] sm:text-xs font-medium text-center text-gray-700 dark:text-gray-400"
        >
          {{ item.label }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const allStack = [
  { label: 'Html', logo: '/assets/logos/html.png' },
  { label: 'Javascript', logo: '/assets/logos/javascript.png' },
  { label: 'Tailwind', logo: '/assets/logos/tailwind.png' },
  { label: 'C++', logo: '/assets/logos/c++.png' },
  { label: 'Docker', logo: '/assets/logos/docker.png' },
  { label: 'Python', logo: '/assets/logos/python.png' },
  { label: 'Vue', logo: '/assets/logos/vue.png' },
  { label: 'Laravel', logo: '/assets/logos/laravel.png' },
  { label: 'Postgresql', logo: '/assets/logos/postgresql.png' },
  { label: 'Mysql', logo: '/assets/logos/iot.svg' },
  { label: 'Flutter', logo: '/images/flutter.png' },
  { label: 'Ansible', logo: '/images/Ansible.png' },
  { label: 'Django', logo: '/images/django.png' },
  { label: 'FastAPI', logo: '/images/fastapi.png' },
]
</script>

<style scoped>
.text-brand-primary {
  color: #00afb9;
}
</style>

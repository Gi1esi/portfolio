<template>
  <section class="max-w-3xl mx-auto my-12 p-10 bg-white rounded-lg shadow-md dark:bg-transparent">
    <h2 class="text-3xl font-extrabold text-brand-primary mb-10 text-center">My Stack</h2>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 place-items-center"
    >
      <div
        v-for="(item, i) in allStack"
        :key="i"
        class="aspect-square w-[95px] md:w-[100px] flex flex-col items-center justify-center border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition p-3"
      >
        <img :src="item.logo" :alt="item.label" class="w-6 h-6 object-contain mb-2" />
        <span class="text-xs font-medium text-center text-gray-700">{{ item.label }}</span>
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
  { label: 'Scripting', logo: '/assets/logos/python.svg' },
  { label: 'Containers', logo: '/assets/logos/docker.svg' },
  { label: 'Monitoring', logo: '/assets/logos/prometheus.svg' },
  { label: 'Cloud Automation', logo: '/assets/logos/terraform.svg' },
]
</script>

<style scoped>
.text-brand-primary {
  color: #00afb9;
}
</style>

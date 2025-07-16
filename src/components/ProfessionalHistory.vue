<template>
  <div class="md:card rounded p-3 bg-white dark:bg-brand-primary/15 my-6">
    <h5 class="font-semibold mb-6 dark:text-brand-white py-5">Professional History</h5>

    <div class="space-y-6">
      <div
        v-for="(item, index) in history"
        :key="index"
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4"
      >
        <!-- Left: Logo + Org Name + Role -->
        <div class="flex items-center gap-4">
          <img
            :src="item.logo"
            :alt="item.org"
            class="w-14 h-14 rounded-full object-cover bg-gray-200"
          />
          <div>
            <h3 class="text-base font-semibold text-gray-800 dark:text-white/80">
              {{ item.org }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ item.role }}</p>
          </div>
        </div>

        <!-- Right: Location + Years -->
        <div class="text-sm text-right sm:text-left">
          <p class="font-medium text-gray-700 dark:text-gray-300">
            {{ item.district }}, {{ item.country }}
          </p>
          <p class="text-gray-500 dark:text-gray-400">{{ item.years }}</p>
        </div>
      </div>
    </div>

    <div class="my-10 flex items-center justify-center">
      <button class="btn bg-brand-primary rounded-3xl text-white font-semi-bold px-8 py-2">
        <a href="https://www.linkedin.com/in/grace-gausi-947ab4269">View LinkedIn Profile</a>
      </button>
    </div>
  </div>
</template>

<script setup>
const history = [
  {
    org: 'ElevatEd',
    role: 'Program Coordinator & Tutor Coordinator',
    logo: '/images/ElevatEd_logo.png',
    district: 'Blantyre',
    country: 'Malawi',
    years: '2025 – Present',
  },
  {
    org: 'MAREN',
    role: 'Systems Engineer',
    logo: '/images/MAREN.jpg',
    district: 'Blantyre',
    country: 'Malawi',
    years: '2023 – Present',
  },
  {
    org: 'CyberSafe Foundation',
    role: 'DevSecOps Trainee',
    logo: '/images/cyberSafe.jpg',
    district: 'Lagos',
    country: 'Nigeria',
    years: '2022 – 2023',
  },

  // Add more records as needed
]
</script>

<template>
  <section class="md:w-[92%]">
    <nav class="p-3 rounded-md bg-brand-primary/30 my-6 w-full md:w-[90%]">
      <ul
        class="flex items-center justify-center gap-5 md:gap-8 text-sm font-medium dark:text-white"
      >
        <li
          @click="active = 'elevator-pitch'"
          :class="{
            'dark:bg-brand-primary/70 bg-white/50 rounded-md p-2 cursor-pointer':
              active === 'elevator-pitch',
          }"
        >
          <a href="#">Elevator Pitch</a>
        </li>
        <li
          @click="active = 'brief-profile'"
          :class="{
            'dark:bg-brand-primary/70 bg-white/50 rounded-md p-2 cursor-pointer':
              active === 'brief-profile',
          }"
        >
          <a href="#">Brief Profile</a>
        </li>
        <li
          @click="active = 'full-bio'"
          :class="{
            'dark:bg-brand-primary/70 bg-white/50 rounded-md p-2 cursor-pointer':
              active === 'full-bio',
          }"
        >
          <a href="#">Full Bio</a>
        </li>
      </ul>
    </nav>

    <!-- Sections -->
    <div v-if="active === 'elevator-pitch'" class="mb-6">
      <div class="w-full max-w-[550px]">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7315998842879918081?collapsed=1"
          height="669"
          class="w-full"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
    </div>

    <div v-if="active === 'brief-profile'" class="mb-6 text-base">
      <img
        src="/images/gile.jpg"
        alt="Grace Gausi"
        class="rounded-xl shadow-lg w-[90%] object-cover aspect-square mb-5"
      />
      <p>
        Grace Gausi is an early-career systems engineer from Malawi with a passion for building
        purposeful, context-aware technology. With a background in IT infrastructure, AI for social
        good, and academic excellence, she designs and maintains systems that bridge real-world
        gaps. She’s especially interested in ethical tech, African digital sovereignty, and making
        advanced tools accessible in low-resource settings.
      </p>
    </div>

    <div v-if="active === 'full-bio'" class="mb-6 text-base">
      <img
        src="/images/Grace_Gausi_Graduation.jpg"
        alt="Grace Gausi"
        class="rounded-xl shadow-lg w-[90%] object-cover aspect-square mb-5"
      />
      <p class="my-3">
        Grace Gausi is an early-career systems engineer from Malawi who builds technology with
        purpose. Her work spans IT infrastructure, secure network systems, and software development,
        with a focus on making advanced tools usable and meaningful in resource-constrained
        environments.
      </p>
      <p class="my-3">
        She currently contributes to national research infrastructure through her role at
        <a href="https://maren.ac.mw" class="underline">MAREN</a>, where she helps academic
        institutions connect to global platforms through secure, federated systems.
      </p>
      <p class="my-3">
        She also co-founded <a href="https://elevatedmw.org" class="underline">ElevatEd</a>, a non
        profit organisation that connects students and alumni who have excelled in certain subjects
        to those who are struggling. Grace holds a degree in Management Information Systems from
        <a href="https://mubas.ac.mw" class="underline"
          >The Malawi University of Business and Applied Sciences</a
        >
        and has received multiple awards for academic excellence and research leadership.
      </p>
      <p class="my-3">
        Her interests lie at the intersection of ethical AI, digital sovereignty, and infrastructure
        that empowers rather than excludes. Both in her professional and personal work, she’s
        committed to shaping tech that fits real people and real contexts, especially in African
        settings too often left out of the design process.
      </p>
    </div>

    <!-- Static Contact Section -->
    <div class="text-brand-secondary font-bold mt-10 text-xl">
      <router-link to="/contact">Get in Touch..</router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('elevator-pitch')
</script>

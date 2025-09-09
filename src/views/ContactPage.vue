<template>
  <section class="p-6 md:p-16 dark:bg-neutral-darkBg text-gray-800 dark:text-white">
    <div class="max-w-6xl mx-auto space-y-20">
      <!-- Hero/Intro -->
      <div class="space-y-4">
        <h1 class="text-2xl font-extrabold text-brand-primary">Let’s Talk</h1>
        <p class="text-base text-gray-600 dark:text-gray-300">
          Reach out if you have an idea, a question, or just need a hand getting started.
        </p>
      </div>

      <!-- 3 Cards -->
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card rounded p-6 dark:bg-brand-primary/5">
            <h3 class="font-semibold text-brand-primary/90 text-center">Software Development</h3>
            <p class="text-base pt-3 text-gray-600 dark:text-white/50">
              If you have something in mind or just need help figuring it out, I’m open to working
              on projects.
            </p>
          </div>

          <div class="card rounded p-6 dark:bg-brand-primary/5">
            <h3 class="font-semibold text-brand-primary/90 text-center">Tech Consulting</h3>
            <p class="text-base text-gray-600 dark:text-white/50">
              If you’re unsure or need help setting things up the right way, I can walk you through
              it.
            </p>
          </div>

          <div class="card rounded p-6 dark:bg-brand-primary/5">
            <h3 class="font-semibold text-brand-primary/90 text-center">Mentorship</h3>
            <p class="text-base text-gray-600 dark:text-white/50">
              I know what it’s like to learn this stuff from scratch. I’m happy to help if you need
              someone to ask questions.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto p-10 card dark:bg-transparent">
        <h2 class="text-2xl font-extrabold text-brand-primary mb-8 text-center">Send a Message</h2>

        <form ref="form" @submit.prevent="sendEmail" class="space-y-6">
          <!-- Feedback Messages -->
          <p v-if="status === 'success'" class="mt-4 text-brand-primary font-medium text-center">
            Your message has been sent successfully!
          </p>
          <p v-if="status === 'error'" class="mt-4 text-brand-secondary font-medium text-center">
            Something went wrong: {{ error.text }}
          </p>
          <div>
            <label for="name" class="block text-sm font-semibold mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-semibold mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
            ></textarea>
          </div>

          <button
            type="submit"
            value="Send"
            class="w-full bg-brand-primary text-white font-semibold py-3 rounded-xl hover:bg-brand-primary/90 transition"
          >
            <span v-if="status !== 'loading'">Send Mail</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>

      <!-- Freelance Note -->
      <div class="text-center pt-10 font-semibold text-brand-secondary text-xl">
        I am Open to Freelance Work
      </div>
    </div>
  </section>

  <!-- Vertical Social Icons Sidebar -->
  <div
    class="md:fixed md:top-1/3 md:right-12 md:z-50 flex flex-row justify-center md:justify-start md:flex-col md:space-y-4 md:space-x-0 space-x-4 text-2xl text-brand-primary dark:text-white"
  >
    <a
      href="https://www.linkedin.com/in/grace-gausi-947ab4269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BydG%2FSumcSIaG%2BwS8wSqyqg%3D%3D"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-linkedin-box-fill"></i>
    </a>
    <a
      href="https://github.com/Gi1esi"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-github-fill"></i>
    </a>
    <a href="#" target="_blank" rel="noopener" class="hover:text-brand-secondary">
      <i class="ri-graduation-cap-fill"></i>
    </a>
    <a
      href="https://www.facebook.com/grace.gausie"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-facebook-box-fill"></i>
    </a>
    <a href="#" target="_blank" rel="noopener" class="hover:text-brand-secondary">
      <i class="ri-instagram-line"></i>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const status = ref(null) // null | 'loading' | 'success' | 'error'

const sendEmail = () => {
  status.value = 'loading'
  emailjs
    .sendForm('contact_service', 'contact_form', form.value, {
      publicKey: 'TCVH6v7RvAZz-66gR',
    })
    .then(() => {
      status.value = 'success'
      form.value.reset()
    })
    .catch((error) => {
      status.value = 'error'
    })
}
</script>

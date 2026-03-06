<template>
  <section class="p-6 md:p-16 dark:bg-neutral-darkBg text-gray-800 dark:text-white">
    <div class="max-w-4xl mx-auto space-y-12">

      <!-- Header -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <img src="/images/logo.png" alt="Transactly" class="w-9 h-9" />
          <h1 class="text-2xl font-extrabold text-brand-primary">Transactly Support</h1>
        </div>
        <p class="text-base text-gray-600 dark:text-gray-300">
          Having trouble with the app or have a suggestion? Send a message and I'll get back to you.
        </p>
      </div>

      <!-- FAQ cards -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="faq in faqs"
          :key="faq.q"
          class="card rounded-xl p-6 dark:bg-brand-primary/5 dark:hover:bg-brand-primary/10 hover:shadow-lg transition-all duration-300 border border-transparent dark:border-brand-primary/10 space-y-2"
        >
          <h3 class="font-semibold text-brand-primary/90">{{ faq.q }}</h3>
          <p class="text-sm text-gray-600 dark:text-white/50 leading-relaxed">{{ faq.a }}</p>
        </div>
      </div>

      <!-- Contact form -->
      <div class="max-w-2xl mx-auto p-6 md:p-10 card dark:bg-transparent">
        <h2 class="text-2xl font-extrabold text-brand-primary mb-8 text-center">
          Send a Message
        </h2>

        <form ref="form" @submit.prevent="sendEmail" class="space-y-6">
          <p v-if="status === 'success'" class="text-brand-primary font-medium text-center">
            Message sent! I'll get back to you soon.
          </p>
          <p v-if="status === 'error'" class="text-red-500 font-medium text-center">
            Something went wrong. Please try again.
          </p>

          <div>
            <label for="name" class="block text-sm font-semibold mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
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
              placeholder="your@email.com"
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-semibold mb-1">Subject</label>
            <select
              id="subject"
              name="subject"
              required
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50 dark:bg-neutral-800"
            >
              <option value="" disabled selected>Select a topic</option>
              <option value="Bug Report">Bug Report</option>
              <option value="Feature Request">Feature Request</option>
              <option value="SMS Import Issue">SMS Import Issue</option>
              <option value="Account / Data Question">Account / Data Question</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Describe your issue or suggestion..."
              class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-brand-primary text-white font-semibold py-3 rounded-xl hover:bg-brand-primary/90 transition"
          >
            <span v-if="status !== 'loading'">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>

      <!-- Privacy link -->
      <div class="text-center text-sm text-gray-500 dark:text-gray-400">
        Looking for the
        <router-link to="/transactly/privacy" class="text-brand-primary hover:underline">
          Privacy Policy
        </router-link>
        ?
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const status = ref(null)

const faqs = [
  {
    q: 'My transactions are not importing',
    a: 'Make sure Transactly has SMS permission enabled in your phone settings. Then open the app — it will automatically scan for new transactions.',
  },
  {
    q: 'My bank is not supported',
    a: 'Currently supported: National Bank of Malawi, Standard Bank, FNB Malawi, Airtel Money, and TNM Mpamba. More providers are planned.',
  },
  {
    q: 'Is my financial data safe?',
    a: 'Yes. All data is stored locally on your device only. Transactly has no servers and never transmits your data anywhere.',
  },
  {
    q: 'Can I export my transactions?',
    a: 'Yes — go to Settings → Export Transactions. You can export as CSV (for Excel/Sheets) or PDF for any date range.',
  },
]

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
    .catch(() => {
      status.value = 'error'
    })
}
</script>
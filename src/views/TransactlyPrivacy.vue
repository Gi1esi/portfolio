<template>
  <section class="p-6 md:p-16 dark:bg-neutral-darkBg text-gray-800 dark:text-white">
    <div class="max-w-4xl mx-auto space-y-12">

      <!-- Header -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <img src="/images/logo.png" alt="Transactly" class="w-9 h-9" />
          <h1 class="text-2xl font-extrabold text-brand-primary">Transactly Privacy Policy</h1>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {{ lastUpdated }}
        </p>
        <p class="text-base text-gray-600 dark:text-gray-300">
          Transactly is a personal finance app that helps you track your spending by reading
          bank and mobile money SMS notifications on your device. Your privacy is the foundation
          the app is built on.
        </p>
      </div>

      <!-- Sections -->
      <div class="space-y-10">

        <div
          v-for="section in sections"
          :key="section.title"
          class="card rounded-xl p-6 dark:bg-brand-primary/5 border border-transparent dark:border-brand-primary/10 space-y-3"
        >
          <h2 class="text-lg font-bold text-brand-primary">{{ section.title }}</h2>
          <p
            v-for="(para, i) in section.paragraphs"
            :key="i"
            class="text-base text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {{ para }}
          </p>
          <ul
            v-if="section.bullets"
            class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300"
          >
            <li v-for="(bullet, i) in section.bullets" :key="i" class="text-base">
              {{ bullet }}
            </li>
          </ul>
        </div>

      </div>

      <!-- Contact -->
      <div class="text-center pt-4 space-y-2">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          Questions about this policy?
        </p>
        <router-link
          to="/contact"
          class="inline-block text-brand-primary font-semibold hover:underline"
        >
          Contact me →
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
const lastUpdated = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const sections = [
  {
    title: '1. What Data Transactly Reads',
    paragraphs: [
      'Transactly requests permission to read SMS messages on your device solely to detect transaction notifications from your bank or mobile money provider (e.g. National Bank of Malawi, Airtel Money, TNM Mpamba).',
      'The app reads only messages from known financial sender IDs. General SMS messages, personal conversations, or messages from unrecognised senders are never accessed or stored.',
    ],
  },
  {
    title: '2. How Your Data is Stored',
    paragraphs: [
      'All data — including transaction history, categories, budgets, and account details — is stored exclusively on your device in a local SQLite database.',
      'Transactly has no servers, no cloud sync, and no backend. Your financial data never leaves your phone.',
    ],
  },
  {
    title: '3. Data We Do Not Collect',
    paragraphs: ['The following data is never collected, transmitted, or stored remotely:'],
    bullets: [
      'Personal identification information (name, ID number, date of birth)',
      'SMS message content beyond transaction notifications',
      'Location data',
      'Device identifiers or advertising IDs',
      'Contacts or call logs',
      'Usage analytics or crash reports sent to any server',
    ],
  },
  {
    title: '4. Third-Party Services',
    paragraphs: [
      'Transactly does not integrate with any third-party analytics, advertising, or data platforms. No data is shared with any third party for any purpose.',
    ],
  },
  {
    title: '5. Permissions Used',
    paragraphs: ['The app requests the following Android permissions:'],
    bullets: [
      'READ_SMS — to detect and import transaction SMS messages',
      'RECEIVE_SMS — to detect new transactions in real time while the app is open',
      'POST_NOTIFICATIONS — to send budget alert notifications',
    ],
  },
  {
    title: '6. Data Deletion',
    paragraphs: [
      'Since all data is stored locally on your device, you can delete all app data at any time by uninstalling Transactly or clearing app data from your device settings. This permanently removes all transactions, budgets, categories, and account information.',
    ],
  },
  {
    title: '7. Children\'s Privacy',
    paragraphs: [
      'Transactly is not directed at children under 13. It does not knowingly collect any information from children.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    paragraphs: [
      'If this privacy policy changes, the updated version will be posted at this URL with a new "Last updated" date. Continued use of the app after changes constitutes acceptance of the updated policy.',
    ],
  },
]
</script>
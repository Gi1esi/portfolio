<template>
  <section
    class="max-w-6xl mx-auto px-6 py-16 mb-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-12 items-center justify-center dark:bg-transparent"
  >
    <!-- Contact Form -->
    <div class="w-full max-w-lg">
      <h2 class="text-3xl font-extrabold text-brand-primary mb-10 text-center">Contact Me</h2>

      <form
        action="mailto:your-email@example.com"
        method="POST"
        enctype="text/plain"
        class="space-y-4"
      >
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="w-full mt-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-semibold text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="w-full mt-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            class="w-full mt-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary dark:bg-neutral-darkBg/50"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-brand-primary text-white font-semibold py-2 px-6 rounded hover:bg-brand-primary/90 transition"
        >
          Send Mail
        </button>
      </form>
    </div>

    <!-- Cards Container -->
    <div class="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        class="card border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition h-[250px]"
      >
        <h3 class="text-lg font-semibold mb-2">Software Development</h3>
        <p>Creating apps and tools that solve real problems, learn fast, and deliver value.</p>
      </div>

      <div
        class="card border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition h-[250px]"
      >
        <h3 class="text-lg font-semibold mb-2">Tech Consulting</h3>
        <p>
          Helping businesses choose and implement the right tech strategies to grow efficiently.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: white;
}

.dark .card {
  background-color: #1f2937; /* Tailwind slate-800 */
  border-color: #374151; /* Tailwind slate-700 */
  color: #d1d5db; /* Tailwind gray-300 */
}
</style>

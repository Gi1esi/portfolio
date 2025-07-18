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

      <!-- Styled FAQ Grid -->
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Column 1 -->

          <div class="card rounded p-6 dark:bg-brand-primary/5">
            <!-- <h2 class="text-xl font-extrabold text-brand-primary mb-12 text-center">
              In case you are wondering
            </h2> -->
            <h3 class="font-semi-bold text-brand-primary/90 text-center">Software Development</h3>
            <p class="text-base pt-3 text-gray-600 dark:text-white/50">
              If you have something in mind or just need help figuring it out, I’m open to working
              on projects.
            </p>
          </div>

          <!-- column 2 -->
          <div class="space-y-4 card rounded p-6 dark:bg-brand-primary/5">
            <!-- <FaqItem question="Can I message you just to talk about an idea?">
              Absolutely. I love hearing early-stage or even half-baked ideas.
            </FaqItem>
            <FaqItem question="Do you ghost people?">
              Nope. If I can't help, I’ll tell you straight.
            </FaqItem> -->
            <h3 class="font-semi-bold text-brand-primary/90 text-center">Tech Consulting</h3>
            <p class="text-base text-gray-600 dark:text-white/50">
              If you’re unsure or need help setting things up the right way, I can walk you through
              it
            </p>
          </div>

          <!-- Column 3 -->
          <div class="space-y-4 card rounded p-6 dark:bg-brand-primary/5">
            <!-- <FaqItem question="Will you judge my typos?">
              Only if they're in production code. Otherwise, bring the chaos.
            </FaqItem>
            <FaqItem question="Are you open to freelance work?">
              Yes. I’m currently open to short-term and long-term freelance projects.
            </FaqItem> -->
            <h3 class="font-semi-bold text-brand-primary/90 text-center">Mentorship</h3>
            <p class="text-base text-gray-600 dark:text-white/50">
              I know what it’s like to learn this stuff from scratch. I’m happy to help if you need
              someone to ask questions
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto p-10 card dark:bg-transparent">
        <h2 class="text-2xl font-extrabold text-brand-primary mb-8 text-center">Send a Message</h2>

        <form
          action="mailto:your-email@example.com"
          method="POST"
          enctype="text/plain"
          class="space-y-6"
        >
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
            class="w-full bg-brand-primary text-white font-semibold py-3 rounded-xl hover:bg-brand-primary/90 transition"
          >
            Send Mail
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
      href="https://www.linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-linkedin-box-fill"></i>
    </a>
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-github-fill"></i>
    </a>
    <a
      href="https://www.datacamp.com/profile/yourusername"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-graduation-cap-fill"></i>
    </a>
    <a
      href="https://facebook.com/yourusername"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-facebook-box-fill"></i>
    </a>
    <a
      href="https://instagram.com/yourusername"
      target="_blank"
      rel="noopener"
      class="hover:text-brand-secondary"
    >
      <i class="ri-instagram-line"></i>
    </a>
  </div>
</template>

<script setup></script>

<template>
  <footer class="mt-16">
    <div>
      <div class="max-w-6xl mx-auto px-0">
        <!-- Card-like Footer Container -->
        <div class="bg-brand-primary/5 shadow-sm rounded-lg overflow-hidden">
          <div class="py-10 px-10 flex flex-col lg:flex-row justify-between items-start gap-12">
            <!-- Profile -->
            <div class="flex flex-col items-center text-center lg:text-left">
              <img
                src="/images/Grace_Gausi_Headshot.jpg"
                alt="Grace Gausi"
                class="w-32 h-32 rounded-full shadow-md object-cover"
              />
            </div>

            <!-- Navigation Links -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm text-gray-700">
              <div>
                <ul class="space-y-2">
                  <li><a href="/" class="hover:text-brand-primary">Home</a></li>
                  <li><a href="/about" class="hover:text-brand-primary">About</a></li>
                  <li><a href="/projects" class="hover:text-brand-primary">Projects</a></li>
                </ul>
              </div>
              <div>
                <ul class="space-y-2">
                  <li><a href="/blog" class="hover:text-brand-primary">Articles</a></li>
                  <li><a href="/stack" class="hover:text-brand-primary">Tech Stack</a></li>
                  <li><a href="/contact" class="hover:text-brand-primary">Contact</a></li>
                </ul>
              </div>
              <div>
                <ul class="space-y-2">
                  <li>
                    <a
                      href="https://github.com/your-github"
                      class="hover:text-brand-primary"
                      target="_blank"
                      >GitHub</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/your-profile"
                      class="hover:text-brand-primary"
                      target="_blank"
                      >LinkedIn</a
                    >
                  </li>
                  <li><a href="/facebook" class="hover:text-brand-primary">Facebook</a></li>
                </ul>
              </div>
            </div>

            <!-- Socials -->
            <div class="text-center lg:text-right space-y-4">
              <p class="text-sm mt-4 text-gray-600">Connect with me</p>
              <div class="flex justify-center lg:justify-end gap-4 text-xl text-brand-primary">
                <a href="https://github.com/your-github" target="_blank"
                  ><i class="ri-github-fill"></i
                ></a>
                <a href="https://linkedin.com/in/your-profile" target="_blank"
                  ><i class="ri-linkedin-box-fill"></i
                ></a>
                <a href="mailto:your-email@example.com"><i class="ri-mail-send-line"></i></a>
              </div>
            </div>
          </div>

          <!-- Bottom Accent Strip -->
          <div class="h-3 w-full bg-brand-primary/30"></div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="my-5 pt-4 text-center text-sm">
        © 2025. Crafted with <span class="text-brand-secondary font-bold">♥</span> by Grace Gausi.
        All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css');
</style>

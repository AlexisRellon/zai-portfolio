<template>
  <section id="about" class="py-20 bg-background">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary relative inline-block">
          About Me
          <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary transform"></span>
        </h2>
        <p class="text-neutral mt-6 max-w-2xl mx-auto">
          An industrious and creative professional with a fervor for innovation. Possessing a talent for applying new concepts quickly, always seeking to expand his knowledge and push the boundaries of what is possible.
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <!-- Image with decorative elements -->
        <div class="lg:w-2/5 relative" data-aos="fade-right">
          <div class="relative z-10">
            <img src="/resources/images/ZaiFormal.png" alt="Zhyron Wynriel Alimon" class="rounded-xl shadow-xl max-w-full mx-auto" />
            
            <!-- Decorative elements -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-secondary rounded-xl z-0"></div>
            <div class="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary rounded-xl z-0"></div>
          </div>
        </div>
        
        <!-- About content and details -->
        <div class="lg:w-3/5" data-aos="fade-left">
          <p class="text-neutral mb-6">
            Whether it's in the office or in his personal pursuits, he brings a unique perspective to every project he takes on, making him an invaluable asset to any team. His background in Political Science combined with his technological skills creates a versatile profile that can adapt to various environments and challenges.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="info-item">
              <h3 class="font-medium text-primary mb-2">Name:</h3>
              <p class="text-neutral">Zhyron Wynriel Alimon</p>
            </div>
            
            <div class="info-item">
              <h3 class="font-medium text-primary mb-2">Email:</h3>
              <p class="text-neutral">alimon.zhyron@gmail.com</p>
            </div>
            
            <div class="info-item">
              <h3 class="font-medium text-primary mb-2">Address:</h3>
              <p class="text-neutral">Makati City</p>
            </div>
            
            <div class="info-item">
              <h3 class="font-medium text-primary mb-2">Phone:</h3>
              <p class="text-neutral">0967 389 5823</p>
            </div>
          </div>
          
          <div class="mt-8 flex gap-4">
            <a href="/resources/images/Alimon_ZhyronCV.pdf" target="_blank" class="btn-primary group">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a href="/resources/images/Thesis.pdf" target="_blank" class="btn-secondary group">
              View Thesis
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// About Me component
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-6 py-3 rounded-lg bg-primary text-background font-medium transition-all hover:bg-primary/90 hover:shadow-lg;
}

.btn-secondary {
  @apply inline-flex items-center px-6 py-3 rounded-lg bg-transparent border-2 border-neutral text-neutral font-medium transition-all hover:border-secondary hover:text-secondary hover:shadow-lg;
}

.info-item {
  @apply bg-background p-4 rounded-lg shadow-sm border border-neutral/10 hover:shadow-md transition-shadow;
}
</style>
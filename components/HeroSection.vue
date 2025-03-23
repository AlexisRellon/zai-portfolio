<template>
  <section id="home" class="min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
        <!-- Text Content -->
        <div class="lg:w-1/2 order-2 lg:order-1 mt-10 lg:mt-0 text-center lg:text-left" data-aos="fade-right">
          <h3 class="text-lg md:text-xl font-medium text-neutral mb-3">Hello, I'm</h3>
          <h1 class="text-4xl md:text-6xl font-bold text-primary mb-6">
            <span class="relative inline-block">
              Zhyron Wynriel
              <span class="absolute -bottom-1 left-0 w-full h-1 bg-secondary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
            <span class="block mt-1">Alimon</span>
          </h1>
          <h2 class="text-xl md:text-2xl font-medium text-secondary mb-6">Political Science Graduate & Tech Enthusiast</h2>
          <p class="text-neutral text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
            Enter the world of a forward-thinking Political Science graduate, fueled by a fervent passion for technology and a relentless pursuit of personal and professional advancement.
          </p>
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#portfolio" class="btn-primary group">
              <span>View My Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" class="btn-secondary group">
              <span>Contact Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="lg:w-1/2 order-1 lg:order-2 relative" data-aos="fade-left">
          <div class="relative z-10 mx-auto lg:ml-auto">
            <img src="/resources/images/zai.jpg" alt="Zhyron Wynriel Alimon" class="rounded-xl shadow-xl max-w-full mx-auto" style="max-height: 70vh;" />
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl z-0"></div>
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-xl z-0"></div>
          </div>
          
          <!-- Floating elements -->
          <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-neutral/10 rounded-full animate-float-slow"></div>
          <div class="absolute bottom-1/3 right-1/4 w-10 h-10 bg-primary/10 rounded-full animate-float-medium"></div>
          <div class="absolute top-1/2 right-1/3 w-8 h-8 bg-secondary/10 rounded-full animate-float-fast"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Hero component
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-6 py-3 rounded-lg bg-primary text-background font-medium transition-all hover:bg-primary/90 hover:shadow-lg;
}

.btn-secondary {
  @apply inline-flex items-center px-6 py-3 rounded-lg bg-transparent border-2 border-neutral text-neutral font-medium transition-all hover:border-secondary hover:text-secondary hover:shadow-lg;
}

@keyframes float-slow {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}

@keyframes float-medium {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@keyframes float-fast {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}
</style>
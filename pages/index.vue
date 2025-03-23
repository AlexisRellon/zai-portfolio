<template>
  <div>
    <Navbar />
    
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
    
    <FooterSection />
    
    <!-- Back to top button -->
    <button 
      @click="scrollToTop" 
      class="back-to-top fixed bottom-6 right-6 z-30 bg-primary hover:bg-primary/90 text-background p-3 rounded-full shadow-lg transition-all duration-300"
      :class="{ 'translate-y-20': !showBackToTop, 'translate-y-0': showBackToTop }">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Declare AOS on window object for TypeScript
declare global {
  interface Window {
    AOS: any;
  }
}

// Back to top button logic
const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const checkScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  
  // Add AOS (Animate On Scroll) initialization
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.back-to-top {
  transition: transform 0.3s ease;
}
</style>
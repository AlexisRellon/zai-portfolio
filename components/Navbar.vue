<template>
  <nav class="navbar fixed top-0 left-0 right-0 z-40 transition-all duration-300"
       :class="{ 'bg-background/90 backdrop-blur-md shadow-md py-2': scrollPosition > 100, 'py-6': scrollPosition <= 100 }">
    <div class="container mx-auto px-4 md:px-8 flex justify-between items-center">
      <!-- Logo -->
      <div class="logo">
        <NuxtLink to="#home" class="text-2xl md:text-3xl font-bold text-primary tracking-wider hover:text-secondary transition-colors">
          ZAI
        </NuxtLink>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 items-center">
        <NuxtLink v-for="item in menuItems" :key="item.label" 
                  :to="item.link" 
                  class="nav-link relative text-neutral hover:text-primary transition-colors py-2"
                  :class="{ 'text-primary font-medium': activeSection === item.link.substring(1) }">
          {{ item.label }}
        </NuxtLink>
      </div>
      
      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="block md:hidden text-primary focus:outline-none">
        <span v-if="!mobileMenuOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </span>
        <span v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 px-4 transition-all duration-300">
      <div class="flex flex-col space-y-4">
        <NuxtLink v-for="item in menuItems" :key="item.label" 
                 :to="item.link" 
                 @click="mobileMenuOpen = false"
                 class="nav-link block py-2 px-4 text-neutral hover:text-primary hover:bg-primary/5 rounded transition-colors"
                 :class="{ 'text-primary font-medium bg-primary/5': activeSection === item.link.substring(1) }">
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useScrollPosition, useActiveSection } from '~/composables/navigation';

const { scrollPosition } = useScrollPosition();
const { activeSection } = useActiveSection();
const mobileMenuOpen = ref(false);

const menuItems = [
  { label: 'Home', link: '#home' },
  { label: 'About', link: '#about' },
  { label: 'Skills', link: '#skills' },
  { label: 'Portfolio', link: '#portfolio' },
  { label: 'Contact', link: '#contact' }
];
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-link::after {
    display: none;
  }
}
</style>
<template>
  <div class="welcome-splash-screen fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000" 
       :class="{ 'opacity-0 pointer-events-none': !isVisible }">
    <div class="container flex flex-col items-center justify-center gap-8 text-center">
      <div class="logo-container animate-pulse">
        <h1 class="text-6xl md:text-8xl font-bold tracking-wider text-primary">
          <span class="inline-block transform transition-transform hover:scale-110 duration-300">Z</span>
          <span class="inline-block transform transition-transform hover:scale-110 duration-300">A</span>
          <span class="inline-block transform transition-transform hover:scale-110 duration-300">I</span>
        </h1>
      </div>
      <div class="loading-bar w-64 h-1 bg-neutral/20 rounded-full overflow-hidden">
        <div class="h-full bg-primary rounded-full" :style="{ width: `${loadingProgress}%` }"></div>
      </div>
      <p class="text-neutral text-lg">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(true);
const loadingProgress = ref(0);
const loadingText = ref('Loading Portfolio...');

const loadingTexts = [
  'Loading Portfolio...',
  'Gathering Projects...',
  'Polishing UI...',
  'Almost Ready...',
  'Welcome!'
];

onMounted(() => {
  const interval = setInterval(() => {
    if (loadingProgress.value < 100) {
      loadingProgress.value += 5;
      
      if (loadingProgress.value >= 20 && loadingProgress.value < 40) {
        loadingText.value = loadingTexts[1];
      } else if (loadingProgress.value >= 40 && loadingProgress.value < 60) {
        loadingText.value = loadingTexts[2];
      } else if (loadingProgress.value >= 60 && loadingProgress.value < 80) {
        loadingText.value = loadingTexts[3];
      } else if (loadingProgress.value >= 80) {
        loadingText.value = loadingTexts[4];
      }
    } else {
      clearInterval(interval);
      setTimeout(() => {
        isVisible.value = false;
      }, 500);
    }
  }, 100);
});
</script>

<style scoped>
.welcome-splash-screen {
  background-color: var(--background);
  transition: opacity 0.5s ease;
}

.logo-container {
  position: relative;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 5px rgba(0, 92, 69, 0.2);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 92, 69, 0.6);
  }
  100% {
    text-shadow: 0 0 5px rgba(0, 92, 69, 0.2);
  }
}

.welcome-splash-screen h1 {
  animation: glow 3s infinite;
}
</style>
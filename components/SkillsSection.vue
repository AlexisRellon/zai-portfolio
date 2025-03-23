<template>
  <section id="skills" class="py-20 bg-neutral/5">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary relative inline-block">
          My Skills
          <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary transform"></span>
        </h2>
        <p class="text-neutral mt-6 max-w-2xl mx-auto">
          A diverse set of abilities that combine creativity, analytical thinking, and technical expertise.
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-up">
        <div v-for="(skill, index) in skills" :key="index" 
             class="skill-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-background border-t-4"
             :class="`border-t-${skill.color}`">
          <div class="flex items-center mb-4">
            <component :is="skill.icon" class="h-8 w-8 mr-4" :class="`text-${skill.color}`" />
            <h3 class="text-xl font-semibold text-primary">{{ skill.name }}</h3>
          </div>
          <p class="text-neutral">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const skills = [
  {
    name: 'Graphic Design & Video Editing',
    description: 'Expertise in Adobe Creative Suite, video editing, and visual storytelling.',
    color: 'primary',
    icon: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>`
    }
  },
  {
    name: 'Research & Data Analysis',
    description: 'Proficient in data interpretation, research methodology, and statistical analysis.',
    color: 'secondary',
    icon: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>`
    }
  },
  {
    name: 'Marketing',
    description: 'Skilled in social media strategy, content creation, and brand development.',
    color: 'primary',
    icon: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>`
    }
  }
];
</script>

<style scoped>
.skill-card {
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.border-t-primary {
  border-top-color: var(--primary);
}

.border-t-secondary {
  border-top-color: var(--secondary);
}

.text-primary {
  color: var(--primary);
}

.text-secondary {
  color: var(--secondary);
}
</style>
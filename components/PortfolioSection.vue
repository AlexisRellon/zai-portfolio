<template>
  <section id="portfolio" class="py-20 bg-background">
    <div class="container mx-auto px-4 md:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-primary relative inline-block">
          My Portfolio
          <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary transform"></span>
        </h2>
        <p class="text-neutral mt-6 max-w-2xl mx-auto">
          A diverse collection of projects showcasing my creative and analytical skills
        </p>
      </div>
      
      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          class="px-4 py-2 rounded-full transition-all"
          :class="activeCategory === category ? 'bg-primary text-background' : 'bg-neutral/10 text-neutral hover:bg-neutral/20'">
          {{ category }}
        </button>
      </div>
      
      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="portfolio-item relative group overflow-hidden rounded-xl shadow-md"
          data-aos="zoom-in"
          :data-aos-delay="project.id * 100">
          
          <!-- Project Image -->
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 class="text-xl font-bold text-background mb-2">{{ project.title }}</h3>
            <p class="text-background/90 mb-4 text-sm">{{ project.description }}</p>
            <div class="flex gap-3">
              <a v-if="project.link" :href="project.link" target="_blank" class="bg-background/20 hover:bg-background/30 text-background py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                View Project
              </a>
              <button @click="openModal(project)" class="bg-background text-primary py-2 px-4 rounded-lg text-sm hover:bg-background/90 transition-colors duration-300">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project Modal -->
    <div v-if="modalProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm transition-opacity" @click.self="closeModal">
      <div class="bg-background rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" data-aos="fade-up">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-primary">{{ modalProject.title }}</h3>
            <button @click="closeModal" class="text-neutral hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <img :src="modalProject.image" :alt="modalProject.title" class="w-full rounded-lg mb-6 shadow-md" />
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in modalProject.tags" :key="tag" class="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
              {{ tag }}
            </span>
          </div>
          
          <p class="text-neutral mb-6">{{ modalProject.longDescription || modalProject.description }}</p>
          
          <div class="flex gap-4">
            <a v-if="modalProject.link" href="modalProject.link" target="_blank" class="btn-primary group">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

// Define project interface
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  link: string | null;
  tags: string[];
}

const activeCategory = ref('All');
const modalProject = ref<Project | null>(null);

const categories = ['All', 'Design', 'Research', 'Marketing', 'Graphics'];

// Portfolio projects
const projects = [
  {
    id: 1,
    title: 'VetBuddy App',
    description: 'A mobile application for pet owners to track veterinary appointments',
    longDescription: 'A comprehensive mobile application designed to help pet owners track veterinary appointments, medication schedules, and health records. This project focuses on creating an intuitive user interface with seamless user experience.',
    category: 'Design',
    image: './resources/images/p_VetBuddy.png',
    link: null,
    tags: ['UI/UX Design', 'Mobile App', 'Pet Care']
  },
  {
    id: 2,
    title: 'ShaFiya Branding',
    description: 'Brand identity design for a wellness company',
    longDescription: 'Complete brand identity design for ShaFiya, a holistic wellness company. The project included logo design, color palette selection, typography, and brand guidelines to ensure consistent representation across all platforms.',
    category: 'Design',
    image: './resources/images/p_ShaFiya.png',
    link: null,
    tags: ['Branding', 'Logo Design', 'Visual Identity']
  },
  {
    id: 3,
    title: 'Political Science Research',
    description: 'Academic research on governance and policy implementation',
    longDescription: 'Comprehensive academic research focused on governance structures and policy implementation in developing nations. This study involved data collection, analysis, and presentation of findings through visual aids and detailed reports.',
    category: 'Research',
    image: './resources/images/p_PolSci.png',
    link: null,
    tags: ['Academic Research', 'Policy Analysis', 'Data Visualization']
  },
  {
    id: 4,
    title: 'Marketing Campaign',
    description: 'Digital marketing strategy for a local business',
    longDescription: 'Comprehensive digital marketing strategy developed for a local business to increase online presence and customer engagement. The campaign included social media content, email marketing, and performance analytics.',
    category: 'Marketing',
    image: './resources/images/p_Ad.png',
    link: null,
    tags: ['Digital Marketing', 'Social Media', 'Content Strategy']
  },
  {
    id: 5,
    title: 'Logo Design Collection',
    description: 'A series of logo designs for various clients',
    longDescription: 'A collection of distinctive logo designs created for clients across different industries. Each logo was crafted to reflect the unique identity and values of the brand, with attention to scalability and versatility.',
    category: 'Graphics',
    image: './resources/images/p_Logo.png',
    link: null,
    tags: ['Logo Design', 'Brand Identity', 'Visual Communication']
  },
  {
    id: 6,
    title: 'Event Coverage',
    description: 'Photography and media coverage for live events',
    longDescription: 'Professional photography and media coverage services for live events, including corporate gatherings, conferences, and social celebrations. The focus was on capturing key moments and creating engaging visual narratives.',
    category: 'Graphics',
    image: './resources/images/p_Live.png',
    link: null,
    tags: ['Event Photography', 'Media Coverage', 'Visual Storytelling']
  },
  {
    id: 7,
    title: 'TikTok Content Strategy',
    description: 'Social media content planning and execution',
    longDescription: 'Comprehensive TikTok content strategy development and execution for brand awareness and audience engagement. This project involved trend analysis, content creation, and performance optimization.',
    category: 'Marketing',
    image: './resources/images/p_tiktok.png',
    link: null,
    tags: ['Social Media', 'Content Creation', 'TikTok Marketing']
  },
  {
    id: 8,
    title: 'UP Campaign Materials',
    description: 'Design and production of university campaign materials',
    longDescription: 'Design and production of campaign materials for a university election. This project included creating posters, social media graphics, and promotional materials that aligned with the campaign messaging and university brand guidelines.',
    category: 'Design',
    image: './resources/images/p_UP.png',
    link: null,
    tags: ['Campaign Design', 'Educational Materials', 'Visual Communication']
  },
  {
    id: 9,
    title: 'Magazine Cover Design',
    description: 'Editorial design for print publications',
    longDescription: 'Creative magazine cover design for print publications, focusing on visual hierarchy, typography, and impactful imagery. The design aims to capture attention while effectively communicating the publication\'s content and theme.',
    category: 'Graphics',
    image: './resources/images/p_Cover.png',
    link: null,
    tags: ['Editorial Design', 'Print Media', 'Typography']
  }
];

// Filter projects based on active category
const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === activeCategory.value);
});

// Modal functions
function openModal(project: Project) {
  modalProject.value = project;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalProject.value = null;
  document.body.style.overflow = '';
}
</script>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-6 py-3 rounded-lg bg-primary text-background font-medium transition-all hover:bg-primary/90 hover:shadow-lg;
}
</style>
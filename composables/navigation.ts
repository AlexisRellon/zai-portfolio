import { ref, onMounted, computed } from 'vue';

export const useScrollPosition = () => {
  const scrollPosition = ref(0);
  
  onMounted(() => {
    window.addEventListener('scroll', updateScrollPosition);
    updateScrollPosition();
  });
  
  function updateScrollPosition() {
    scrollPosition.value = window.scrollY;
  }
  
  return { scrollPosition };
};

export const useActiveSection = (sections: string[] = ['home', 'about', 'skills', 'portfolio', 'contact']) => {
  const activeSection = ref('home');
  
  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
  });
  
  function updateActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          activeSection.value = section;
          break;
        }
      }
    }
  }
  
  return { activeSection };
};
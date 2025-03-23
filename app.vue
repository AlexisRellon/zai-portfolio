<template>
  <div>
    <NuxtRouteAnnouncer />
    <WelcomeSplashScreen />
    <NuxtPage />
  </div>
</template>

<style>
  :root {
    --primary: #005C45;
    --secondary: #4A8A79;
    --neutral: #8C8A88;
    --background: #FEFFFF;
  }

  body {
    background-color: var(--background);
    font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
  }
</style>
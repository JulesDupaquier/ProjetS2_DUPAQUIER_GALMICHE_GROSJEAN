<script setup lang ="ts">
    import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-bold">Page non trouvée</p>
        <h1 class="mt-4 text-3xl font-regular tracking-tight sm:text-xl">Error 404</h1>
        <RouterLink to="/"> 
            <p class="mt-6 text-base font-Body leading-7 text-Black">Retourner sur le site en cliquant ici</p>
        </RouterLink>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/" class="text-sm font-semibold text-gray-900">Page d'accueil<span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </main>
  </template>
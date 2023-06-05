  <script setup lang="ts">
  import { pb } from './backend'
  import type { ArtisteResponse } from '@/pocketbase-types'
  const props: ArtisteResponse = defineProps<ArtisteResponse>()

  const img1= props.PhotoArtiste
  const urlImg1 = pb.files.getUrl(props, img1, {thumb : 'LxH'})
</script>

<template>
    <div class="flex flex-col items-center">
      <!-- Photo ronde avec dégradé de couleur -->
      <div class="rounded-full w-24 h-24 bg-gradient-to-t from-primary/200 to-transparent"></div>
  
      <!-- Zone de texte nom/prénom -->
      <div class="mt-4">
        <p class="text-center">Prénom</p>
        <p class="text-center">Nom</p>
      </div>
  
      <!-- Trait séparateur -->
      <hr class="my-8 w-1/2 border-gray-400">
  
      <!-- Chiffres de chaque côté du trait -->
      <div class="flex justify-between w-1/2">
        <p>Chiffre 1</p>
        <p>Chiffre 2</p>
      </div>  
  
      <!-- Titre et image de recette -->
      <h3 class="my-8">Recette enregistrée</h3>
      <img src="path/vers/image.png" alt="Recette" class="w-full">
    </div>
  </template>
  
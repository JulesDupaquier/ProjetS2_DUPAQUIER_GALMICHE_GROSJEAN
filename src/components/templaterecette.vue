<script setup lang="ts">
import { pb } from '@/backend'
import type { RecetteResponse } from '@/pocketbase-type'
const props: RecetteResponse = defineProps<RecetteResponse>()

const img1= props.photo
const urlImg1 = pb.files.getUrl(props, img1, {thumb : 'LxH'})
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center text-4xl font-bold mt-8">{{ nom_recette }}</h1>

    <div class="flex items-center mt-8">
      <h3 class="text-yellow-500 text-2xl font-bold">Nom d'utilisateur</h3>
      <img src="chemin/vers/votre/image.jpg" alt="Photo utilisateur" class="w-12 h-12 rounded-full ml-4">
    </div>

    <img src="chemin/vers/votre/image-longue.jpg" alt="Image de la recette" class="mt-8">

    <div class="flex justify-center mt-8">
      <div class="flex items-center border rounded-full bg-white py-2 px-4">
        <div class="rounded-full bg-black w-8 h-8 flex items-center justify-center">
          <span class="text-white">{{ tag }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <div class="flex items-center mr-8">
        <img src="../components/icons/icon_chronometer.vue" alt="Temps de préparation" class="w-8 h-8">
        <span class="ml-2">{{ preparation_time }}</span>
      </div>
      <div class="flex items-center mr-8">
        <img src="../components/icons/icon_euro.vue" alt="Prix" class="w-8 h-8">
        <span class="ml-2">{{ prix }}</span>
      </div>
      <div class="flex items-center">
        <img src="../components/icons/icon_caractere.vue" alt="Nombre de personnes" class="w-8 h-8">
        <span class="ml-2">{{ personnes }}</span>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold">Ingrédients :</h2>
      <ul class="list-disc list-inside">
        <p>{{ ingredients }}</p>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold">Matériel requis :</h2>
      <ul class="list-disc list-inside">
        <p>{{ materiel }}</p>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold">Étapes à suivre :</h2>
      <ol class="list-decimal list-inside">
        <p>{{ recette }}</p>
      </ol>
    </div>
  </div>
</template>

</template>

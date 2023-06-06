<script setup lang="ts">
import { pb } from '@/backend'
import type icon_chronometerVue from '@/components/icons/icon_chronometer.vue';
import type { RecetteResponse } from '@/pocketbase-types'
const props: RecetteResponse = defineProps<RecetteResponse>()


const img1= props.photo
const urlImg1 = pb.files.getUrl(props, img1, {thumb : 'LxH'})

</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center text-4xl font-bold mt-8">{{ nom_recette }}</h1>

    <img :src="urlImg1" alt="Image de la recette" class="mt-8 w-2/3 rounded-tr-[30px] rounded-bl-[30px]">
        <div class="flex justify-center mt-8">
      <div class="flex items-center border rounded-full bg-white py-2 px-4">
        <div>
          <span class="rounded-full bg-black w-60 h-auto flex items-center justify-center text-white">{{ tag }}</span>
        </div>
      </div>
    </div>
<div class="flex justify-center mt-8">
      <div class="flex items-center mr-8">
        <img src="../../../public/icons/jam_chronometer.svg" alt="Temps de préparation" class="w-8 h-8">
        <span class="ml-2">{{ preparation_time }} minutes</span>
      </div>
      <div class="flex items-center mr-8">
        <img src="../../../public/icons/clarity_euro-solid.svg" alt="Prix" class="w-8 h-8">
        <span class="ml-2">{{ prix }} €/pers.</span>
      </div>
      <div class="flex items-center">
        <img src="../../../public/icons/game-icons_character.svg" alt="Nombre de personnes" class="w-8 h-8">
        <span class="ml-2">{{ personnes }}</span>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mx-44">Ingrédients :</h2>
      <ul class="list-disc list-inside mx-44">
        <p>{{ ingredients }}</p>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mx-44">Matériel requis :</h2>
      <ul class="list-disc list-inside mx-44">
        <p>{{ materiel }}</p>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold mx-44">Étapes à suivre :</h2>
      <ol class="list-decimal list-inside mt-4 text-center mx-44 mb-20">
        <p>{{ recette }}</p>
      </ol>
    </div>
  </div>
</template>

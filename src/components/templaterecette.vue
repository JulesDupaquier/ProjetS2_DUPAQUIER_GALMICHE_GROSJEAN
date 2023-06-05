<script setup lang="ts">
import { pb } from '@/backend'
import type { ArtisteResponse } from '@/pocketbase-types'
const props: ArtisteResponse = defineProps<ArtisteResponse>()

const img1= props.PhotoArtiste
const urlImg1 = pb.files.getUrl(props, img1, {thumb : 'LxH'})
</script>

<template>
<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center text-4xl font-bold mt-8">Nom de la recette</h1>

    <div class="flex items-center mt-8">
      <h3 class="text-yellow-500 text-2xl font-bold">Nom d'utilisateur</h3>
      <img src="chemin/vers/votre/image.jpg" alt="Photo utilisateur" class="w-12 h-12 rounded-full ml-4">
    </div>

    <img src="chemin/vers/votre/image-longue.jpg" alt="Image de la recette" class="mt-8">

    <div class="flex justify-center mt-8">
      <div class="flex items-center border rounded-full bg-white py-2 px-4">
        <div class="rounded-full bg-black w-8 h-8 flex items-center justify-center">
          <span class="text-white">Tag1</span>
        </div>
        <div class="rounded-full bg-black w-8 h-8 flex items-center justify-center mx-4">
          <span class="text-white">Tag2</span>
        </div>
        <div class="rounded-full bg-black w-8 h-8 flex items-center justify-center">
          <span class="text-white">Tag3</span>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <div class="flex items-center mr-8">
        <img src="chemin/vers/icone-temps.png" alt="Temps de préparation" class="w-8 h-8">
        <span class="ml-2">Temps de préparation</span>
      </div>
      <div class="flex items-center mr-8">
        <img src="chemin/vers/icone-prix.png" alt="Prix" class="w-8 h-8">
        <span class="ml-2">Prix</span>
      </div>
      <div class="flex items-center">
        <img src="chemin/vers/icone-personnes.png" alt="Nombre de personnes" class="w-8 h-8">
        <span class="ml-2">Pour X personnes</span>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold">Ingrédients :</h2>
      <ul class="list-disc list-inside">
        <li>Ingrédient 1</li>
        <li>Ingrédient 2</li>
        <li>Ingrédient 3</li>
        <!-- Ajoutez les autres ingrédients -->
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold">Matériel requis :</h2>
      <ul class="list-disc list-inside">
        <li>Matériel 1</li>
        <li>Matériel 2</li>
        <li>Matériel 3</li>
        <!-- Ajoutez les autres éléments du matériel requis -->
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="text-xl font-bold">Étapes de préparation :</h2>
      <ol class="list-decimal list-inside">
        <li>Étape 1</li>
        <li>Étape 2</li>
        <li>Étape 3</li>
        <!-- Ajoutez les autres étapes de préparation -->
      </ol>
    </div>
  </div>
</template>

</template>

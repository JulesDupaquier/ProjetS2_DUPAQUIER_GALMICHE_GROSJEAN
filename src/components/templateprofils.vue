  <script setup lang="ts">
import { pb } from '@/backend'
import PocketBase from 'pocketbase'
import { allRecettesByUser } from '@/backend'
import { allUsers } from '@/backend'

import type { UsersResponse } from '@/pocketbase-types'
const props: UsersResponse = defineProps<UsersResponse>()

import type { RecetteResponse } from '@/pocketbase-types'
// const allrecette =  : RecetteResponse = defineProps<RecetteResponse>()
const recette = await allRecettesByUser();

import type { AuthSystemFields } from '@/pocketbase-types'
// const  AuthSystemFields = defineProps<AuthSystemFields>()
const AuthSystemFields = await allUsers



  const img1= props.avatar
  const urlImg1 = pb.files.getUrl(props, img1, {thumb : 'LxH'})
  const img2= props.avatar
  const urlImg2 = pb.files.getUrl(recette, img2, {thumb : 'LxH'})
</script>

<template>
    <div class="flex flex-col items-center">
      <img :src="urlImg1" class="w- [500px] h-[400px]">
      <div class="rounded-full w-24 h-24 bg-gradient-to-t from-primary/200 to-transparent"></div>
  
      <!-- Zone de texte nom/prénom -->
      <div class="mt-4">
        <p class="text-center">{{ username }}</p>

      </div>
  
      <!-- Titre et image de recette -->
      <h3 class="my-8">{{ recette.users }}</h3>
      <img :src="urlImg2" class="w- [500px] h-[400px]">
    </div>
  </template>
  
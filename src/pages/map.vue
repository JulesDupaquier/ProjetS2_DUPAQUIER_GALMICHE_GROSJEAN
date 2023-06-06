<script setup lang="ts">
import { pb } from '@/backend'
import { allRecettes } from "@/backend";
import Templatetendance from '@/components/templatetendance.vue';
const recetteOne = await allRecettes()
</script>

<template>
     <ul>
      <li v-for="recette of recetteOne" v-bind="{...recette}" :v-key="recette.id">
        <RouterLink 
          :to="{
            name: 'recette-id',
            params: { id: recette.id }
          }"
        >
          <Templatetendance v-bind="{ ...recette }" />
        </RouterLink>
      </li>
    </ul>
</template>
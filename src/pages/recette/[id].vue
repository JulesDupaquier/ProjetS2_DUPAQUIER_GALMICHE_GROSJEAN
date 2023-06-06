<script setup lang="ts">
import recettepage from './recette.vue';
import { oneRecette } from '@/backend'
const props = defineProps<{ id: string }>()
const recette = await oneRecette(props.id)
</script>
<template>
  <recettepage v-bind="{ ...recette }" />
</template>
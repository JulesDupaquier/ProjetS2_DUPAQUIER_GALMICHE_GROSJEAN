<script setup lang="ts">
import { oneRecette, pb } from '@/backend';
import type { RecetteResponse } from '@/pocketbase-types';
const props: RecetteResponse = defineProps<RecetteResponse>()

const img0= props.photo
const urlImg = pb.files.getUrl(props, img0)

</script>

<template>

<body>
    
<h1>{{ nom_recette }}</h1>

<RouterLink :to="{name: 'users-username', params: {id}}">
    <h4>{{ auteur }}</h4>
</RouterLink>

{{ photo }}

{{ tag }}

{{ preparation_time }}

{{ prix }}

{{ personnes }}

<div>
    <h2>Ingrédients</h2>
    <p>{{ ingredients }}</p>
</div>

<div>
    <h2>Matériel</h2>
    <p>{{ materiel }}</p>
</div>

<div>
    <h2>Recette</h2>
    <p>{{ recette }}</p>
</div>

</body>

</template>
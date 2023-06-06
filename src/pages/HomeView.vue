<script setup lang="ts">

</script>

<template>
    <div class="absolute right-0 w-32 md:w-60">
        <img src="/public/img/img_plat_presentation.png" alt="">
    </div>
 
    <div class="grid grid-cols-2 mt-48">
  <h1 class="text-2xl md:text-4xl ">Bievenue sur Proximi <span class="text-yellow-500">Food</span></h1>
</div>
<div class="flex justify-center px-14 pt-12 md:pt-7">
  <h1 class="text-2xl md:text-4xl">Notre but est de simplifier et fluidifier votre <span class="text-yellow-500">vie</span><span>.</span></h1>
</div>
<div class="flex justify-center px-14 pt-12 md:pt-7">
  <h1 class="text-2xl md:text-4xl">Envie de nouveaux <span class="text-yellow-500">goûts</span><span>?</span></h1>
</div>
<div class="flex justify-center px-14 pt-12 md:pt-7">
  <h1 class="text-2xl md:text-4xl">Restaurant <span class="text-yellow-500">ou</span> <span>Fast Food ?</span></h1>
</div>
<div class="flex justify-center px-14 pt-12 md:pt-7">
  <h1 class="text-2xl md:text-4xl">Étudiant la recherche de <span class="text-yellow-500">bons plans</span> <span>?</span></h1>
</div>

<div class="flex justify-center gap-20 pt-10 pb-10">
    <RouterLink to="/loginview"><button class="rounded-full bg-yellow-500 text-white py-2 px-4 md:px-60">Inscription</button></RouterLink>
    <RouterLink to="/loginview"><button class="rounded-full border border-black text-black py-2 px-4 md:px-60">Connexion</button></RouterLink>
  </div>
</template>
<script setup lang="ts">
import Logo_Proximi_header from '@/components/icons/icon_logo_proximi_food_xxs.vue'
import { RouterLink } from 'vue-router'
import { ref, computed, watch } from 'vue'
const activeMenu = ref(false)
function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
  <header class="fixed top-0 z-10 flex w-full translate-y-0 items-stretch justify-between bg-secondary-100 px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="">
      <a href="/">
        <Logo_Proximi_header/>
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu">
        <div class="ease h-[2px] w-full transform rounded-full bg-greyscale-10 transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-greyscale-10': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-greyscale-10 transition duration-300" :class="{ 'bg-greyscale-10 opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-greyscale-10 transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-greyscale-10': activeMenu }"></div>
      </button>

			<nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-secondary-100 text-2xl text-greyscale-10 transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-medium  lg:bg-primary-100 lg:tracking-wide lg:text-greyscale-100 lg:opacity-100" :class="{ '!visible opacity-100': activeMenu }" v-scroll-lock="activeMenu">
		    <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex">
				<li class="menu-item"><RouterLink class="menu-link" to="/map" @click="closeMenu">Carte</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/tendances" @click="closeMenu">Tendances</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/profil" @click="closeMenu">Profils</RouterLink></li>
				<li class="menu-item"><RouterLink class="menu-link" to="/LoginView" @click="closeMenu">Connexion</RouterLink></li>
        </ul>
		  </nav>
    </div>
  </header>
</template>
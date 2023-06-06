<script setup lang="ts">
import icon_arrow from '@/components/icons/icon_arrow.vue';
import { pb } from '@/backend'
import type { RecetteResponse } from '@/pocketbase-types'
const props: RecetteResponse = defineProps<RecetteResponse>()

const img1= props.photo
const urlImg1 = pb.files.getUrl(props, img1, {thumb : 'LxH'})
</script>



<template>
    <div class="relative shadow-sm px-10 mb-8 mt-36">
      <img :src="urlImg1" class="w-[1400px] h-[300px] object-cover">
      <div class="absolute bottom-0 right-0">
        <div class="w-12 h-12 rounded-tl-full bg-primary-400 flex justify-center items-center">
          <icon_arrow class="text-white h-6 w-6" />
        </div>
      </div>
      <p class="text-xl mt-4">{{ nom_recette }}</p>
    </div>
  </template>

  <style scoped>
    .w-full {
      width: 100%;
    }

    .object-cover {
      object-fit: cover;
    }

    .shadow-sm {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
  </style>

<!-- <template>
<div class="mx-auto">
    <div class="relative z-10 w-[1074px] h-[279px] rounded-tr-[30px] rounded-bl-[30px] bg-greyscale-10 lg:w-[327px] lg:h-[279px] lg:rounded-tr-[30px] lg:rounded-bl-[30px]"></div>
    <p class="text-sm font-bold text-left text-greyscale-100 pl-15">{{ nom_recette }}</p>
    <div class="">
    <img :src="urlImg1" class="w-[1073.77px] h-[215px] rounded-tr-[22.52px] rounded-bl-[22.52px] object-cover lg:w-[327.06px] lg:h-[215px] lg:">

    <div>

    <div class="relative flex justify-end z-20">
    <div  class=" w-[62px] h-[46.83px] rounded-tl-[20px] bg-primary-400 lg:w-[62px] lg:h-[46.83px]">
        <icon_arrow/></div></div>    
    </div>
    </div>
</div>
</template> -->
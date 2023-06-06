<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup() {
    const center = { lat: 47.42463267366512, lng: 6.905441485714746 }

    const locations = [
      { lat: 48.862725, lng: 2.287592 }, // Brasserie 1801
      { lat: 47.5106046, lng: 6.8007469 }, // Le Mia'Ms
      { lat: 47.5101314, lng: 6.8004036 }, // La Casa
      { lat: 47.5091055, lng: 6.7976592 }, // Restaurant Le Turkoize
      { lat: 47.509831, lng: 6.799074 }, // Le Chat Toqué
      { lat: 47.511675, lng: 6.79876 }, // Bella Pasta
      { lat: 47.5058379, lng: 6.7910314 }, // La Perle Rose
    ]
    return { center, locations }
  },
})
</script>

<template>
    <div class="overflow-hidden w-full h-[400px] rounded-xl border-4 border-vert mb-5 shadow-md sm:h-[550px]">
        <GoogleMap api-key="AIzaSyDvLfGcAu1cFL7DtTuYIR-eAcafIVxy-n4" style="width: 100%; height: 100%" :center="center" :zoom="9">
          <MarkerCluster>
            <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
          </MarkerCluster>
        </GoogleMap>
    </div>
</template>
<template>
  <div class="d-flex text-center" style="height: 20vh">
    <div class="m-auto">
      <h4>Your position</h4>
      Latitude: {{currPos.lat.toFixed(2)}}, Longitude: {{currPos.lng.toFixed(2)}}
    </div>
  </div>
  <div ref="mapDiv" style="width: 100%; height: 80vh" />
</template>

<script>

/* eslint-disable no-undef */
import {computed, ref, onMounted} from 'vue'
import GeoLocation from '../components/GeoLocation.vue'
import {Loader} from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCh-kFS3bfWJBkAlSFrcWUoCesLXZaI9_A'

export default {
  name: 'GeoLokacija',
  setup(){
    const {coords} = GeoLocation()
    const currPos = computed(() =>({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY})
    const mapDiv = ref(null)
    onMounted(async () =>{
      await loader.load()
      new google.maps.Map(mapDiv.value, {
        center: currPos.value, zoom: 7
      }) 
    })
    return {currPos, mapDiv}
  }
}
</script>

<style>

</style>
<template>
  <div class="Naslov">
    <p>Geo Lokacija ljubimca</p>
  </div>
  <div class="Mapa">
    <div class="d-flex text-center" style="height: 20vh">
      <div class="m-auto">
        <h4>Moja pozicija</h4>

        zemljopisna širina: {{ currPos.lat.toFixed(2) }}, zemljopisna dužina:
        {{ currPos.lng.toFixed(2) }}
      </div>
      <div class="m-auto">
        <h4>Označena pozicija</h4>
        <span v-if="otherPos">
          zemljopisna širina: {{ otherPos.lat.toFixed(2) }}, zemljopisna dužina:
          {{ otherPos.lng.toFixed(2) }}
        </span>
        <span v-else>Klikom na mapu označavate poziciju</span>
      </div>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
  </div>

  <div class="ButtonSpremi">
    <button type="button" class="btn btn-success">
      Spremi izabranu lokaciju
    </button>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted } from "vue";
import GeoLocation from "../components/GeoLocation.vue";
import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = "AIzaSyCh-kFS3bfWJBkAlSFrcWUoCesLXZaI9_A";

export default {
  name: "GeoLokacija",
  setup() {
    const { coords } = GeoLocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    const otherPos = ref(null);

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    let map = ref(null);
    let clickListener = null;
    onMounted(async () => {
      await loader.load();
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7,
      });
      clickListener = map.value.addListener(
        "click",
        ({ latLng: { lat, lng } }) =>
          (otherPos.value = { lat: lat(), lng: lng() })
      );
    });
    onUnmounted(async () => {
      if (clickListener) clickListener.remove();
    });
    return { currPos, otherPos, mapDiv };
  },
};
</script>

<style>
.Naslov {
  font-size: 50px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.Mapa {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

.ButtonSpremi {
  margin-top: 30px;
  font-family: "Times New Roman", Times, serif;
}
</style>

<template>
  <div v-text="vlasnik.ime"></div>
  <div v-text="vlasnik.prezime"></div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default {
  name: "VlasnikDetalji",

  props: ["id2"],

  data() {
    return {
      id: "",
      vlasnik: null,
      Vlasnici: [],
      vlasnici: [],
    };
  },
  setup() {
    // debugger;
    const route = useRoute();
    return route;
  },
  methods: {
    async getVlasnik() {
      const response = await fetch(
        `http://localhost:3000/podacivlasnika/${this.id}`
      );
      this.vlasnik = await response.json();
    },
    async getVlasnici() {
      const response = await fetch("http://localhost:3000/podacivlasnika");
      const vlasnici = await response.json();
      return vlasnici;
    },
  },
  async mounted() {
    // debugger;
    //treba mi route -> metoda koja postavlja id na this.id

    // let vlasnik = this.getVlasnik();
    // this.id = localStorage.getItem("vlasnikID");
    this.getVlasnici = await this.getVlasnici();
    this.getVlasnici = localStorage.getItem("vlasnici");
  },
};
</script>

<style></style>

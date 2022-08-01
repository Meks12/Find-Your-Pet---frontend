<template></template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  name: "VlasnikDetalji",

  data() {
    return {
      id: "",
      Vlasnici: [],
    };
  },

  methods: {
    async getVlasnik() {
      const response = await fetch(
        `http://localhost:3000/podacivlasnika/${vlasnik_id}`
      );
      const vlasnici = await response.json();
      return vlasnici;
    },
  },
  async mounted() {
    this.id = localStorage.getItem("vlasnikID");
    console.log(this.id);
    this.Vlasnici = await this.getVlasnik();
  },
};
</script>

<style></style>

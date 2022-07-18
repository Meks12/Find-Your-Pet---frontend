<template>
  <button @click="goToGeoLokacija">Lokacija izgubljenog ljubimca</button>
</template>

<script>
export default {
  methods: {
    goToGeoLokacija() {
      this.$router.push("/geolokacija");
    },
  },
};
</script>

<style></style>

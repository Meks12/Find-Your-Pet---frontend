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

<style>
.OvajButton {
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  padding: 10px 24px;
  background-color: #e7e7e7;
  color: black;
}
</style>

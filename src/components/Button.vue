<template>
  <button @click="goToPrijavaNestanka">Prijavi Izgubljenog Ljubimca</button>
</template>

<script>
export default {
  methods: {
    goToPrijavaNestanka() {
      this.$router.push("/prijavanestanka");
    },
  },
};
</script>

<style>
button {
  background-color: yellow;
  font-size: 25px;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 100px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  cursor: pointer;
}
</style>

name: "boja pozadine stranice", beforeCreate() {
document.querySelector("body").setAttribute("style", "background:pink"); },
beforeDestroy() { document.querySelector("body").setAttribute("style", ""); },
metoda za mijenjanje boje kad ukljucujemo button

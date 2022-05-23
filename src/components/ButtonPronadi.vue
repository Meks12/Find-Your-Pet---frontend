<template>
  <button @click="goToPronadiLjubimca">Pronađi Ljubimca</button>
</template>

<script>
export default {
  methods: {
    goToPronadiLjubimca() {
      this.$router.push("/pronadiljubimca");
    },
  },
};
</script>

<style>
.PronadiLjubimca {
  background-color: yellow;
  margin-top: 100px;
  font-family: Georgia, "Times New Roman", Times, serif;
  cursor: pointer;
}
</style>

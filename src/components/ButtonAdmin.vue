<template>
  <button @click="goToPronadiLjubimca">Admin sučelje</button>
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

<style></style>

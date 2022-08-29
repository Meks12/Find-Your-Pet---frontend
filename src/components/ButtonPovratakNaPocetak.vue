<template>
  <button @click="goToHome">Povratak na početak</button>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>

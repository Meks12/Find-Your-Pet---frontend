<template>
  <button type="button" @click="goToDetaljiVlasnika" class="btn btn-info">
    Detalji vlasnika
  </button>
</template>

<script>
export default {
  methods: {
    goToDetaljiVlasnika() {
      this.$router.push("/detaljivlasnika");
    },
  },
};
</script>

<style></style>

<template>
  <div class="batun">
    <button @click="goToPodaciKorisnika">Podaci Korisnika</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToPodaciKorisnika() {
      this.$router.push("/podacikorisnika");
    },
  },
};
</script>

<style>
.podacik {
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  padding: 10px 24px;
  color: #e7e7e7;
}
</style>

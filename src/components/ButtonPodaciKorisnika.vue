<template>
    <div class = batun>
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

.batun {
    margin-top: 50px;
}

</style>

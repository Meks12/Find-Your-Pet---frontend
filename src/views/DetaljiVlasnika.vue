<template>
  <div v-for="vlasnik in Vlasnici" :key="vlasnik">
    {{ vlasnik }}

    <div class="probaneka">
      <div class="d-flex justify content-start">
        <div v-for="vlasnik in Vlasnici" :key="vlasnik">
          <div class="card" style="width: 30rem">
            <img class="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Ime vlasnika: {{ vlasnik.ime }}</h5>
              <p class="card-text">Informacije o izgubljenom ljubimcu</p>
            </div>
            <ul class="list-group list-group-flush"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Vlasnici: [],
      Ljubimci: [],
    };
  },

  methods: {
    async getVlasnici() {
      const response = await fetch("http://localhost:3000/podacivlasnika");
      const vlasnici = await response.json();
      return vlasnici;
    },

    async getLjubimci() {
      const response = await fetch("http://localhost:3000/prijavanestanka");
      const ljubimci = await response.json();
      return ljubimci;
    },
  },
  async mounted() {
    this.Vlasnici = await this.getVlasnici();
    this.Ljubimci = await this.getLjubimci();
  },
};
</script>

<style></style>

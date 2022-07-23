<template>
  <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
  <div v-for="vlasnik in Vlasnici" :key="vlasnik">
    {{ vlasnik }}
  </div>
  <div v-for="ljubimac in Ljubimci" :key="ljubimac">
    {{ ljubimac.ime }}
  </div>

  <div v-for="ljubimac in Ljubimci" :key="ljubimac">
    <div class="card" style="width: 30rem">
      <img class="card-img-top" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Ime izgubljenog psa: {{ ljubimac.ime }}</h5>
        <p class="card-text">Informacije o izgubljenom ljubimcu</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ ljubimac.vrsta_psa }}</li>
        <li class="list-group-item">{{ ljubimac.stanje }}</li>
        <li class="list-group-item">{{ ljubimac.cip }}</li>
        <li class="list-group-item">{{ ljubimac.spol }}</li>
        <li class="list-group-item">{{ ljubimac.datum_nestanka }}</li>
      </ul>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import LjubimciCard from "@/components/LjubimciCard.vue";
export default {
  name: "PronadiLjubimca",
  components: {
    Cards,
    LjubimciCard,
  },

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

<style>
.PronadiLjuNaslov {
  font-size: xx-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: fantasy;
}
.left-one {
  object-position: left;
  object-fit: cover;
}
.left-two {
  object-position: left;
}
</style>

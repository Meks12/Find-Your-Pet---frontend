<template>
  <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
  <Cards class="left-one"></Cards>
  <div v-for="vlasnik in Vlasnici" :key="vlasnik">
    {{ vlasnik.ime }}
  </div>
  ,
  <div v-for="ljubimac in Ljubimci" :key="ljubimac">
    {{ ljubimac.ime }}
  </div>

  <div>
    <Cards class="left-two" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "PronadiLjubimca",
  components: {
    Cards,
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

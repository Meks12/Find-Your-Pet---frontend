<template>
  <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
  <div v-for="vlasnik in Vlasnici" :key="vlasnik">
    {{ vlasnik }}
  </div>
  <div v-for="ljubimac in Ljubimci" :key="ljubimac">
    {{ ljubimac.ime }}
  </div>

  <div class="d-flex justify content-start">
    <div v-for="ljubimac in Ljubimci" :key="ljubimac">
      <div class="card" style="width: 30rem">
        <img class="card-img-top" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Ime izgubljenog psa: {{ ljubimac.ime }}</h5>
          <p class="card-text">Informacije o izgubljenom ljubimcu</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Vrsta ljubimca: {{ ljubimac.vrsta_psa }}
          </li>
          <li class="list-group-item">
            Stanje u kojem je pas zadnji put viđen: {{ ljubimac.stanje }}
          </li>
          <li class="list-group-item">Status čipiranja: {{ ljubimac.cip }}</li>
          <li class="list-group-item">Spol: {{ ljubimac.spol }}</li>
          <li class="list-group-item">
            Datum nestanka: {{ ljubimac.datum_nestanka }}
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Detalji vlasnika
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ ljubimac.ime }}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="card-body"></div>
      </div>
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

.card {
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  margin: 20px;
}
</style>

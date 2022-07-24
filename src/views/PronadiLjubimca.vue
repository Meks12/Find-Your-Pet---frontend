<template>
  <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
  <div v-for="vlasnik in Vlasnici" :key="vlasnik">
    {{ vlasnik.ime }}
  </div>
  <p>/</p>
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
          </li>
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Podaci o vlasniku
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </ul>
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

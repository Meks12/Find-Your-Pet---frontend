<template>
  <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
  <div v-for="vlasnik in Vlasnici" :key="vlasnik">
    {{ vlasnik.ime }}
  </div>
  <p>/</p>
  <div v-for="ljubimac in Ljubimci" :key="ljubimac">
    {{ ljubimac.ime }}
  </div>
  <div class="probaneka">
    <div class="d-flex justify content-start">
      <div v-for="ljubimac in Ljubimci" :key="ljubimac">
        <div class="card" style="width: 30rem">
          <img src="@/assets/petpics.jpg" class="w3-round" alt="zivotinja" />
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
              Stanje ljubimca: {{ ljubimac.stanje }}
            </li>
            <li v-if="ljubimac.otherPos" class="list-group-item">
              Geografska dužina: {{ ljubimac.otherPos.lng }} Geografska širina:
              {{ ljubimac.otherPos.lat }}
            </li>
            <li class="list-group-item">
              Detaljan opis mjesta gdje je pas zadnji put viđen:
              {{ ljubimac.stanje }}
            </li>
            <li class="list-group-item">
              Status čipiranja: {{ ljubimac.cip }}
            </li>
            <li class="list-group-item">Spol: {{ ljubimac.spol }}</li>
            <li class="list-group-item">
              Datum nestanka: {{ ljubimac.datum_nestanka }}
            </li>
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
                    <div>
                      <li class="list-group-item">
                        Ime vlasnika:
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).ime
                        }}
                      </li>
                      <li class="list-group-item">
                        Prezime vlasnika:
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).prezime
                        }}
                      </li>
                      <li class="list-group-item">
                        Broj mobitela vlasnika:
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).broj
                        }}
                      </li>
                      <li class="list-group-item">
                        Datum rođenja vlasnika:
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).datum
                        }}
                        Adresa stanovanja vlasnika:
                      </li>
                      <li class="list-group-item">
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).adresa
                        }}
                      </li>
                      <li class="list-group-item">
                        Komentar vlasnika:
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).komentar
                        }}
                      </li>
                      <li class="list-group-item">
                        Nagrada za pronalazak:
                        {{
                          Vlasnici.find(
                            (jedanVlasnik) =>
                              jedanVlasnik.ljubimac === ljubimac.ime
                          ).nagrada
                        }}
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <button
          type="button"
          @click="izbrisi(ljubimac._id)"
          class="btn btn-danger"
        >
          Izbrisi
        </button>
        <button type="button" class="btn btn-secondary">Izmjeni</button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import LjubimciCard from "@/components/LjubimciCard.vue";
import axios from "axios";
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
    async izbrisi(ljubimac_id) {
      const response = await fetch(
        `http://localhost:3000/prijavanestanka/${ljubimac_id}`,
        { method: "DELETE" }
      );
      const status = await response.json();
      this.Ljubimci = this.Ljubimci.filter(
        (ljubimac) => ljubimac._id !== ljubimac_id
      );
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

<template>
  <div class="pozadina">
    <perfect-scrollbar>
      <ButtonPovratakNaPocetak />

      <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
      <div class="col-3 col-md-3 col-sm-3">
        <div class="d-flex justify content-start">
          <div v-for="ljubimac in Ljubimci" :key="ljubimac._id">
            <div class="card" style="width: 14rem">
              <img
                src="@/assets/petpics.jpg"
                class="w3-round"
                alt="zivotinja"
              />

              <!--    <img class="card-img-top" alt="Card image cap" /> !-->
              <p class="card-text text-black">
                Informacije o izgubljenom ljubimcu
              </p>

              <ul class="list-group list-group-flush">
                <li class="list-group-item">Ime : {{ ljubimac.ime }}</li>

                <li class="list-group-item">
                  Vrsta : {{ ljubimac.vrsta_psa }}
                </li>
                <li class="list-group-item">Stanje : {{ ljubimac.stanje }}</li>
                <li v-if="ljubimac.otherPos" class="list-group-item">
                  Geografska dužina: {{ ljubimac.otherPos.lng }} , Geografska
                  širina:
                  {{ ljubimac.otherPos.lat }}
                </li>
                <li class="list-group-item">
                  Detaljan opis mjesta gdje je vaš ljubimac zadnji put viđen:
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
                      <div>
                        <li class="list-group-item">
                          Ime:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).ime
                          }}
                        </li>
                        <li class="list-group-item">
                          Prezime:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).prezime
                          }}
                        </li>
                        <li class="list-group-item">
                          Broj mobitela:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).broj
                          }}
                        </li>
                        <li class="list-group-item">
                          Datum rođenja:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).datum
                          }}
                        </li>
                        <li class="list-group-item">
                          Adresa stanovanja:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).adresa
                          }}
                        </li>
                        <li class="list-group-item">
                          Komentar:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).komentar
                          }}
                        </li>
                        <li class="list-group-item">
                          Nagrada za pronalazak:
                          {{
                            Vlasnici.find(
                              (jedanVlasnik) =>
                                jedanVlasnik.ljubimac === ljubimac._id
                            ).nagrada
                          }}
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
              <button
                type="button"
                @click="izbrisi(ljubimac._id)"
                class="btn btn-danger"
              >
                Izbrisi
              </button>
              <button
                type="button"
                @click="goToIzmjena(ljubimac._id)"
                class="btn btn-secondary"
              >
                Izmjeni podatke ljubimca
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--  <div v-for="vlasnik in Vlasnici" :key="vlasnik.ljubimac">
    vlasnik ime: {{ vlasnik.ime }} vlasnik prezime:
    {{ vlasnik.prezime }}
    {{ vlasnik.broj }}
    {{ vlasnik.datum }}
    {{ vlasnik.adresa }}
    {{ vlasnik.komentar }}
    {{ vlasnik.nagrada }}
  </div>
    -->
    </perfect-scrollbar>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import LjubimciCard from "@/components/LjubimciCard.vue";
import axios from "axios";
import { computed } from "@vue/runtime-core";
import ButtonPovratakNaPocetak from "../components/ButtonPovratakNaPocetak.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
export default {
  name: "PronadiLjubimca",
  components: {
    Cards,
    LjubimciCard,
    ButtonPovratakNaPocetak,
    PerfectScrollbar,
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
    goToIzmjena(ljubimac_id) {
      localStorage.setItem("ljubimacID", `${ljubimac_id}`);
      this.$router.push("/IzmjenaPodataka");
    },
  },
  async mounted() {
    this.Vlasnici = await this.getVlasnici();
    this.Ljubimci = await this.getLjubimci();
  },
  computed: {
    vlasnik() {
      return Vlasnici.find(
        (jedanVlasnik) => jedanVlasnik.ljubimac === ljubimac._id
      );
    },
  },
};
</script>

<style>
.PronadiLjuNaslov {
  font-size: xx-large;
  color: brown;
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
.naslov {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.1px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.pozadinskaSlika {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", inter;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  height: 0.1px;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-image: url("@/assets/zadnjaslika.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.pozadina {
  background-image: url("@/assets/responsible.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

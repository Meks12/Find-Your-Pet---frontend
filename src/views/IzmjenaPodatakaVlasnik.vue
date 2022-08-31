<template>
  <div class="text-bg-primary p-3">
    <div class="body">
      <div class="Brtel">
        <span class="input-group-text" id="basic-addon1">Ime vlasnika</span>
        <input
          type="text"
          class="form-control"
          v-model="ime"
          placeholder="Upisite ime ljubimca"
          aria-label="Upisite ime ljubimca"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="Brtel">
        <span class="input-group-text" id="basic-addon1">Prezime vlasnika</span>
        <input
          type="text"
          class="form-control"
          v-model="stanje"
          placeholder="Upisite u kakvom stanju je bio vaš ljubimac kada ste ga izgubili"
          aria-label="Upisite u kakvom stanju je bio vaš ljubimac kada ste ga izgubili"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="Brtel">
        <span class="input-group-text" id="basic-addon1">Broj mobitela</span>
        <input
          type="text"
          class="form-control"
          v-model="vrsta_psa"
          placeholder="Upisite vrstu vašeg psa"
          aria-label="Upišite vrstu vašeg psa"
          aria-describedby="basic-addon1"
        />
      </div>

      <div>
        <h3>
          <span class="badge bg-secondary">Datum nestanka</span>
        </h3>
        <input v-model="datum_nestanka" placeholder="Upišite datum nestanka" />
      </div>

      <h3>
        <span class="badge bg-secondary">Spol</span>
      </h3>
      <div class="Mz">
        <input type="radio" id="one" value="Muško" v-model="spol" />
        <label for="Muško">Muško</label>

        <input type="radio" id="two" value="Žensko" v-model="spol" />
        <label for="Žensko">Žensko</label>
      </div>

      <div>
        <h3>
          <span class="badge bg-secondary">Datum nestanka</span>
        </h3>
        <input v-model="datum_nestanka" placeholder="Upišite datum nestanka" />
      </div>
      <button class="Spremi" v-on:click="IspisiFrontend()" variant="primary">
        Spremi
      </button>
    </div>
    Primary with contrasting color
  </div>
</template>
<script>
export default {
  name: "IzmjenaPodatakaVlasnik",

  data() {
    return {
      id: "",
      ime: "",
      prezime: "",
      datum: "",
      adresa: "",
      komentar: "",
      nagrada: "",
    };
  },

  methods: {
    async getVlasnik() {
      const response = await fetch(
        `https://potragazaljubimcom.herokuapp.com/podacivlasnika/${vlasnik_id}`
      );
      const vlasnici = await response.json();
      return vlasnici;
    },
    IspisiFrontend() {
      const promjene = {};
      if (this.ime !== "") {
        promjene.ime = this.ime;
      }
      if (this.prezime !== "") {
        promjene.prezime = this.prezime;
      }
      if (this.datum !== "") {
        promjene.datum = this.datum;
      }
      if (this.adresa !== "") {
        promjene.adresa = this.adresa;
      }
      if (this.komentar !== "") {
        promjene.komentar = this.komentar;
      }
      if (this.nagrada !== "") {
        promjene.nagrada = this.nagrada;
      }
      let xhr = new XMLHttpRequest();
      xhr.open(
        "PATCH",
        `https://potragazaljubimcom.herokuapp.com/podacivlasnika/${this.id}`
      );
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      let podaci = promjene;
      console.log(podaci);
      xhr.send(JSON.stringify(podaci));
      this.$router.push("/podacivlasnika");
    },
  },
  async mounted() {
    this.id = localStorage.getItem("vlasnikID");
  },
};
</script>

<style></style>

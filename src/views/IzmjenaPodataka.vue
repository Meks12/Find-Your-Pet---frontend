<template>
  <i>
    <div class="body">
      <div class="Brtel">
        <span class="input-group-text" id="basic-addon1">Ime </span>
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
        <span class="input-group-text" id="basic-addon1">Stanje </span>
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
        <span class="input-group-text" id="basic-addon1">Vrsta </span>
        <input
          type="text"
          class="form-control"
          v-model="vrsta_psa"
          placeholder="Upisite vrstu vašeg psa"
          aria-label="Upišite vrstu vašeg psa"
          aria-describedby="basic-addon1"
        />
      </div>

      <h3>
        <span class="badge bg-secondary">Je li ljubimac čipiran</span>
      </h3>
      <div class="OgrlicaDa">
        <input type="radio" id="one" value="Da" v-model="cip" />
        <label for="Da">Da</label>

        <input type="radio" id="two" value="Ne" v-model="cip" />
        <label for="Ne">Ne</label>
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
  </i>
</template>
<script>
export default {
  name: "IzmjenaPodataka",

  data() {
    return {
      id: "",
      ime: "",
      stanje: "",
      vrsta_psa: "",
      cip: "",
      spol: "",
      datum_nestanka: "",
    };
  },

  methods: {
    async getLjubimac() {
      const response = await fetch(
        `https://potragazaljubimcom.herokuapp.com/prijavanestanka/${ljubimac_id}`
      );
      const ljubimci = await response.json();
      return ljubimci;
    },
    IspisiFrontend() {
      const promjene = {};
      if (this.ime !== "") {
        promjene.ime = this.ime;
      }
      if (this.stanje !== "") {
        promjene.stanje = this.stanje;
      }
      if (this.vrsta_psa !== "") {
        promjene.vrsta_psa = this.vrsta_psa;
      }
      if (this.cip !== "") {
        promjene.cip = this.cip;
      }
      if (this.spol !== "") {
        promjene.spol = this.spol;
      }
      if (this.datum_nestanka !== "") {
        promjene.datum_nestanka = this.datum_nestanka;
      }
      let xhr = new XMLHttpRequest();
      xhr.open(
        "PATCH",
        `https://potragazaljubimcom.herokuapp.com/prijavanestanka/${this.id}`
      );
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      let podaci = promjene;
      console.log(podaci);
      xhr.send(JSON.stringify(podaci));
      this.$router.push("/pronadiljubimca");
    },
  },
  async mounted() {
    this.id = localStorage.getItem("ljubimacID");
  },
};
</script>

<style>
i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", inter;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  height: 0.1px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-image: url("@/assets/petpic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>

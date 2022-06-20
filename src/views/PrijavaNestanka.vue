<template>
  <p class="ImeLj">Ime Ljubimca:</p>
  <input class="TextField1" v-model="ime" placeholder="Upišite ime ljubimca" />
  <p class="BrMob">Broj mobitela:</p>
  <input v-model="broj_mobitela" placeholder="Upišite broj mobitela" />

  <p class="GeoLokacija">Označite na karti mjesto gdje je zadnje viđen:</p>
  <input v-model="geo_lokacija" placeholder="Treba dodat kartu" />

  <p class="VrPsa">Upišite vrstu psa:</p>
  <input class="VrstaPsa" v-model="vrsta_psa" placeholder="Upišite vrstu psa" />

  <div class="Spol">Spol:</div>
  <div class="CheckedNames">
    <input type="radio" id="one" value="Muško" v-model="spol" />
    <label for="Muško">Muško</label>

    <input type="radio" id="two" value="Žensko" v-model="spol" />
    <label for="two">Žensko</label>
  </div>

  <div>
    <p class="DatumNestanka">Datum Nestanka:</p>
    <input v-model="datum_nestanka" placeholder="Upišite datum nestanka" />
  </div>

  <div>
    <button v-on:click="posaljiBackend" variant="primary">Spremi</button>
  </div>
</template>

<script>
export default {
  name: "PrijavaNestanka",
  data() {
    return {
      ime: "",
      broj_mobitela: "",
      geo_lokacija: "",
      vrsta_psa: "",
      spol: "",
      datum_nestanka: "",
    };
  },
  mounted() {
    this.ime = localStorage.getItem("ime");
    this.broj_mobitela = localStorage.getItem("broj_mobitela");
    this.geo_lokacija = localStorage.getItem("geo_lokacija");
    this.vrsta_psa = localStorage.getItem("vrsta_psa");
    this.spol = localStorage.getItem("spol");
    this.datum_nestanka = localStorage.getItem("datum_nestanka");
    console.log(this.ime);
  },

  methods: {
    posaljiBackend() {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/prijavanestanka");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      let podaci = {
        ime: this.ime,
        broj_mobitela: this.broj_mobitela,
        geo_lokacija: this.geo_lokacija,
        vrsta_psa: this.vrsta_psa,
        spol: this.spol,
        datum_nestanka: this.datum_nestanka,
      };
      console.log(podaci);
      xhr.send(JSON.stringify(podaci));
    },
  },
};
</script>

<style>
.CheckedNames {
  margin-top: 20px;
}
.VrPsa {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}
.VrstaPsa {
  margin-bottom: 20px;
}

.ImeLj {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.BrMob {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.GeoLokacija {
  font-family: "Times New Roman", Times, serif;
  font-size: 0.9cm;
}

.Spol {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.DatumNestanka {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}
</style>

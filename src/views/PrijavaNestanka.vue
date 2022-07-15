<template>
  <div class="Background">
    <p class="ImeLj">Ime Ljubimca:</p>
    <input
      class="TextField1"
      v-model="ime"
      placeholder="Upišite ime ljubimca"
    />
    <p class="StanjeLj">Stanje Ljubimca:</p>
    <input v-model="broj_mobitela" placeholder="Upišite u kakvom je stanju" />

    <p class="GeoLokacija">Označite na karti mjesto gdje je zadnje viđen:</p>
    <input v-model="geo_lokacija" placeholder="Treba dodat kartu" />

    <p class="VrPsa">Upišite vrstu psa:</p>
    <input
      class="VrstaPsa"
      v-model="vrsta_psa"
      placeholder="Upišite vrstu psa"
    />



  <div class="Ogrlica">Ogrlica:</div>
    <div class="OgrlicaDa">
      <input type="radio" id="one" value="Da" v-model="ogrlica" />
      <label for="Da">Da</label>

      <input type="radio" id="two" value="Ne" v-model="ogrlica" />
      <label for="Ne">Ne</label>
    </div>


    <div class="Spol">Spol:</div>
    <div class="Mz">
      <input type="radio" id="one" value="Muško" v-model="spol" />
      <label for="Muško">Muško</label>

      <input type="radio" id="two" value="Žensko" v-model="spol" />
      <label for="Žensko">Žensko</label>
    </div>

    <div>
      <p class="DatumNestanka">Datum Nestanka:</p>
      <input v-model="datum_nestanka" placeholder="Upišite datum nestanka" />
    </div>

    <div>
      <button class="Spremi" v-on:click="posaljiBackend" variant="primary">
        Spremi
      </button>
    </div>

    <div>
      <ButtonPodaciKorisnika />
    </div>

  </div>
</template>

<script>

import ButtonPodaciKorisnika from "../components/ButtonPodaciKorisnika.vue";

export default {
  name: "PrijavaNestanka",
  components: {
    ButtonPodaciKorisnika
  },
  data() {
    return {
      ime: "",
      broj_mobitela: "",
      geo_lokacija: "",
      vrsta_psa: "",
      ogrlica: "",
      spol: "",
      datum_nestanka: "",
    };
  },
  mounted() {
    this.ime = localStorage.getItem("ime");
    this.broj_mobitela = localStorage.getItem("broj_mobitela");
    this.geo_lokacija = localStorage.getItem("geo_lokacija");
    this.vrsta_psa = localStorage.getItem("vrsta_psa");
    this.ogrlica = localStorage.getItem("ogrlica");
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
        ogrlica: this.ogrlica,
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
.Background {
  background-size: cover;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

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

.StanjeLj {
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

.Mz {
  font-family: "Times New Roman", Times, serif;
  font-size: 0.7cm;
  margin-bottom: 20px;
}

.Ogrlica {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.OgrlicaDa {
  font-family: "Times New Roman", Times, serif;
  font-size: 0.7cm;
  margin-bottom: 20px;
}

.DatumNestanka {
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.Spremi {
  margin-top: 50px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
}
</style>

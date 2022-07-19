<template>
  <div class="Background">
    <div class="Brtel">
      <span class="input-group-text" id="basic-addon1">Ime ljubimca</span>
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
      <span class="input-group-text" id="basic-addon1">Stanje ljubimca</span>
      <input
        type="text"
        class="form-control"
        v-model="stanje"
        placeholder="Upisite u kakvom stanju je bio vaš ljubimac kada ste ga izgubili"
        aria-label="Upisite u kakvom stanju je bio vaš ljubimac kada ste ga izgubili"
        aria-describedby="basic-addon1"
      />
    </div>
    <h3>
      <span class="badge bg-secondary">Odaberi lokaciju</span>
    </h3>
    <ButtonGeoLokacija />

    <div class="Brtel">
      <span class="input-group-text" id="basic-addon1">Vrsta psa</span>
      <input
        type="text"
        class="form-control"
        v-model="vrsta_psa"
        placeholder="Upisite vrstu vašeg psa"
        aria-label="Upišite vrstu vašeg psa"
        aria-describedby="basic-addon1"
      />
    </div>
    <div class="SlikaPsa">
      <h3>
        <span class="badge bg-secondary">Odaberi sliku psa</span>
      </h3>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" />
        <label class="input-group-text" for="inputGroupFile02">Upload</label>
      </div>
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
import ButtonGeoLokacija from "../components/ButtonGeoLokacija.vue";

export default {
  name: "PrijavaNestanka",
  components: {
    ButtonPodaciKorisnika,
    ButtonGeoLokacija,
  },
  data() {
    return {
      ime: "",
      stanje: "",
      geo_lokacija: "",
      vrsta_psa: "",
      cip: "",
      spol: "",
      datum_nestanka: "",
    };
  },
  mounted() {
    this.ime = localStorage.getItem("ime");
    this.stanje = localStorage.getItem("stanje");
    this.geo_lokacija = localStorage.getItem("geo_lokacija");
    this.vrsta_psa = localStorage.getItem("vrsta_psa");
    this.cip = localStorage.getItem("cip");
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
        stanje: this.stanje,
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

.SlikaPsa {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
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

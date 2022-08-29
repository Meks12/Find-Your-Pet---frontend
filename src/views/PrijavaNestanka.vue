<template>
  <div class="background">
    <div class="nebitno">
      <div class="Naslov">
        <p>Prijavi Nestanak Ljubimca</p>
      </div>
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
          <span class="input-group-text" id="basic-addon1"
            >Stanje ljubimca</span
          >
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
          <span class="input-group-text" id="basic-addon1">Vrsta ljubimca</span>
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
            <input
              type="file"
              class="form-control"
              id="inputGroupFile02"
              @change="onFileSelected"
            />
            <label
              class="input-group-text"
              for="inputGroupFile02"
              @click="onUpload"
              >Upload</label
            >
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
          <input
            v-model="datum_nestanka"
            placeholder="Upišite datum nestanka"
          />
        </div>

        <div>
          <button class="Spremi" v-on:click="posaljiBackend" variant="primary">
            Spremi
          </button>
        </div>

        <h3>
          <span class="badge bg-secondary">Odaberi lokaciju</span>
        </h3>
        <ButtonGeoLokacija class="geolokbutton" />
        <div>
          <ButtonPodaciKorisnika class="podacik" />
        </div>
      </div>
      <div class="uploadSlike">
        <input type="file" @change="onFileSelected" />
        <button @click="onUpload">Upload</button>
      </div>
      <ButtonPovratakNaPocetak />
    </div>
  </div>
</template>

<script>
import ButtonPodaciKorisnika from "../components/ButtonPodaciKorisnika.vue";
import ButtonGeoLokacija from "../components/ButtonGeoLokacija.vue";
import ButtonPovratakNaPocetak from "../components/ButtonPovratakNaPocetak.vue";
import axios from "axios";

export default {
  name: "PrijavaNestanka",
  components: {
    ButtonPodaciKorisnika,
    ButtonGeoLokacija,
    ButtonPovratakNaPocetak,
  },
  data() {
    return {
      ime: "",
      stanje: "",
      geo_lokacija: "",
      vrsta_psa: "",
      slika: null,
      cip: "",
      spol: "",
      datum_nestanka: "",
      selectedFile: null,
    };
  },
  mounted() {
    this.ime = localStorage.getItem("ime");
    this.stanje = localStorage.getItem("stanje");
    this.geo_lokacija = localStorage.getItem("geo_lokacija");
    this.vrsta_psa = localStorage.getItem("vrsta_psa");
    this.slika = localStorage.getItem("slika");
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
        slika: this.slika,
        cip: this.cip,
        spol: this.spol,
        datum_nestanka: this.datum_nestanka,
      };
      console.log(podaci);
      xhr.send(JSON.stringify(podaci));
    },
    async onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    async onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      console.log(fd);
      await axios
        .post("http://localhost:3000/prijavanestanka", fd)
        .then((res) => {
          console.log(res);
        });
    },
  },
  async created() {
    const response = await fetch("http://localhost:3000/prijavanestanka");
    const data = await response.json();
    this.totalVuePackages = data.total;
    console.log(data);
  },
};
</script>

<style>
.SlikaPsa {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
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

.OgrlicaDa {
  font-family: "Times New Roman", Times, serif;
  font-size: 0.7cm;
  margin-bottom: 20px;
}

.Spremi {
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  padding: 10px 24px;
  background-color: #e7e7e7;
  color: black;
}
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", inter;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  height: 0.1px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-image: url("@/assets/slikaljubimca.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.geolokbutton {
  margin-top: 50px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-family: "Times New Roman", Times, serif;
  padding: 10px 24px;
  background-color: #e7e7e7;
  color: black;
}
</style>

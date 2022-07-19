<template>
  <div class="ImePrez">
    <div class="input-group">
      <span class="input-group-text">Ime i prezime</span>
      <input
        type="text"
        aria-label="Last Name"
        class="form-control"
        v-model="imeK"
      />
      <input
        type="text"
        aria-label="First Name"
        class="form-control"
        v-model="prezimeK"
      />
    </div>
  </div>

  <div class="Brtel">
    <span class="input-group-text" id="basic-addon1">Broj telefona</span>
    <input
      type="text"
      class="form-control"
      placeholder="Upisite broj telefona"
      aria-label="Upisite broj telefona"
      aria-describedby="basic-addon1"
      v-model="broj"
    />
  </div>

  <div class="Datum">
    <span class="input-group-text" id="basic-addon1">Datum rođenja</span>
    <input
      type="text"
      class="form-control"
      placeholder="Upisite datum rođenja"
      aria-label="Upisite datum rođenja"
      aria-describedby="basic-addon1"
      v-model="datum"
    />
  </div>

  <div class="Adresa">
    <span class="input-group-text" id="basic-addon1">Adresa stanovanja</span>
    <input
      type="text"
      class="form-control"
      placeholder="Upisite adresu"
      aria-label="Upisite adresu"
      aria-describedby="basic-addon1"
      v-model="adresa"
    />
  </div>

  <div class="Komentar">
    <div class="Komentarvelicina">
      <label for="floatingTextarea">Dodajte komentar</label>
    </div>
    <textarea
      class="form-control"
      placeholder="Dodajte komentar ovdje"
      id="floatingTextarea"
      v-model="komentar"
    ></textarea>
  </div>

  <div class="Nagrada">
    <p>Nudite li nagradu za pronalazak ljubimca?</p>
  </div>
  <div class="Izaberiopciju">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        v-model="nagrada"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1"> Da </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        v-model="nagrada"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        checked
      />
      <label class="form-check-label" for="flexRadioDefault2"> Ne </label>
    </div>
  </div>

  <div class="ButtonSpremi">
    <button type="button" v-on:click="posaljiBackend" class="btn btn-success">
      Spremi podatke
    </button>
  </div>

  <div class="PronadiLjubimcaButton">
    <ButtonPronadi />
  </div>
</template>

<script>
import ButtonPronadi from "../components/ButtonPronadi.vue";

export default {
  name: "PodaciKorisnika",
  components: {
    ButtonPronadi,
  },
  data() {
    return {
      imeKorisnika: "",
      prezimeKorisnika: "",
      broj: "",
      datum: "petnajsti",
      adresa: "",
      komentar: "",
      nagrada: "",
    };
  },
  mounted() {
    this.imeK = localStorage.getItem("imeK");
    this.prezimeK = localStorage.getItem("prezimeK");
    this.broj = localStorage.getItem("broj");
    this.datum = localStorage.getItem("datum");
    this.adresa = localStorage.getItem("adresa");
    this.komentar = localStorage.getItem("komentar");
    this.nagrada = localStorage.getItem("nagrada");
    console.log(this.imeK);
  },
  methods: {
    posaljiBackend() {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/podacikorisnika");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      let podaci = {
        imeK: this.imeK,
        prezimeK: this.prezimeK,
        broj: this.broj,
        datum: this.datum,
        adresa: this.adresa,
        komentar: this.komentar,
        nagrada: this.nagrada,
      };
      console.log(podaci);
      xhr.send(JSON.stringify(podaci));
    },
  },
};
</script>

 <style>
.ImePrez {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.Brtel {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.Datum {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.Adresa {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.Komentarvelicina {
  font-family: "Times New Roman", Times, serif;
  font-size: 0.5cm;
}
.Komentar {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1cm;
}

.Izaberiopciju {
  padding: 15px;
  width: 15cm;
  margin: 0 auto;
  float: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.6cm;
}

.Nagrada {
  margin-top: 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.6cm;
}

.PronadiLjubimcaButton {
  margin-top: 40px;
}
</style>
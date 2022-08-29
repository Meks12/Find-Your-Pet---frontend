<template>
  <i class="pozslika">
    <div class="ok">
      <div class="ImePrez">
        <div class="input-group">
          <span class="input-group-text">Ime i prezime</span>
          <input
            type="text"
            aria-label="Last Name"
            class="form-control"
            v-model="ime"
          />
          <input
            type="text"
            aria-label="First Name"
            class="form-control"
            v-model="prezime"
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
        <span class="input-group-text" id="basic-addon1"
          >Adresa stanovanja</span
        >
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

      <h3>
        <span class="badge bg-secondary">Nudite li nagradu: </span>
      </h3>
      <div class="Nagrada">
        <input type="radio" id="one" value="Da" v-model="nagrada" />
        <label for="Da">Da</label>

        <input type="radio" id="two" value="Ne" v-model="nagrada" />
        <label for="Ne">Ne</label>
      </div>
      <div class="Izaberi">
        Izaberite ime vašeg ljubimca:
        <div class="Odaberi">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="odabraniLjubimac"
          >
            <option
              v-for="ljubimac in Ljubimci"
              :key="ljubimac"
              :value="ljubimac.ime"
            >
              {{ ljubimac.ime }}
            </option>
          </select>
        </div>
      </div>
      <div class="ButtonSpremi">
        <button
          type="button"
          v-on:click="posaljiBackendKorisnik"
          class="btn btn-success"
        >
          Spremi podatke
        </button>
      </div>

      <div class="PronadiLjubimcaButton">
        <ButtonPronadi />
        <ButtonPovratakNaPocetak />
      </div>
    </div>
  </i>
</template>

<script>
import ButtonPronadi from "../components/ButtonPronadi.vue";
import ButtonPovratakNaPocetak from "../components/ButtonPovratakNaPocetak.vue";

export default {
  name: "PodaciKorisnika",
  components: {
    ButtonPronadi,
    ButtonPovratakNaPocetak,
  },
  data() {
    return {
      ime: "",
      prezime: "",
      broj: "",
      datum: "",
      adresa: "",
      komentar: "",
      nagrada: "",
      Ljubimci: [],
      odabraniLjubimac: "",
    };
  },
  async mounted() {
    this.ime = localStorage.getItem("ime");
    this.prezime = localStorage.getItem("prezime");
    this.broj = localStorage.getItem("broj");
    this.datum = localStorage.getItem("datum");
    this.adresa = localStorage.getItem("adresa");
    this.komentar = localStorage.getItem("komentar");
    this.nagrada = localStorage.getItem("nagrada");
    console.log(this.imeK);
    this.Ljubimci = await this.getLjubimci();
    this.odabraniLjubimac = localStorage.getItem("odabraniLjubimac");
  },
  methods: {
    posaljiBackendKorisnik() {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/podacivlasnika");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      let podaci = {
        ime: this.ime,
        prezime: this.prezime,
        broj: this.broj,
        datum: this.datum,
        adresa: this.adresa,
        komentar: this.komentar,
        nagrada: this.nagrada,
        ljubimac: this.odabraniLjubimac,
      };
      console.log(podaci);
      xhr.send(JSON.stringify(podaci));
    },
    async getLjubimci() {
      const response = await fetch("http://localhost:3000/prijavanestanka");
      const ljubimci = await response.json();
      return ljubimci;
    },
  },
  async created() {
    const response = await fetch("http://localhost:3000/podacivlasnika");
    const data = await response.json();
    this.totalVuePackages = data.total;
    console.log(data);
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

.Odaberi {
  margin-top: 20px;
  display: block;
  text-align: center;
  display: grid;
  justify-content: center;
}

.Izaberi {
  font-family: "Times New Roman", Times, serif;
  margin-top: 20px;
  font-size: 20px;
}
.pozslika {
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
  background-image: url("@/assets/dog.jpg");
  background-repeat: no-repeat;
  background-size: contain, cover;
  width: 100;
  height: 100%;
}
.Izaberi {
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
}

.Komentar {
  color: black;
}
</style>

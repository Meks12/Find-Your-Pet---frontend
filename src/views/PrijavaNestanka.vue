<template>
  <p class="ImeLj">Ime Ljubimca: {{ message }}</p>
  <input
    class="TextField1"
    v-model="message"
    placeholder="Upišite ime ljubimca"
  />
  <p class="BrMob">Broj mobitela: {{ message }}</p>
  <input v-model="message" placeholder="Upišite broj mobitela" />
  <p class="GeoLokacija">
    Označite na karti mjesto gdje je zadnje viđen: {{ message }}
  </p>
  <input v-model="message" placeholder="Treba dodat kartu" />
  <p class="VrPsa">Upišite vrstu psa: {{ message }}</p>
  <input class="VrstaPsa" v-model="message" placeholder="Upišite vrstu psa" />
  <div class="Spol">Spol: {{ picked }}</div>
  <div class="CheckedNames">
    <input type="radio" id="one" value="Muško" v-model="picked" />
    <label for="Muško">Muško</label>

    <input type="radio" id="two" value="Žensko" v-model="picked" />
    <label for="two">Žensko</label>
  </div>
  <p class="DatumNestanka">Datum Nestanka: {{ message }}</p>
  <input v-model="message" placeholder="Upišite datum nestanka" />
</template>

<script>
export default {
  name: "PrijavaNestanka",
};
</script>

<style>
.CheckedNames {
  margin-top: 20px;
}
.VrPsa {
  font-family: monospace;
  font-size: 1cm;
}
.VrstaPsa {
  margin-bottom: 20px;
}

.ImeLj {
  font-family: monospace;
  font-size: 1cm;
}

.BrMob {
  font-family: monospace;
  font-size: 1cm;
}

.GeoLokacija {
  font-family: monospace;
  font-size: 0.9cm;
}

.Spol {
  font-family: monospace;
  font-size: 1cm;
}

.DatumNestanka {
  font-family: monospace;
  font-size: 1cm;
}
</style>

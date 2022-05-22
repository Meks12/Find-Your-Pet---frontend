<template>
  <p>Ime Ljubimca: {{ message }}</p>
  <input v-model="message" placeholder="Upišite ime ljubimca" />
  <p>Broj mobitela: {{ message }}</p>
  <input v-model="message" placeholder="Upišite broj mobitela" />
  <p>Označite na karti mjesto gdje je zadnje viđen: {{ message }}</p>
  <input v-model="message" placeholder="Treba dodat kartu" />
  <p>Upišite vrstu psa: {{ message }}</p>
  <input class="VrstaPsa" v-model="message" placeholder="Upišite vrstu psa" />
  <div>Spol: {{ picked }}</div>
  <div class="CheckedNames">
    <input type="radio" id="one" value="Muško" v-model="picked" />
    <label for="Muško">Muško</label>

    <input type="radio" id="two" value="Žensko" v-model="picked" />
    <label for="two">Žensko</label>
  </div>

  <p>Datum Nestanka: {{ message }}</p>
  <input v-model="message" placeholder="Upišite datum nestanka" />
</template>

<script>
export default {
  name: "PrijavaNestanka",
  components: {},
};
</script>

<style>
.CheckedNames {
  margin-top: 20px;
}

.VrstaPsa {
  margin-bottom: 20px;
}
</style>

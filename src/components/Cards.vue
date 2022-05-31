<template>
  <div class="card" style="width: 30rem">
    <img class="card-img-top" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Naslov kartice</h5>
      <p class="card-text">Informacije o izgubljenom ljubimcu</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Livio</li>
      <li class="list-group-item">5 godina</li>
      <li class="list-group-item">M</li>
    </ul>
    <div class="card-body"></div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style>
.card {
  background-color: yellow;
  border-style: groove;
  margin-top: 100px;
}
.card-title {
  font-family: "Courier New", Courier, monospace;
  font-size: large;
}
</style>

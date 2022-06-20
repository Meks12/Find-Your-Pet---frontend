<template>
  <p class="PronadiLjuNaslov">Pronadi Ljubimca</p>
  <Cards class="left-one"></Cards>

  <div>
    <Cards class="left-two" />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "PronadiLjubimca",
  components: {
    Cards,
  },
};
</script>

<style>
.PronadiLjuNaslov {
  font-size: xx-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: fantasy;
}
.left-one {
  object-position: left;
  object-fit: cover;
}
.left-two {
  object-position: left;
}
</style>

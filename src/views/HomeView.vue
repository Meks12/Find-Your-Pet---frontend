<template>
  <div id="app"></div>
  <div class="Naslov">
    <h1>Pet Finder App</h1>
  </div>
  <div>
    <Button />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Button from "../components/Button.vue";

export default {
  name: "HomeView",
  components: {
    Button,
  },
};
</script>

<style>
.Naslov {
  background-color: pink;
  padding: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: fantasy;
}
</style>

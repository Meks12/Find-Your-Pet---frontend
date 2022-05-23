<template>
  <div id="app"></div>
  <div class="Naslov">
    <h1>Pet Finder App</h1>
  </div>
  <div>
    <Button />
  </div>

  <div>
    <ButtonPronadi />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Button from "../components/Button.vue";
import ButtonPronadi from "../components/ButtonPronadi.vue";

export default {
  name: "HomeView",
  components: {
    Button,
    ButtonPronadi,
    methods: {
      goToPrijavaNestanka() {
        this.$router.push("/prijavanestanka");
      },
    },
    ButtonPronadi,
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

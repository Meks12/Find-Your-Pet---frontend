<template>
  <div class="bgcolor">
    <div class="GlavniNaslov" />
    <h1>Pet Finder App</h1>
    <div>
      <Button />
    </div>
    <div>
      <ButtonPronadi />
    </div>
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
    Button,
  },
};
</script>

<style>
html {
  font-family: fantasy;
  height: 200%;
  width: 100%;
  background-image: url("~@/assets/petpics.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
</style>

.GlavniNaslov { padding: 20px; margin-bottom: 50px; margin-left: 50px;
margin-right: 50px; font-family: fantasy; text-align: center; }

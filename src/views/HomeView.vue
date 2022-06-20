<template>
  <div class="bgcolor">
    <div class="GlavniNaslov">
      <h1>Pet Finder App</h1>
    </div>
    <div class="Button">
      <Button />
    </div>
    <div class="ButtonPronadi">
      <ButtonPronadi />
    </div>
  </div>
</template>

<script>
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
.Button {
  margin: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: large;
}

.ButtonPronadi {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: large;
}

.GlavniNaslov {
  font-family: cursive;
  font-size: 50px;
}
</style>

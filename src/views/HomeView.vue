<template>
  <header>
    <div class="GlavniNaslov">
      <h1>Pet Finder App</h1>
    </div>
  </header>
  <div>
    <i>
      <div>
        <div id="app"></div>
        <div>
          <Button />
        </div>
        <div>
          <ButtonPronadi />
        </div>
      </div>
    </i>
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
  },
};
</script>

<style>
.GlavniNaslov {
  background-color: pink;
  padding: 20px;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: fantasy;
}

i {
  background-image: url("@/assets/petpics.jpg");
  background-size: 100%;
  width: 100%;
  height: 100%;
}
</style>

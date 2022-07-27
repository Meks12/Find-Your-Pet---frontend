<template>
  <i>
    <div>
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
  </i>
</template>

<script>
import Button from "../components/Button.vue";
import ButtonPronadi from "../components/ButtonPronadi.vue";
import ButtonAdmin from "@/components/ButtonAdmin.vue";

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
    ButtonAdmin,
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
.AdminButton {
  margin: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: large;
}
i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", inter;
  color: whitesmoke;
  outline-color: rgb(92, 92, 92);
  height: 0.1px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-image: url("@/assets/petpics.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>

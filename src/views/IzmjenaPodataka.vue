<template>
  Izmjena podatak ljubimca

  {{ id }}
</template>
<script>
export default {
  name: "IzmjenaPodataka",

  data() {
    return {
      id: "",
    };
  },

  methods: {
    async getLjubimac() {
      const response = await fetch(
        `http://localhost:3000/prijavanestanka/${ljubimac_id}`
      );
      const ljubimci = await response.json();
      return ljubimci;
    },
  },
  async mounted() {
    this.id = localStorage.getItem("ljubimacID");
  },
};
</script>

<style></style>

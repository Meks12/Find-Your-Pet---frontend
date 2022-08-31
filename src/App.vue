<template>
  <nav>
    <router-link to="/"></router-link>
    <router-link to="/PrijavaNestanka"></router-link>
    <router-link to="/PronadiLjubimca"></router-link>
    <router-link to="/PodaciKorisnika"></router-link>
    <router-link to="/GeoLokacija"></router-link>
    <router-link to="/IzmjenaPodataka"></router-link>
    <router-link to="/IzmjenaPodatakaVlasnik"></router-link>
  </nav>
  <router-view />
</template>

<script></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

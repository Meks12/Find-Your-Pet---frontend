<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/PrijavaNestanka">Prijava Nestanka</router-link> |
    <router-link to="/PronadiLjubimca">Pronadi Ljubimca</router-link> |
    <router-link to="/PodaciKorisnika">Podaci Korisnika</router-link> |
    <router-link to="/GeoLokacija">Geo Lokacija</router-link> |
    <router-link to="/IzmjenaPodataka">Izmjena Podataka</router-link> |
    <router-link to="/VlasnikDetalji">Vlasnik Detalji</router-link> |
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

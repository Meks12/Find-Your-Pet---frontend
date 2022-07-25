import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrijavaNestanka from "../views/PrijavaNestanka.vue";
import PronadiLjubimca from "../views/PronadiLjubimca.vue";
import PodaciKorisnika from "../views/PodaciKorisnika.vue";
import GeoLokacija from "../views/GeoLokacija.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/prijavanestanka",
    name: "prijavanestanka",
    component: PrijavaNestanka,
  },
  {
    path: "/PronadiLjubimca",
    name: "PronadiLjubimca",
    component: PronadiLjubimca,
  },
  {
    path: "/PodaciKorisnika",
    name: "/PodaciKorisnika",
    component: PodaciKorisnika,
  },
  {
    path: "/GeoLokacija",
    name: "/GeoLokacija",
    component: GeoLokacija,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import RankingPlayers from "../views/RankingPlayers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RankingPlayers",
    component: RankingPlayers
  }
];

const router = new VueRouter({
  routes
});

export default router;

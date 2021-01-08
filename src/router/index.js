import Vue from "vue";
import VueRouter from "vue-router";
import PlayerDetails from "../views/PlayerDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PlayerDetails",
    component: PlayerDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;

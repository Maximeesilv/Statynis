<template>
  <div class="styns__view container">
    <cards-list
      :list="playersList"
      @card:leftCtaClicked="displayToastNoAction"
    />
  </div>
</template>

<script>
import CardsList from "@/components/molecules/CardsList";
import { mapState } from "vuex";

export default {
  name: "RankingPlayers",
  components: {
    CardsList,
  },
  computed: {
    ...mapState({
      playersList: (state) => state.players,
    }),
  },
  methods: {
    displayToastNoAction(info) {
      this.$buefy.toast.open({
        duration: 4000,
        message: `We will assume that you are now following <br><b>${info}</b>. 🎾😏`,
        position: 'is-bottom',
        type: 'is-success'
      });
    },
  },
};
</script>
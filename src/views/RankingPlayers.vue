<template>
  <div class="styns__view container">
    <cards-list
      :list="playersList"
      @card:leftCtaClicked="displayToastNoAction"
      @card:rightCtaClicked="displayModal"
    />
    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
        <modal-player-details
            :player-details="playerDetails"
        />
    </b-modal>
  </div>
</template>

<script>
import CardsList from "@/components/molecules/CardsList";
import ModalPlayerDetails from "@/components/molecules/ModalPlayerDetails";
import { mapState } from "vuex";

export default {
  name: "RankingPlayers",
  components: {
    CardsList,
    ModalPlayerDetails
  },
  data() {
      return {
          isCardModalActive: false,
          playerDetails: {}
      }
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
    displayModal(info) {
        this.isCardModalActive = true;
        this.playerDetails = info;
    }
  },
};
</script>
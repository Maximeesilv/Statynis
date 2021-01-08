<template>
  <div class="columns is-multiline">
    <card
      v-for="card in sortedList"
      :key="card.rankink"
      :card-content="card"
      @buttonClicked:left="emitLeftCtaClicked"
      @buttonClicked:right="emitRightCtaClicked"
      class="styns__card column is-12"
    />
    <div v-if="isListEmpty" class="column is-12">
      <h1 class="title is-1">No stats available for now...</h1>
    </div>
  </div>
</template>

<script>
import Card from "@/components/atoms/Card";

export default {
  name: "CardsList",
  components: {
    Card,
  },
  props: {
    list: {
      type: Array,
    },
    orderBy: {
      type: String,
      validator: (value) => {
        return ["ascending", "descending"].indexOf !== -1;
      },
      default: () => {
        return "ascending";
      },
    },
  },
  computed: {
    isListEmpty() {
      return this.list.length === 0;
    },
    sortedList() {
      let listCopy = this.list;
      if (this.list.length > 0) {
        const sortedList = listCopy.sort((a, b) =>
          a.data.rank > b.data.rank ? 1 : b.data.rank > a.data.rank ? -1 : 0
        );
        return sortedList;
      }
      return [];
    },
  },
  methods: {
      emitLeftCtaClicked(info) {
          this.$emit('card:leftCtaClicked', info)
      },
      emitRightCtaClicked(info) {
          this.$emit('card:rightCtaClicked', info)
      }
  }
};
</script>

<style lang="scss">
.styns__card {
  margin: 1em 2em;
  border-radius: 1em!important;
}
</style>
<template>
  <div  class="columns is-multiline">
    <card 
        v-for="card in list"
        :key="card.rankink"
        class="column is-12"
    >
    </card>
    <div
        v-if="isListEmpty"
        class="column is-12"
    >
        <h1 class="title is-1">
            No stats available for now...
        </h1>
    </div>
  </div>
</template>

<script>
import Card from "@/components/atoms/Card";

export default {
  name: "CardsList",
  components: {
    Card
  },
  props: {
    list: {
      type: Array
    },
  },
  computed: {
      isListEmpty() {
          return this.list.length === 0;
      }
  }
};
</script>
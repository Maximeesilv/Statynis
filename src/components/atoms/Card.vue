<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="cardContent.picture"
              alt="Placeholder image"
              class="card-img"
            />
          </figure>
          <figure class="image is-48x48 country-wrapper">
            <img
              :src="cardContent.country.picture"
              alt="Country flag"
              class="country-flag"
            />
          </figure>
        </div>
        <div class="media-content">
          <span class="title is-6">
            #{{ cardContent.data.rank }} | {{ cardContent.firstname }}
            {{ cardContent.lastname }}
          </span>
          <span class="subtitle is-6">
            {{ cardContent.shortname }}
          </span>
          <br />
          <span class="title is-6">
            Points: {{ cardContent.data.points }}
          </span>
          <b-taglist class="column is-12">
            <b-tag>
              Age: <b>{{ cardContent.data.age }} </b>
            </b-tag>
            <b-tag :type="getSexColor">
              {{ cardContent.sex }}
            </b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="emitLeftButtonClicked">Follow</a>
      <a class="card-footer-item">View</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardContent: {
      type: Object,
    },
  },
  computed: {
    getSexColor() {
      let color = "is-info";

      switch (this.cardContent.sex) {
        case "F":
          color = "is-danger";
          break;
        case "M":
          color = "is-info";
          break;
      }

      return color + ' is-light';
    },
  },
  methods: {
    emitLeftButtonClicked() {
      console.log(`${this.cardContent.firstname} ${this.cardContent.lastname}`);
      this.$emit(
        "buttonClicked:left",
        `${this.cardContent.firstname} ${this.cardContent.lastname}`
      );
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/global.scss";

.styns__card {
  border-radius: 0.75rem;

  .card-img {
    border-radius: 0.25em;
  }
  .country-wrapper {
    left: 24px;
    top: 12px;
    .country-flag {
      border: 2px solid white;
      box-shadow: 5px 4px 11px 2px#eeeeee;
      border-radius: .5em;
    }
  }

  .media-content {
    overflow-y: hidden;
  }

  .card-footer-item {
      color: #348300;
  }
}
</style>
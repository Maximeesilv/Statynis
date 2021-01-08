<template>
  <div id="app" class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
      </template>
    </b-navbar>
    <router-view class="--full-page-height"/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Work done by <strong>Maxime Gasnier</strong> Dev @Oxynum.
        </p>
      </div>
  </footer>
  </div>
</template>

<style lang="scss">
@import 'styles/global.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

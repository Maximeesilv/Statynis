<template>
  <div id="app" class="container">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/components/molecules/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

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

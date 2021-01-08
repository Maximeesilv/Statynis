<template>
  <b-navbar :fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/brandlogo.png" alt="Oxynum Agency logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Rate ⭐️
            </b-navbar-item>
        </template>
    <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Contact
                <img src="@/assets/mg_email.png" alt="Weird User" />
            </b-navbar-item>
            <b-navbar-item tag="div">
                <a class="button is-success">
                        <strong>Github 💻</strong>
                </a>
            </b-navbar-item>
        </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
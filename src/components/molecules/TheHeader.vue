<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/brandlogo.png" alt="Oxynum Agency logo" />
      </b-navbar-item>
    </template>
    <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="@/assets/mg_email.png" alt="Weird User" />
            </b-navbar-item>
        </template>
  </b-navbar>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
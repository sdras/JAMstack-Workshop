<template>
  <div id="app">
    <app-nav />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppNav,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}

main {
  display: block;
}
</style>

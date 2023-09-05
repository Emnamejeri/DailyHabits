<template>
  <router-view />
  <navigationComponent />
  <bodyText />
  <adviceDisplay />
  <footerSection />
</template>

<script>
import navigationComponent from "./components/navigationComponent.vue";
import bodyText from "./components/bodyText.vue";
import adviceDisplay from "./components/adviceDisplay.vue";
import footerSection from "./components/footerSection.vue";

export default {
  name: "App",
  components: {
    navigationComponent,
    bodyText,
    footerSection,
    adviceDisplay,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

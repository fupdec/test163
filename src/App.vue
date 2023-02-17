<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WebsitesList />
  </div>
</template>

<script>
import WebsitesList from './components/WebsitesList.vue'

export default {
  name: 'App',
  components: {
    WebsitesList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

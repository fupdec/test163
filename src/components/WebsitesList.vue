<template>
  <div class="app">
    <v-text-field v-model="website" :loading="loading" :disabled="loading" outlined></v-text-field>
    <v-btn @click="count" :loading="loading" :disabled="loading">Подсчитать подключенные файлы</v-btn>

    <div v-for="i, x in styles" :key="x">
      {{ i }}
    </div>
    <div v-for="i, x in scripts" :key="x">
      {{ i }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'WebsitesList',
  data: () => ({
    website: 'https://vuejs.org/',
    styles: [],
    scripts: [],
    loading: false,
  }),
  methods: {
    async count() {
      this.loading = true
      this.styles = []
      this.scripts = []
      await axios({
        method: 'post',
        url: "http://localhost:3333/counter",
        data: {
          url: this.website,
        }
      })
        .then(res => {
          this.styles = res.data.styles
          this.scripts = res.data.scripts
          this.loading = false
        })
        .catch(() => {
          this.styles = []
          this.scripts = []
          this.loading = false
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app {
  margin: 40px;
}
</style>

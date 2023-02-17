<template>
  <div class="app">
    <v-text-field v-model="website" :loading="loading" :disabled="loading" label="Адрес сайта"></v-text-field>
    <v-btn @click="count" :loading="loading" :disabled="loading">Подсчитать подключенные файлы</v-btn>

    <v-card v-if="scripts.length" class="mx-auto mt-2">
      <v-list dense>
        <h3>Скрипты</h3>
        <v-list-item-group color="primary">
          <v-list-item v-for="(i, x) in scripts" :key="x">
            {{ x + 1 }}. {{ i }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-card v-if="styles.length" class="mx-auto  mt-2">
      <v-list dense>
        <h3>Стили</h3>
        <v-list-item-group color="primary">
          <v-list-item v-for="(i, x) in styles" :key="x">
            {{ x + 1 }}. {{ i }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
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
  padding: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mt-2 {
  margin-top: 20px;
}
</style>

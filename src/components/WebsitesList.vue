<template>
  <div>
    <div v-for="i, x in arr" :key="x">
      {{ i }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'WebsitesList',
  data: () => ({
    arr: ['https://vuejs.org/'],
    selected: 'https://vuejs.org/',
  }),
  methods: {
    async count() {
      let result
      await axios({
        method: 'post',
        url: "http://localhost:3333/counter",
        data: this.selected
      })
        .then(res => {
          result = res.data
        })
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

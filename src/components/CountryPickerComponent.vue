<template>
  <div class="container">
    <div class="flex-child selected-countries">
      <h3>Områder:</h3>
      <ul>
        <li>
          {{selected}}
        </li>
      </ul>
    </div>
    <div class="flex-child countries">
      <table>
        <thead>
        <tr v-for="country in info" :key="country">
            {{}}
          <td>
            <input type="checkbox" :value="country.name" v-model="selected">
            {{country.name}}
          </td>
        </tr>
        </thead>
      </table>
    </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
  props:["data"],
  async mounted() {
    await axios
        .get("https://restcountries.com/v2/all")
        .then(response => (this.info = response.data))
  },
  data() {
    return {
      info: null,
      select_all: false,
      selected: [],
    }
  },
  methods: {
    async getCountries() {
      await axios
          .get("https://restcountries.com/v3/all")
          .then(response => (this.info = response))
    },
    select() {
      this.selected = [];
      if(!this.select_all) {

        for(let i in this) {
          this.selected.push(this[i].id)
        }

      }
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.flex-child {
  flex: 1;
  border: 2px solid yellow;
}

.flex-child:first-child {
  margin-right: 20px;
}
.container {
  display: flex;
}

</style>

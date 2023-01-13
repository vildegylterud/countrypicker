<template>
  <div class="container">
    <div class="flex-child selected-countries">
      <h3>Områder:</h3>
'        <li v-for="s in selected" :key="s.id">
          {{s}}
        </li>

    </div>
    <div class="flex-child countries">
        <v-select v-model="selected" multiple name="country" class="form-control select-checkbox">
          <optgroup v-for="country in info" :key="country" :label=country.region>
          <option v-for="country in info" :key="country" :label="country.name"> {{ country.name }}</option>
          </optgroup>
        </v-select>
      <button @click="clearData">Tøm innhold</button>
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
    clearData() {
      this.selected = [];
    },
    select() {
      this.selected = [];
      if(!this.select_all) {

        for(let i in this.selected) {
          this.selected.push(this.selected[i].id)
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
}

.flex-child:first-child {
  margin-right: 20px;
}
.container {
  display: flex;
}
.select-checkbox{
size: 200px;
}
.select-checkbox option::before {
  content: "\2610";
  width: 1.3em;
  text-align: center;
  display: inline-block;
}
.select-checkbox option:checked::before {
  content: "\2611";
}

</style>

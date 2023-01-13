<template>
  <div class="container">
  <div class="flex-child">
    <p>Valgte land:</p>
      <li v-for="country in selected_country" :key="country">
        {{ country.name.common }}
      </li>
  </div>
  <div id="checkboxes" class="flex-child">
    <div>
      <label v-for="region in regions" :key="region" >
      {{region}}
        <input id="input-box" type="checkbox" multiple value="region"/>
      </label>
    </div>
    <div class="select">
      <p>Velg land:</p>
    <select v-model="selected_country" multiple class="form-control select-checkbox">
      <option id="all-countries" value="">Velg alle landene i Europa</option>
    <option v-for="country in all_countries" :key="country" :value="country">  {{ country.name.common }} </option>
    </select>
  </div>
  </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      all_countries: null,
      regions: ["Europe", "America", "Asia", "Americas", "Oceania", "Africa"],
      selected_country: null,
      selected_region: null,
    }
  },
  name: "CountryPicker",
  async mounted() {
    await axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => (this.all_countries = response.data))
  },
}
</script>

<style scoped>

#all-countries {
  font-weight: bold;
}
.select-checkbox {
  height: 520px;
}
.select-checkbox option::before {
  content: "\2610";
  width: 1.3em;
  text-align: left;
  display: inline-block;
}
.select-checkbox option:checked::before {
  content: "\2611";
}

h3 {
  margin: 40px 0 0;
}
.select {
  display: grid;
  margin-top: 40px;
}

.select:first-child {
  margin-right: 20px;
}
.flex-child {
  flex: 1;
  margin-top: 40px;
  text-align: center;
  margin-right: 50px;
}

.flex-child:first-child {
  margin-right: 20px;
}
.container {
  display: flex;
}

#checkboxes {
  margin-top: 50px;
}

.select {
  text-align: left;
  font-weight: bold;
}
</style>
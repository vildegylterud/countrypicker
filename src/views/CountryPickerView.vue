<template>
<div class="container">
  <h2>Bouvet - teknisk test</h2>
    <div class="country-picker-component">
      <strong>Selected a country:</strong>
    <country-picker-component
        :options="all_countries"
        v-model="selectedCountries"
    >
    </country-picker-component>
  </div>

  <div class="selected-countries">
    <strong>Selected Countries:</strong>
    <li class="selected-list" v-for="country in selectedCountries" :key="country"> {{ country }} </li>
  </div>
  </div>
</template>

<script>
import CountryPickerComponent from "@/components/CountryPickerComponent";
import axios from "axios";

export default {
  name: "CountryPickerView",
  components: {CountryPickerComponent},
  data() {
    return {
      all_countries: [],
      selectedCountries: [],
    }
  },
  async beforeCreate() {
    await axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => (this.all_countries = response.data))
  },
}
</script>

<style scoped>

.container {
  margin-left: 50px;
}
.country-picker-component {
  float:left;
  margin-top: 60px;
  text-align: left;
  margin-right: 300px;

}
.selected-countries {
  float:left;
  margin-right: 20px;
  margin-top: 65px;

}
.selected-list {
  text-align: left;
  margin-top: 5px;
}

</style>
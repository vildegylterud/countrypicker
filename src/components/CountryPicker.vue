<template>
  <div class="container">
  <div class="flex-child">
    <p>Valgte land:</p>
      <li v-for="country in selected_country" :key="country">
        {{ country.name.common }}
      </li>
    <ul>
      {{ selected_region }}
    </ul>
  </div>
  <div id="checkboxes" class="flex-child">
    <div>
      <select v-model="selected_region">
        <option disabled label="--- Velg region ---"></option>
        <option v-for="region in regions" :key="region" :value="region"> {{ region }}</option>
      </select>
    </div>
    <div class="select">
      <p>Velg land:</p>
    <select v-model="selected_country" multiple class="form-control select-checkbox">
      <option id="all-countries" value="">Velg alle landene i {{ selected_region }}</option>
    <option v-for="country in getCountryByRegion(selected_region)" :key="country" :value="country">  {{ country }} </option>
    </select>
  </div>
  </div>
  </div>
</template>

<script>

import axios from "axios";
import {getCountryByRegion} from "@/service/countries";

export default {
  name: "CountryPicker",
  data() {
    return {
      all_countries: null,
      all_countries_in_region: null,
      regions: ["Europe", "America", "Asia", "Americas", "Oceania", "Africa"],
      selected_country: null,
      selected_region: [],
      response: null

    }
  },
  methods: {
    async getSelectedCountries() {
       await axios
            .get("http://localhost:8080/", this.config)
            .then((response) => {
              if (response.data !== this.$store.getters.GET_SELECTED_COUNTRIES) {
                response.data.forEach((element) => {
                  this.$store.commit("ADD_COUNTRY", element);
                });
              }
            });
    },
       async getCountryByRegion(region) {
         await getCountryByRegion(region)
      },
  },
  async mounted() {
    await axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => (this.all_countries = response.data))
  },
}
</script>

<style scoped src="./../styles/CountryPicker.css">
</style>
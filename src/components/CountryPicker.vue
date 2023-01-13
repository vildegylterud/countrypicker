<template>
  <div class="container">
  <div class="flex-child selected-countries">
    <p>Valgte land:</p>
      <li v-for="countries in selected_country" :key="countries">
        {{ countries }}
      </li>
  </div>

  <div id="checkboxes" class="flex-child countries">
    <select v-model="selected_country" multiple class="form-control select-checkbox">
    <option>-----Velg et land-----</option>
      <optgroup v-for="region in regions" :label="region" :key="region.id">
    <option v-for="country in countries" :key="country" :value="country">  {{ country.name.common }} </option>
      </optgroup>
    </select>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      countries: null,
      regions: ["Europe", "America"],
      selected_country: [],
    }
  },
  name: "CountryPicker",
  methods: {
  },
  async mounted() {
    await axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => (this.countries = response.data))
  },
}
</script>

<style scoped>

.select-checkbox {
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

#checkboxes input {
  display: inline-block;
  margin-top: 10px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 10px;
}

</style>
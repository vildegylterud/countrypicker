<template>
  <CountryPickerView/>
</template>

<script>
import CountryPickerView from "@/views/CountryPickerView";

export default {
  name: 'App',
  components: {
    CountryPickerView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 80px;
}

</style>

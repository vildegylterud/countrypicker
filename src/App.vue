<template>
  <h2>Bouvet - teknisk test</h2>
  <CountryPickerComponent/>
</template>

<script>
import CountryPickerComponent from './components/CountryPickerComponent.vue'

export default {
  name: 'App',
  components: {
    CountryPickerComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}

</style>

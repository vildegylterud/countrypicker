<template>
  <h2>Bouvet - teknisk test</h2>
  <CountryPicker/>
</template>

<script>
import CountryPicker from './components/CountryPicker.vue'

export default {
  name: 'App',
  components: {
    CountryPicker
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

<template>
  <div id="app">
    <GaoCase />
  </div>
</template>

<script>
import GaoCase from './components/GaoCase.vue'

export default {
  name: 'App',
  components: {
    GaoCase
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
  margin-top: 60px;
}
</style>

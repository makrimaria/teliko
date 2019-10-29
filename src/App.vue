<template>
  <div id="app1">
    
    <router-view></router-view>
    <Cards />

    
  </div>
</template>

<script>

import Cards from './components/Cards.vue'

export default {
  name: 'app',
  components: {
    Cards
  }
}
</script>

<style>
 #app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

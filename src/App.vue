<template>
  <div id="app1">
    <Navbar />
    <router-view></router-view>
    <Cards />

    
  </div>
</template>

<script>

import Cards from './components/Cards.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Cards,
    Navbar
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

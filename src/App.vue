<template>
  <div id="app">
    <Navbar />
    <Chatbot />
    <div id="wrapper">
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Chatbot from "./components/Chatbot.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Chatbot,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}

/* .header-img {
   background-image: url(https://images.unsplash.com/photo-1529928341740-5a40b87adaa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80); 
  width: 100%;
 background-repeat: repeat; 
  background-size:cover;
  background-position: 100% 100%;
  background-color: #f5f5f5;
   height:100%;

    
 
   

} */
</style>



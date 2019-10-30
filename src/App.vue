<template>
  <div id="app1">
       <router-view></router-view>
    
     </div>
</template>

<script>
//import Cards from './components/Cards.vue'

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background-image: url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80); 
  /* background-size: cover;   */
  /* overflow: hidden; 

  /* overflow: hidden;
  background-image: url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  
  /* background-repeat: repeat !important; */
  /* background-size: cover; */
  /* background-position: 100% 100%; */
  /* background-color: #f5f5f5; */
  /* height: 300%; */
} 
  
 


ul {
  list-style-type: none;
   margin-bottom: -60px !important; 
  margin-top: 0 !important;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: left;
  margin-block-end: 0px;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 28px 32px;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
}
li a:hover {
  background-color: #92a8d1;
}

.header-img {
  background-image: url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  
 background-repeat: repeat; 
  background-size:cover;
  background-position: 100% 100%;
  background-color: #f5f5f5;
   height:100%;

    
 
   

}


</style>



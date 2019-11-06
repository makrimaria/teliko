
<template>
  <div id="home">
    
    <div class="header">
       <div class="header-img">
         <br>

         <h1><span>Prodigy</span> Real Estate</h1>
         <h2>Find your dream home! </h2>


         <DropDownMenu style="margin: 150px;" />


       

          
        
    <!--<InputForm />-->
</div>
</div>
  <Cards />
  </div>
</template>


<script >


//import InputForm from './InputForm.vue';
import DropDownMenu from './DropdownMenu.vue';

import Cards from './Cards.vue'



export default {
  name: "header",
  components: {
    DropDownMenu,
    Cards
    //InputForm


  }
}
</script>


<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  position:relative;
   top: -30px; 

}
/* apo edw tha allazw poso pianei to background img */
.header {
  /* height: 150px; */
  height: 450px;
}

 .header .header-img {
  background-image:url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-repeat: no-repeat !important;
  background-size:cover;
  background-position: 100%;
  background-color: #f5f5f5;
  /* height: 300%;  */
} 




/* #search {
  width: 357px;
  margin: 4px auto;
  text-align: center;
  display: inline-block;
}

#search_text {
  width: 297px;
  padding: 15px 0 15px 20px;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  border: 0 none;
  height: 52px;
  margin-right: 0;
  color: grey;
  outline: none;
  background: white;
  float: left;
  box-sizing: border-box;
  transition: all 0.15s;

} */

/* .btn1 {

  float: right;

  padding: 0px;
  width: 250px;
  font-size: 35px;
  text-align: middle;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #cf6f6f;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  align-self: right !important; 

}

button:hover {
  background-color: #d58282;
} */

button:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

h1 { 

  color: #cf6f6f;
  font-weight: 700!important;
  font-size: 80px !important;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;

   }
h2 {

  color: #cf6f6f;
  font-size: 40px !important;
  font-weight: 700 !important;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;


  
}

p {
  color: #cf6f6f;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
}

</style>


<template>


<div id="app">
    
       
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>

        </ul>
 
    
    <div class="header">
        <div class="header-img">
               <div class="col-4">
            <p style="display:none"><iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/cf3d0e99-4706-41f7-a109-0479266b4cd8">
    </iframe></p>

    
    

    <button style="margin:5px; " class="btn1" v-on:click="openBot">open Chatbot</button>
    <p> </p>
    <button class="btn2" v-on:click="openBot">close Chatbot</button>

    

            
            

          
          </div>
            
        </div>
    </div>



</div>

  
</template>


<script >

import $ from 'jquery'

export default {
    name: 'header',
    methods: {
      openBot() {

         $(document).ready(function(){
      $(".btn1").click(function(){
        $("p").slideDown();
      });
      $(".btn2").click(function(){
        $("p").slideUp();
      });
    });
      
      
    }
}
}

    </script>


<style>

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
  top: -30px; 
}

.header {
  height: 320px;
}

.header .header-img {
  background-image: url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
 background-color: #f5f5f5;
 height: 300%;
}

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
li{
    float: left;
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 28px 32px;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    

}
li a:hover{
    background-color: #92a8d1;
}

#search {
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
}

.btn1, .btn2 {
 
  margin: 10px auto;
  padding: 30px 64px;
  font-size: 20px;
  text-align: right;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color:#262626;
  border: none;
  font-family: 'Courier New', Courier, monospace;
  
  
}

button:hover {background-color:#92a8d1 }

button:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}





</style>

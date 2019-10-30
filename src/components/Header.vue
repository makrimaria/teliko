
<template>
  <div id="home">

    <div class="header">
       <div class="header-img">

         <h1>Prodigy Real Estate</h1>
       

          <div id="chatbot" style="display:none;">
            <iframe
             style="margin-bottom:70px;"
              allow="microphone;"
              class="bottomright"
              width="250"
              height="330"
              src="https://console.dialogflow.com/api-client/demo/embedded/acd4e009-c551-4c43-a85a-a2033d5f08fe"
            ></iframe>
          </div>

                <button class="btn1 bottomright" v-on:click="openBot">Open Chatbot</button>
         
        
       </div>
      </div>
   </div>
</template>


<script >
import $ from "jquery";

//import InputForm from './InputForm.vue';
//import DropDownMenu from './DropdownMenu.vue';


export default {
  name: "header",
  components: {
    //DropDownMenu

  //InputForm

  },
  methods: {
    openBot() {
      var label = $(".btn1").text().trim();
      $(document).ready(function() {
        if(label == "Open Chatbot") {
          $(".btn1").text("Close Chatbot");
          $("#chatbot").slideDown();
        }else{
          $(".btn1").text("Open Chatbot"); 
          $("#chatbot").slideUp();
        }
      });
      /* $(document).ready(function() {
          $("p").slideDown();
      }); */
    }/* ,
    closeBot() {
      $(document).ready(function() {
          $("p").slideUp();
        });
    } */
  }
};
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
  height: 150px;
}

 .header .header-img {
  background-image: url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
  background-repeat: repeat !important;
  background-size: cover;
  background-position: 100% 100%;
  background-color: #f5f5f5;
  height: 300%; 
} 

.bottomright {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 9;
}

.btn1 {

  float: right;
  width: 250px;
  padding: 20px;
  font-size: 20px;
  text-align: middle;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #262626;
  border: none;
  font-family: "Courier New", Courier, monospace;
  align-self: right !important; 

}

button:hover {
  background-color: #92a8d1;
}

button:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

h1 { 

  
 }


</style>

<template>

<div>

    <div id="chatbot" style="display:none;">
            <iframe
             style="margin-bottom:52px;"
              allow="microphone;"
              class="bottomright"
              width="250"
              height="330"
              src="https://console.dialogflow.com/api-client/demo/embedded/acd4e009-c551-4c43-a85a-a2033d5f08fe"
            ></iframe>
          </div>

                <button class="btn1 bottomright" v-on:click="openBot">Open Chatbot</button>
         
</div>
    
</template>

<script>

import $ from "jquery";

export default {
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
     
    }
    }
    
}
</script>

<style >

.bottomright {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 9;

}


.btn1 {

  float: right;

  padding: 0px;
  width: 250px;
  font-size: 35px;
  text-align: middle;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #b34c37;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  align-self: right !important; 

}

button:hover {
  background-color: #b34c37;
}

button:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
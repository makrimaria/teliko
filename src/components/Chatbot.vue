<template>
  <div>
    <div id="chatbot" style="display:none;">
      <iframe
        style="margin-bottom:52px;"
        allow="microphone;"
        class="bottomright"
        width="450"
        height="530"
        src="https://console.dialogflow.com/api-client/demo/embedded/acd4e009-c551-4c43-a85a-a2033d5f08fe"
      ></iframe>
    </div>

    <button class="btn1 bottomright" v-on:click="openBot">Ask me anything</button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  methods: {
    openBot() {
      var label = $(".btn1")
        .text()
        .trim();
      $(document).ready(function() {
        if (label == "Ask me anything") {
          $(".btn1").text("Close Chatbot");
          $("#chatbot").slideDown();
        } else {
          $(".btn1").text("Ask me anything");
          $("#chatbot").slideUp();
        }
      });
    }
  }
};
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
  width: 450px;
  font-size: 30px;
  text-align: middle;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #b34c37;
  border: none;
  font-family: 'Rajdhani', sans-serif;
  align-self: right !important; 
    border-radius: 40px;


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
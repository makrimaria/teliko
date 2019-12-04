<template>
  <div>
    <div id="chatbot" style="display:none;">
      <iframe
        style="margin-bottom:52px;"
        allow="microphone;"
        class="bottomright"
        width="450"
        height="530"
        src="https://skg-code-bot.firebaseapp.com/"
      ></iframe>
    </div>

    <b-button pill id="toggleButton"  class="bottomright btn1">
      <font-awesome-icon style="font-size: 30px;" icon="comments" />
    </b-button>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  // methods: {
  //   openBot() {
  //     // var label = $(".btn1")
  //     //   .text()
  //     //   .trim();
  //     $(document).ready(function() {
  //       // if (label == "Ask me anything!") {
  //       //   $(".btn1").text("Close Chatbot");
  //       //   $("#chatbot").slideDown();
  //       // } else {
  //       //   $(".btn1").text("Ask me anything!");
  //       //   $("#chatbot").slideUp();
  //       // }
  //     });
  //   }
  // },
  mounted() {
    $("#toggleButton").click(function() {
      $(document).ready(function() {
        $("#chatbot").slideToggle();
      });
    });
  }
};
</script>

<style>
.bottomright {
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 9;
}
#toggleButton {
  color: white;
  background-color: #b34c37;
  border-color: #b34c37;
  width: 100px;
  height: 80px;
  margin: 25px 25px;
}

#toggleButton:focus {
  
  border-color: #b34c37;
  box-shadow: none;
}

#toggleButton:hover {
  background-color: white;
  color: #b34c37;
  border-color: #b34c37;
  border-width: 1px;
}

/* .btn1 {
  float: right;
  padding: 0px;
  width: 50px;
  font-size: 35px;
  text-align: middle;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #b34c37;
  border: none;
  font-family: "Rajdhani", sans-serif;
  align-self: right !important;
  border-radius: 20px;
} */

button:hover {
  background-color: #b34c37;
}

button:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
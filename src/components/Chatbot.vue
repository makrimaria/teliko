<template>
  <div>
    <div id="chatbot" style="display:none;">
      <iframe
        style="margin-bottom:81px;"
        allow="microphone;"
        class="bottomright"
        width="25%"
        height="60%"
        src="https://skg-code-bot.firebaseapp.com/"
      ></iframe>
    </div>

    <b-button pill id="toggleButton" class="bottomright btn1">
      <font-awesome-icon style="font-size: 30px;" icon="comments" />
    </b-button>
    <div id="toggleButton-mobile">
      <font-awesome-icon style="font-size: 30px;" icon="comments" />
    </div>
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
    $("#toggleButton-mobile").click(function() {
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
  bottom: 15px;
  right: 15px;
  z-index: 9;
}
#toggleButton {
  color: white;
  background-color: #b34c37;
  border-color: #b34c37;
  width: 80px;
  height: 80px;
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
@media (min-width: 768px) {
  #toggleButton-mobile {
    display: none;
  }
}


@media (max-width: 767px) {
  iframe.bottomright {
    width: 100%;
    height: 88.5%;
    right: 0;
    top: 0;
    border: 1px solid #484848;
  }

  #toggleButton {
    display: none;
  }

  #toggleButton-mobile {
    display: block;
    z-index: 999;
    bottom: 5px;
    right: 0;
    background-color: #b34c37;
    border: 5px solid #b34c37;
    border-right: 22px solid #b34c38;
    width: 50px;
    border-radius: 15% 0 0 15%;
    position: fixed;
  }
}
</style>
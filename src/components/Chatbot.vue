<template>
  <div>
    <div id="chatbot" style="display: none;">
      <iframe
        style="margin-bottom:81px;"
        allow="microphone;"
        class="bottomright"
        width="25%"
        height="60%"
        src="https://botfinal-44ef0.firebaseapp.com/"
      ></iframe>
    </div>

    <b-button pill id="toggleButton" class="bottomright btn1">
      <font-awesome-icon style="font-size: 30px;" icon="comments" />
    </b-button>
    <div id="openButton-mobile">
      <font-awesome-icon class="mobile" style="font-size: 30px; color: white;" icon="comments" />
    </div>
    <div id="closeButton-mobile">
      <font-awesome-icon class="mobile" style="font-size: 30px; color: white;" icon="times" />
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  // methods: {
  //   openBot() {
  //     var label = $(".btn1")
  //       .text()
  //       .trim();
  //     $(document).ready(function() {
  //       if (label == "Ask me anything!") {
  //         $(".btn1").text("Close Chatbot");
  //         $("#chatbot").slideDown();
  //       } else {
  //         $(".btn1").text("Ask me anything!");
  //         $("#chatbot").slideUp();
  //       }
  //     });
  //   }
  // }
  mounted() {
    $("#toggleButton").click(function() {
      $(document).ready(function() {
        $("#chatbot").slideToggle("slow");
      });
    });
    $("#openButton-mobile").click(function() {
      $(document).ready(function() {
        $("#chatbot").slideToggle();
        $("#openButton-mobile").hide();
        $("#closeButton-mobile").show(500);
      });
    });
    $("#closeButton-mobile").click(function() {
      $(document).ready(function() {
        $("#chatbot").slideToggle();
        $("#closeButton-mobile").hide();
        $("#openButton-mobile").show(500);
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
  #openButton-mobile, #closeButton-mobile {
    width: 0px;
    height: 0px;
  }

  .mobile {
    display: none;
  }
}

@media (max-width: 767px) {
  iframe.bottomright {
    width: 100%;
    height: 94%;
    right: 0;
    top: 0;
    margin-bottom: 10px;
    border: 1px solid #484848;
    z-index: 999;
  }

  #toggleButton {
    display: none;
  }

  #openButton-mobile {

    z-index: 999;
    top: 5px;
    right: 0;
    background-color: #b34c37;
    border: 5px solid #b34c37;
    border-right: 15px solid #b34c38;
    width: auto;
    border-radius: 15% 0 0 15%;
    position: fixed;
  }

  #closeButton-mobile {
    display: none;
    z-index: 999;
    bottom: 0px;
    background-color: #b34c37;
    border: 5px solid #b34c37;
    border-right: 22px solid #b34c38;
    width: 100%;
    height: 6%;
    
    position: fixed;
  }
}
</style>
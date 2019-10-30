
<template>
  <div id="home">
    <Navbar />

    <div class="header">
      <div class="header-img">
        <div class="col-15">
          <div id="chatbot" style="display:none">  
            <iframe
              class="bottomright"
              allow="microphone;"
              width="250"
              height="330"
              src="https://console.dialogflow.com/api-client/demo/embedded/cf3d0e99-4706-41f7-a109-0479266b4cd8"
            ></iframe>
          </div>

          <button class="btn1 bottomright" v-on:click="openBot">Open Chatbot</button>
          <!-- <button class="btn2" v-on:click="closeBot">close Chatbot</button> -->
        </div>
      </div>
    </div>
    <!-- <InputForm /> -->

<Cards />
  </div>
        

</template>


<script >
import $ from "jquery";
//import InputForm from './InputForm.vue';
import Navbar from './Navbar.vue';
import Cards from './Cards.vue';

export default {
  name: "header",
  components: {
    //InputForm,
    Navbar,
    Cards
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
  position: relative;
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



ul {
  list-style-type: none;
  margin-bottom: 0 !important;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: left;
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

.btn1 {

  /* margin: 10px auto; */
  padding: 20px;
  font-size: 20px;
  text-align: right;
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


</style>

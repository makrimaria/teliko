<template>
  <div id="background">
    <div class="container" style="padding:20px;">
      <div>
        <h4>Do you want to list your property?</h4>
        <h4>Just fill the form and we will take care of it.</h4>
      </div>
      <b-row>
        <b-col sm="6" style="padding: 10px;">
          <b-form id="form" v-on:submit.prevent="submitHouse">
            <b-form-group label="City">
              <b-form-input
                type="text"
                id="city"
                v-model="house.city"
                style="font-weight:900;"
                placeholder="City of the house"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Area" id="location" v-model="house.location">
              <b-form-input
                type="text"
                id="location"
                v-model="house.location"
                style="font-weight:900;"
                placeholder="Specific area"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Size">
              <b-form-input
                type="number"
                id="area"
                v-model="house.area"
                style="font-weight:900;"
                placeholder="Area in square meters"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Price">
              <b-form-input
                type="number"
                id="price"
                v-model="house.price"
                style="font-weight:900;"
                placeholder="Price in €"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" v-b-modal="'my-modal'" variant="outline-danger">Submit</b-button>
          </b-form>
        </b-col>
        <b-col sm="6" style="margin:auto;">
          <img
            style="max-width: 60%"
            src="https://png2.cleanpng.com/sh/9d9d39498957aaf842eaba55777dba84/L0KzQYm3VMA5N5DBj5H0aYP2gLBuTfhwfaRqRdV4bYD4hLb5Tflkd594ReVEbXLyfH7vjB1mNZRxgeI2YYL3PbLrkvV0e146edVqM0Hpc4LsgcM2P182TKs7NkK6QoK8UsMzOGE6SKo6MkW4PsH1h5==/kisspng-house-computer-icons-symbol-home-clip-art-adress-5aca31fc1ea357.1492627215232005081255.png"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { dbfs } from "../config/db";
import Firebase from 'firebase';


var housesRef = dbfs.collection("houses");

export default {
  data: function() {
    return {
      house: {
        city: "",
        location: "",
        area: Number,
        price: Number

      }
    };
  },
  firebase: {
    houses: housesRef
  },
  methods: {
    //Real Time Database
    // submitHouse: function() {
    //   var city = document.forms["form"]["city"].value;
    //   var location = document.forms["form"]["location"].value;
    //   var area = document.forms["form"]["area"].value;
    //   var price = document.forms["form"]["price"].value;
    //   if (city == "" || location == "" || area == "" || price == "") {
    //     alert("Please fill all fields");
    //     return false;
    //   } else {
    //     housesRef.push(this.house);
    //     document.getElementById("form").reset();
    //     alert("Property listed successfully");
    //   }
    // }
    
    //Firestore
    submitHouse: function() {
      var city = document.forms["form"]["city"].value;
      var location = document.forms["form"]["location"].value;
      var area = document.forms["form"]["area"].value;
      var price = document.forms["form"]["price"].value;
      //var created = Math.round(+new Date()/1000);
     
      if (city == "" || location == "" || area == "" || price == "") {
         alert("Please fill all fields");
         return false;
       } else {
         var house = housesRef.doc();
         house.set(this.house);
         house.update({created: Firebase.firestore.FieldValue.serverTimestamp()});
         document.getElementById("form").reset();
         alert("Property listed successfully");
       }
      
    }
  }
};
</script>


<style scoped>
.container {
  /* max-width: 5000px; */
  /* position: auto;   */

  display: block;
  position: relative;
  margin: auto;
  top: 50px;
  width: 1000px;
  background-color: whitesmoke;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  opacity: 0.9;
}

/* .listProperty {


  background-image: url(https://images.unsplash.com/photo-1572240979568-6ddb008a1128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80);
  background-size: cover;
  background-position: bottom center;
  height: 860px;
  width: 100%;
} */

#background {
  background-image: url(https://images.unsplash.com/photo-1572240979568-6ddb008a1128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80);
  background-size: cover;
  background-position: bottom center;
  height: 1200px;
  width: 100%;
  color: black !important;
  
}
</style>
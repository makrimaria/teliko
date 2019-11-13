<template>
  <div id="background">
    <div class="container" style="padding:20px;">
      <div>
        <br />
        <h4>Do you want to list your property?</h4>
        <h4>Just fill the form and we will take care of it :)</h4>
        <br />
        <hr />
      </div>

      <div class="column left" style="font-size:20px; margin-top: 60px; margin-left:60px;">
        <b-form id="form" v-on:submit.prevent="submitHouse">
          <b-form-group label="Category" style="text-align:left;">
            <b-form-radio-group
              class="mt-lg-2"
              id="category"
              v-model="house.category"
              name="radios-stacked"
              style="font-weight:900; "
              stacked
            >
              <b-form-radio value="residential" inline>Residential</b-form-radio>

              <b-form-radio value="commercial" inline>Commercial</b-form-radio>
              <b-form-radio value="land" inline>Land</b-form-radio>
              <b-form-radio value="other" inline>Other</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <br />

          <b-form-group label="Property Type" style="text-align:left;">
            <b-form-radio-group
              name="radios-stacked"
              class="mt-lg-2"
              id="propertyType"
              v-model="house.propertyType"
              style="font-weight:900;"
              stacked
            >
              <b-form-radio value="apartment" inline>Apartment</b-form-radio>

              <b-form-radio value="studio" inline>Studio</b-form-radio>
              <b-form-radio value="villa" inline>Villa</b-form-radio>
              <b-form-radio value="loft" inline>Loft</b-form-radio>
              <b-form-radio value="other" inline>Other</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <br />

          <b-form-group label="Available for:" style="text-align:left;">
            <b-form-radio-group
              class="mt-lg-2"
              id="sale"
              v-model="house.sale"
              style="font-weight:900;"
            >
              <b-form-radio value="sale" inline>Sale</b-form-radio>

              <b-form-radio value="rent" inline>Rent</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <br />

          <b-form-group
            label="City"
            id="city"
            v-model="house.city"
            style="width:300px; text-align:left;"
          >
            <b-form-select id="city" v-model="house.city" style="font-weight:900;"></b-form-select>
          </b-form-group>
          <br />
          <b-form-group
            label="Area"
            id="area"
            v-model="house.area"
            style="width:300px; text-align:left;"
          >
            <b-form-select id="area" v-model="house.area" style="font-weight:900;"></b-form-select>
          </b-form-group>

          <br />
          <br />
        </b-form>
      </div>

      <div class="column right" style="font-size:20px; float:right; margin-top:-830px;">
        <table>
          <tr>
            <td>
              
              <b-form-group label="Address" style="width:300px; text-align:left;">
                <input type="text" class="form-control search-slt" />
              </b-form-group>
            </td>
            <td>
              <b-form-group label="n°" style="margin-left:10px; width:50px; text-align:left;">
                <input
                  type="text"
                  class="form-contol search-slt"
                  style="font-size:18px; font-weight:500"
                />
              </b-form-group>
            </td>
          </tr>
        </table>

        <b-form-group label="Size" style="text-align:left;">
          <b-form-input
            type="number"
            id="area"
            v-model="house.area"
            style="font-weight:500; width:350px;"
            placeholder="Area in square meters"
          ></b-form-input>
        </b-form-group>


        <b-form-group label="Price" style="text-align:left;">
          <b-form-input
            type="number"
            id="price"
            v-model="house.price"
            style="font-weight:500; width:350px;"
            placeholder="Price in €"
          ></b-form-input>
        </b-form-group>
        <br>

        <ImageUploader> </ImageUploader>
      </div>
    </div>

 
  </div>
</template>

<script>

import ImageUploader from "./ImageUploader";
import { dbfs } from "../config/db";
import Firebase from "firebase";

var housesRef = dbfs.collection("houses");

export default {
  components: {
    ImageUploader
    
  },
  data: function() {
    return {
      house: {
        propertyType: "",
        category: "",
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
      var category = document.forms["form"]["category"].value;
      var propertyType = document.forms["form"]["propertyType"].value;

      //var created = Math.round(+new Date()/1000);

      if (
        city == "" ||
        location == "" ||
        area == "" ||
        price == "" ||
        category == "" ||
        propertyType == ""
      ) {
        alert("Please fill all fields");
        return false;
      } else {
        var house = housesRef.doc();
        house.set(this.house);
        house.update({
          created: Firebase.firestore.FieldValue.serverTimestamp()
        });
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
  /* margin:auto; */
  top: 50px;
  width: 1000px;
  background-color: whitesmoke;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;

  overflow: auto;
  /* opacity: 0.9; */
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

/* .blockForm {
    background: none repeat scroll 0 0;
    display: block;
    overflow: auto;
    width: 100%;
} */

.column {
  width: 50%;
  /* float: left; */
}
</style>
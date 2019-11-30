<template>
  <div id="background">
    <div class="container" style="padding:20px;">
      <div>
        <br />
        <h4>Do you want to list your property?</h4>
        <h4>Just fill the form and we will take care of it :)</h4>
        
        <hr />
      </div>

      <div class="column left" style="font-size:20px; margin-top: 60px; margin-left:60px;">
        <b-form id="form" v-on:submit.prevent="submitHouse">
          <b-form-group label="Category" style="text-align:left;">
            <b-form-radio-group
              class="mt-lg-2"
              name="category"
              input type="radio"
              v-model="house.category"
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
              class="mt-lg-2"
              name="Type"
              input type="radio"
              v-model="house.Type"
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
              name="type"
              input type="radio"
              v-model="house.type"
              style="font-weight:900;"
            >
              <b-form-radio value="sale" inline>Sale</b-form-radio>

              <b-form-radio value="rent" inline>Rent</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <br />

          <b-form-group
            label="City"
            name="city"
            v-model="house.city"
            label-for="cityy"
            style="width:300px; text-align:left;"
          >
            <b-form-select
            v-model="filters.city"
            class="mt-3"
            v-on:change="onChange()"
            :options="cityVariants"
            name="cityy"
          >
          <template v-slot:first>
              <option :value="null" disabled>Select city</option>
            </template>
          </b-form-select>
          
          </b-form-group>
          <br />

          <b-form-group
            label="Location"
            name="location"
            label-for="locationn"
            style="width:300px; text-align:left;"
          >
            <b-form-select
              v-if="filters.city!=null"
              v-model="filters.location"
               class="mt-3"
              v-on:change="onChange()"
              :options="regionVariants[filters.city].text"
              name="locationn"

            >
              <template v-slot:first>
                <option :value="null" disabled>Select area</option>
              </template>
            </b-form-select>
            <br><br>
          </b-form-group>

        <br />
        <br />
        </b-form>
      </div>

      <div class="column right" style="font-size:20px; float:right; margin-top:-830px;">
        <table>
          <tr>
            <td>
              
              <b-form-group label="Address" style="width:285px; text-align:left;">
                <input type="text" class="form-control search-slt" placeholder="Address the house is located" />
              </b-form-group>
            </td>
            <td>
              <b-form-group label="Num" style="margin-left:10px; width:50px; text-align:left;">
                <input
                  type="text"
                  class="form-contol search-slt"
                  style="font-size:18px; font-weight:500; text-align:center"
                  placeholder="#"
                  
                />
              </b-form-group>
            </td>
          </tr>
        </table>

        <b-form-group label="Size" style="text-align:left;">
          <b-form-input
            type="text"
            name="area"
            v-model="house.area"
            style="font-weight:500; width:350px;"
            placeholder="Area in square meters"
          ></b-form-input>
        </b-form-group>


        <b-form-group label="Price" style="text-align:left;">
          <b-form-input
            type="text"
            name="price"
            v-model="house.price"
            style="font-weight:500; width:350px;"
            placeholder="Price in €"
          ></b-form-input>
        </b-form-group>
        <br>

      
        
        <ImageUploader>        </ImageUploader>


        <br>
         <button v-on:click="submitHouse" style="margin-top:80px; margin-left:150px; width:200px;" type="button" class="btn btn-danger btn-lg btn-block">Submit</button>

        

      </div>
    </div>

 
  </div>
</template>

<script>

import ImageUploader from "./ImageUploader";
import { dbfs } from "../config/db";
import Firebase from "firebase";
import { EventBus } from "../config/event-bus.js";

var housesRef = dbfs.collection("houses");

export default {
  components: {
    ImageUploader
    
  },
  data: function() {
    return {
      
      house: {
        Type: "",
        category: "",
        city: "",
        location: "",
        area: "",
        price: "",
        img:""
        
      },
      filters: {
        city: null,
        region: null
      },
      cityVariants: [],
      regionVariants: []
    };
  },
  firebase: {
    houses: housesRef
  },

  mounted() {
    
   // Listen for the 'clicked-event' and its payload.  
      EventBus.$on("clicked-event", url=> {  
      console.log(`Received: ${url} :)`);  
      this.img=url;
      });  
   

    var i = 0;
    dbfs
      .collection("cities")
      .orderBy("name", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.cityVariants.push({ value: i, text: doc.data().name });
          i++;
        });
      });
    var j = 0;
    dbfs
      .collection("cities")
      .orderBy("name", "asc")

      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.regionVariants.push({ value: j, text: doc.data().regions });
          j++;
        });
      });

  },

  methods: {
 
    onChange: function() {
      this.filters.region = null;
      
     },

  
    //Firestore
    submitHouse: function() {
       
      this.house.city = this.filters.city;
      this.house.location = this.filters.location;

       var city = this.filters.city;
       var location = this.filters.location;
       var area = this.house.area;
       var price = this.house.price;
       var category = this.house.category;
       var Type = this.house.Type;
  
       if (
         city == null ||
         location == "" ||
         area == "" ||
         price == "" ||
         category == "" ||
         Type == ""
         
       ) {
         alert("Please fill all fields");
         return false;
       } else {

         
         this.house.city = this.cityVariants[this.filters.city].text;
         this.house.image=this.img;

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
  border-radius: 3%;

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
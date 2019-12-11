<template>
  <div id="background">
    <div class="container" >
    <div>
        <br />
        <h4>Do you want to list your property?</h4>
        <h4>Just fill the form and we will take care of it :)</h4>
        <hr >
      </div>

      <b-form id="form" v-on:submit.prevent="submitHouse"> </b-form><br />

    <b-row>
      <b-col class="heelloo">

        <b-form-group label="Property Type" style="text-align:left; margin-left:150px;">
            <b-form-radio-group
              class="mt-lg-2"
              name="Type"
              input type="radio"
              v-model="house.type"
              style="font-weight:900;"
              stacked
            >
              <b-form-radio value="Apartment" inline>Apartment</b-form-radio>
              <b-form-radio value="Studio" inline>Studio</b-form-radio>
              <b-form-radio value="Villa" inline>Villa</b-form-radio>
              <b-form-radio value="Loft" inline>Loft</b-form-radio>
              <b-form-radio value="Other" inline>Other</b-form-radio>
            </b-form-radio-group>
          </b-form-group> <br />

         

                   <b-form-group label="Available for:" style="text-align:left;  margin-left:150px;">
            <b-form-radio-group
              class="mt-lg-2"
              name="type"
              input type="radio"
              v-model="house.rent"
              style="font-weight:900;"
            >
              <b-form-radio value="sale" inline>Sale</b-form-radio>

              <b-form-radio value="rent" inline>Rent</b-form-radio>
            </b-form-radio-group>
          </b-form-group> <br />


      </b-col>
      <b-col class="hiii">

        <table>
          <tr>
            <td>
              
              <b-form-group label="Address" style=" text-align:left;">
                <input type="text" v-model="addr1" 
                class="form-control search-slt" 
                placeholder="Address the house is located" 
                style="font-size:18px; width:250px; font-weight:500; text-align:center" />
              </b-form-group>
            </td>
                 <td>
              <b-form-group label="Num" style="margin-left:10px; width:70px; text-align:left;">
                <input
                  type="number"
                  v-model="addr2"
                  class="form-control search-slt"
                  style="font-size:18px; font-weight:500; text-align:center"
                  placeholder="#"
                  
                />
              </b-form-group>
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <td>
              
            <b-form-group label="Size" style="text-align:left;">
              <b-form-input
                type="number"
                name="area"
                class="form-control search-slt"
                v-model="house.area"
                style="font-weight:500; width:150px; font-size:18px; text-align:center"
                placeholder="Area in square meters"
              ></b-form-input>
            </b-form-group>
            </td>
            <td>
             <b-form-group label="Floor" style="margin-left:40px; width:50px; text-align:left;">
                <input
                  type="number"
                  v-model="house.floor"
                  class="form-control search-slt"
                  name="floor"
                  style="font-weight:500; width:150px; font-size:18px; text-align:center"
                  placeholder="#"
                />
              </b-form-group>
            </td>
          </tr>
        </table>

        <b-form-group label="Price" style="text-align:left;">
          <b-form-input
            type="number"
            name="price"
            v-model="house.price"
            style="font-weight:500; width:340px;"
            placeholder="Price in €"
          ></b-form-input>
        </b-form-group>


     </b-col>
    </b-row>




    <b-row>
      <b-col class="heelloo">

        <b-form-group label="Additional" style="text-align:left;  margin-left:150px;">
            
             <b-form-checkbox
              v-model="house.balcony"
              value="balcony"
              
              >Balcony</b-form-checkbox>

              <b-form-checkbox
              v-model="house.parking"
              value="parking"
              
              >Parking</b-form-checkbox
            >

            <b-form-checkbox
              v-model="house.elevator"
              value="elevator"
             
              >Elevator</b-form-checkbox
            >

            <b-form-checkbox
              v-model="house.furnished"
              value="furnished"
              
              >Furnished</b-form-checkbox
            >
            
             </b-form-group>


             
        <!-- <div class="row" style="margin-left: 250px;"> -->
        <!-- <div > <br>
          <model-select  style="width:300px; text-align:left;  margin-left:150px;"
            v-model="city"
            :options="cityVariants"
            placeholder="Select City"
            v-on:click="onChange()"
          ></model-select> <br>
        </div>
        <div >
          <model-list-select class="regionz" style="width:300px; text-align:left; margin-left:150px;"
            v-if="city == null && !regionVariants[city]"
            :list="[ ]"
            :isDisabled="true"
            placeholder="Select city first"
          ></model-list-select>
          <model-select class="regionz"
            v-else-if="regionVariants[city]"
            v-model="region"
            :options="regionVariants[city].text"
            placeholder="Select region"
          ></model-select>
        </div> -->

         <b-form-group
            label="City"
            name="city"
            v-model="house.city"
            label-for="cityy"
            style="width:300px; text-align:left;  margin-left:150px;"
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

          <b-form-group
            label="Location"
            name="location"
            label-for="locationn"
            style="width:300px; text-align:left;  margin-left:150px;"
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
      
        <!-- </div> -->

             <!-- <b-form-group
            label="City"
            name="city"
            v-model="house.city"
            label-for="cityy"
            style="width:300px; text-align:left;  margin-left:150px;"
          >
            <b-form-select
            id="city"
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
          
          </b-form-group>   <br />

          <b-form-group
            label="Location"
            name="location"
            label-for="locationn"
            style="width:300px; text-align:left;  margin-left:150px;"
          >
            <b-form-select
              v-if="filters.city!=null"
              id="location"
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
          </b-form-group>  <br /><br />


 -->






      </b-col>
      <b-col class="hiii">

        <b-form-group label="Telephone" style="text-align:left;">
          <b-form-input
            type="number"
            name="telephone"
            v-model="house.tel"
            style="font-weight:500; width:340px;"
            placeholder="Telephone number"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Description" style="text-align:left;">
        <b-form-textarea
    id="textarea-rows"
    type="text"
    placeholder="Describe your property"
    rows="5"
    style="display: block;
    width:340px;"

    v-model="house.desc"
  ></b-form-textarea> </b-form-group>


  <ImageUploader style="margin-left:-80px;" >        </ImageUploader>

        <button v-on:click="submitHouse" style="margin-bottom:15px; margin-left:100px; width:200px;" type="button" class="btn btn-danger btn-lg btn-block">Submit</button>




      </b-col>
     </b-row>
         
      

    </div>
  </div>
</template>

<script>

import ImageUploader from "./ImageUploader";
import Firebase from "firebase";
import { EventBus } from "../config/event-bus.js";
import { dbfs } from "../config/db";


var housesRef = dbfs.collection("houses");
export default {
  components: {
   ImageUploader
  },
  data: 
  
  function() {
    return {
      
      
      
      addrStr:'',
      addr1:'',
      addr2:'',
      img:'',
      flor: '',
      floor:'',
      tele:'',
      resetImg:false,
    
      
      house: {
        type: "",
        city: "",
        location: "",
        area: "",
        price: "",
        floor:"",
        tel:"",
        desc:"",
        balcony:"",
        parking: "",
        elevator:"",
        furnished:""
        
      },
      filters: {
         city:null,
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
    reset(){
      this.house.area='',
      this.house.price='',
      this.house.tel='',
      this.house.desc='',
      this.house.balcony='',
      this.house.parking='',
      this.house.elevator='',
      this.house.furnished='',
      this.addr1=
      this.addr2=
      this.floor='',
      document.getElementById('city').selectedIndex = 0;
      document.getElementById('location').selectedIndex = 0;
    },

    
    onChange: function() {
      this.filters.region = null;
     },

  
    //Firestore
    submitHouse: function() {
      
      this.house.city = this.filters.city;
      this.house.location = this.filters.location;
    

    // if (this.city != null && this.region != null) {
    //     this.$router.push({
    //       name: "Houses",
    //       query: {
    //         city: this.cityVariants[this.city].text,
    //         region: this.region
    //       }
    //     });
    //   } else if (this.city != null) {
    //     this.$router.push({
    //       name: "Houses",
    //       query: { city: this.cityVariants[this.city].text }
    //     });
    //   } else {
    //     this.$router.push({ name: "Houses" });
    //   }



      this.addr1 = this.addr1.trim(); 

        if (this.addr1 == "" || isNaN(this.addr2) ) {
          alert ("Please fill the address")   
        }else if (this.img =='') {
          alert ("Please upload an image") 
        }else {

          var city = this.filters.city;
          var location = this.filters.location;
          var area = this.house.area.toString();
          var price = this.house.price.toString();
          var type = this.house.type;
          var flor=this.house.floor;
          var tele=this.house.tel;
          
          
          if (
            city == null ||
            location == "" ||
            area == "" ||
            price == "" ||
            type == "" ||
            flor == "" ||
            tele =="" 


          ) {
             alert("Please fill all fields");
            return false;
          } else {

            if (this.house.rent == "rent" ) {
              this.house.rent=true;
            } else {
              this.house.rent=false;
            }

            if (this.house.balcony =="balcony") {
              this.house.balcony=true;
            } else {
              this.house.balcony=false;
            }

               if (this.house.parking =="parking") {
              this.house.parking=true;
            } else {
              this.house.parking=false;
            }

               if (this.house.elevator =="elevator") {
              this.house.elevator=true;
            } else {
              this.house.elevator=false;
            }

               if (this.house.furnished =="furnished") {
              this.house.furnished=true;
            } else {
              this.house.furnished=false;
            }

           




         
          this.house.city = this.cityVariants[this.filters.city].text;
          this.house.image=this.img;
          this.house.address=this.addr1 + ' ' + this.addr2.toString();
          //this.house.moreInfo=this.selected;
          this.house.floor=this.house.floor;
          console.log("desc:  "+this.house.desc)
       
          var house = housesRef.doc();
          house.set(this.house);
          house.update({
           created: Firebase.firestore.FieldValue.serverTimestamp()
          });
          document.getElementById("form").reset();
          alert("Property listed successfully");

          this.resetImg=true;
          EventBus.$emit("reset", this.resetImg);
          this.reset();
          }
        }
    }  }
};
</script>


<style scoped>


 .mt-lg-2{
  align-self: auto;
  } 
.container {
  /* max-width: 5000px; */
  /* position: auto;   */

  /* display: block;
  position: relative; */
  /* margin:auto; */
  /* top: 50px;
  width: 1000px; */
  background-color: whitesmoke;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  border-radius: 5px;

  /* overflow: auto; */
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
  padding: 20px;
  background-image: url(https://images.unsplash.com/photo-1510568192-5cd6e7a47edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=1350&q=80);
  background-size: cover;
  background-position: bottom center;
  height: 100%;
  width: 100%;
  color: black !important;
}

 @media screen and (max-width: 600px) {
 .heelloo {
     margin-left:-155px;
     
   }


 }

 

.regionz {
  width: 300px !important;
  margin-left:150px;
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



.btn-danger {
    color: #fff;
    background-color:#b34c37;
    border-color: #b34c37;
}


</style>
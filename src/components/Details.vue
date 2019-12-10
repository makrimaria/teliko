<template>
  <div class="outside">
    <b-container class="overlay">
      <div v-if="house[0] != null" class="row12" style="margin: 0px;">
        <b-row>
          <b-col>
            <div v-if="house[0].image != null && house[0].image2 != null && house[0].image3 != null" class="carousel" style="height:400px;margin-top:30px; overflow:hidden">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      :src="house[0].image"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      :src="house[0].image2"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      :src="house[0].image3"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
                         <div  v-else  style="height:400px;margin-top:30px; overflow:hidden">
               <img class="d-block w-100" :src="house[0].image">    </div>
          </b-col>
        </b-row>
<br>
        <b-row>
          <b-col>
            <div>
              <h3 class="houseTitle" style="color:black;">
                {{ house[0].type }} in {{ house[0].location }},
                {{ house[0].city }}
              </h3>
            </div>
            <div style="float:right">
              <button class="telephone" @click="toggle()">Telephone</button
              ><span class="number" v-show="isOpen" style="margin-left:10px;"
                > {{house[0].tel}} </span
              >
            </div>

            <br />
            <hr />

            <p class="descriptionTitle" style="font-weight:900; font-size:18px; margin-bottom:1px; float:left; font-family:Rajdhani, sans-serif">Description </p><br>

            <p class="description">
             {{house[0].desc}}
            </p> 
          </b-col> 
        </b-row>
<hr>
        <b-row>
          <b-col class="col1">
            <h3 class="dets">- Property features</h3>
            <div class="table">
              <!-- <b>City:</b> {{ house[0].city }} <br /> -->
              <b>Region:</b> {{ house[0].location }}, {{ house[0].city }} <br />
              <b>Size: </b> {{ house[0].area }} m<sup>2</sup> <br />
              <b>Price:</b> {{ house[0].price }} € <br />
            </div>

            <!-- <div style="border-left:1px solid rgba(0, 0, 0, 0.1); height:100%; float:center;"></div> -->
          </b-col>

          <b-col class="col2">
            <div class="table2">
              <b>Type:</b> {{ house[0].type }} <br />
              <div class="iff" v-if="house[0].rent == true">
                <b> Property for:</b> Rent
              </div>
              <div class="iff" v-else><b>Property for: </b> Sale</div>
              <b>Floor:</b> {{ house[0].floor }} <br />
            </div>
          </b-col>
        </b-row>
        <hr />

        <b-row>
          <b-col class="col1">
            <h3 class="dets">- More info</h3>
            <div class="table">

              <div v-if="house[0].moreInfo == true" > 
                 <ion-icon
                name="checkmark"
                style="margin-right:15px;"
              >
              </ion-icon
              ><b>Parking</b> <br />
              </div>
              <div v-else> 
                <ion-icon name="close" style="margin-right:15px;">

                </ion-icon>

                <b>Parking</b> <br />

              </div>
              

              <div v-if="house[0].balcony == true" > 
                 <ion-icon
                name="checkmark"
                style="margin-right:15px;"
              >
              </ion-icon
              ><b>Balcony</b> <br />
              </div>
              <div v-else> 
                <ion-icon name="close" style="margin-right:15px;">

                </ion-icon>

                <b>Balcony</b> <br />

              </div>
              
            </div>

            <!-- <div style="border-left:1px solid rgba(0, 0, 0, 0.1); height:100%; float:center;"></div> -->
          </b-col>
          <b-col class="col2"> 
            <div class="table2">

               <div v-if="house[0].elevator == true" > 
                 <ion-icon
                name="checkmark"
                style="margin-right:15px;"
              >
              </ion-icon
              ><b>Elevator</b> <br />
              </div>
              <div v-else> 
                <ion-icon name="close" style="margin-right:15px;">

                </ion-icon>

                <b>Elevator</b> <br />

              </div>

               <div v-if="house[0].furnished == true" > 
                 <ion-icon
                name="checkmark"
                style="margin-right:15px;"
              >
              </ion-icon
              ><b>Furnished</b> <br />
              </div>
              <div v-else> 
                <ion-icon name="close" style="margin-right:15px;">

                </ion-icon>

                <b>Furnished</b> <br />

              </div>

              
             
              
            </div>
          </b-col>
        </b-row>


  <Maps></Maps>
  <br>
        <!-- <b-img class="card" :src="house[0].image" style="width:inherit; height:auto;"></b-img> -->
        <!-- <div class="carousel"> 
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" :src="house[0].image" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" :src="house[0].image2" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" :src="house[0].image3" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            </div> -->
        <!-- <h3 style="text-align:center; font-weight:900;">Details</h3>
            <hr />
            <b-list-group>
              <b-list-group-item>City: {{house[0].city}}</b-list-group-item>
              <b-list-group-item>Region: {{house[0].location}}</b-list-group-item>
              <b-list-group-item>
                Size: {{house[0].area}}
                <var>
                  m
                  <sup>2</sup>
                </var>
              </b-list-group-item>
              <b-list-group-item>Price: {{house[0].price}} €</b-list-group-item>
              <b-list-group-item>Type: {{house[0].type}}</b-list-group-item>
              <b-list-group-item v-if="house[0].rent == true">Property for: Rent</b-list-group-item>
              <b-list-group-item v-else>Property for: Sale</b-list-group-item>
            </b-list-group> -->
      </div>
    </b-container>
  </div>
</template>

<script>
import Maps from "./Maps";
import { dbfs } from "../config/db";
export default {
  name: "Details",
  components: {Maps},
  data() {
    return {
      house: [],
      isOpen: false
    };
  },

  mounted() {
    
    dbfs
      .collection("houses")
      .doc(this.$route.query.id)
      .get()
      .then(doc => {
        if (doc && doc.exists) {
          this.house.push(doc.data());
        }
      });
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;


    }
  }
};
</script>

<style scoped>
/*.card {
  max-width: -webkit-fill-available;
}*/

.overlay {
  background-color: white;
  width: 50%;
  height: 50%;
  z-index: 1000;
}

.houseTitle {
  font-family: "Rajdhani", sans-serif;
  float: left;
}

.telephone {
  margin: 0px;
  padding: 10px 30px;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;
  line-height: 1.3;
  box-shadow: 1px 1px 7px;
  color: #202129;
  background-color: whitesmoke;
  font-size: 20px;
  font-family: "Rajdhani", sans-serif;
}

.telephone :hover {
  transition: all 150ms linear;

  opacity: 0.85;
}

.telephone :active {
  transition: all 150ms linear;
  opacity: 0.75;
}

.number {
  font-size: 20px;
  font-weight: 800;
}

.description {
  font-size: 20px;
  text-align: left;
  float:left;
}

.dets {
  /* margin-top: 60px; */
  float: left;
  font-family: "Rajdhani", sans-serif;
  text-align: left;
}

.table {
  margin-top: 50px;
  text-align: left;
  width: inherit;
  height: inherit;
  line-height: 2.6;
  font-size: 20px;
  font-family: "Rajdhani", sans-serif;
}

.table2 {
  margin-top: 50px;
  text-align: left;
  width: inherit;
  height: inherit;
  line-height: 2.6;
  font-size: 20px;
  font-family: "Rajdhani", sans-serif;
}



/*
.table2 {
  text-align: left;
  width: inherit;
  height: inherit;
}  */
/* Clear floats after the columns */
/* .row:after {
  content: "";
  display: table;
  clear: both;
} */
</style>

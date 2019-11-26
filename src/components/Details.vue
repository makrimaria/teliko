<template>
  <div class="outside">
    <b-container class="overlay">
      <div v-if="house[0] != null" class="row12" style="margin: 0px;">
        <b-row>
          <b-col>
            <div class="carousel" style="height:400px; overflow:hidden">
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
          </b-col>
        </b-row>
        <hr />

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
                >2310 767 948</span
              >
            </div>

            <br />
            <hr />
            <div>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                qui praesentium eligendi esse, laborum magni porro maiores
                labore, libero exercitationem facilis laudantium officiis
                voluptates nostrum molestias itaque temporibus, beatae
                provident!
              </p>
              <hr />
              <h3 class="dets">Details</h3>

              <div class="table">
              <b>City:</b> {{ house[0].city }} <br>
               <b>Region:</b>  {{ house[0].location }} <br>
               <b>Size: </b> {{ house[0].area }} m<sup>2</sup> <br>
                <b>Price:</b> {{ house[0].price }} € <br>
                <b>Type:</b> {{ house[0].type }} <br>
                <div class="iff" v-if="house[0].rent == true"> 
                  <b> Property for:</b> Rent
                </div>
                <div class="iff" v-else>
                  <b>Property for: </b> Sale</div>
              </div>
            </div>
          </b-col>
        </b-row>

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
import { dbfs } from "../config/db";
export default {
  name: "Details",
  components: {},
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
}

.dets {
  margin-top: 60px;
  margin-left: -1200px !important;
  font-family: "Rajdhani", sans-serif;
}

.table {
  text-align: left;
  width: inherit;
  height: inherit;
  line-height: 2.6;
  text-align: center;
  font-size: 20px;
  
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

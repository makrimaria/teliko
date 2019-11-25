<template>
  <div class="overlay">
    <div v-if="house[0]!= null" class="row" style="margin: 0px;">
      <!-- <div class="column"> -->
      <!-- <div class="container"> -->
      <!-- <div class="row"> -->
      <div class="column">
        <div class="container">

          

          <!-- <b-list-group-item class="titleof">
            {{house.data.rent}}, {{house.data.type}} {{house.data.area}}, {{house.data.location}}, {{house.data.city}} </b-list-group-item> -->
    <!-- carousel -->
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="width:100%; height:600px; ">
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
          <!--eikones-->
          <div class="table2">
            <!-- <b-img class="card" :src="house[0].image" style="width:inherit; height:auto;"></b-img> -->
            <br />
            <h3 style="text-align:center; font-weight:900;">Details</h3>
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
            </b-list-group>
          </div>
        </div>
      </div>
      <div class="column">
        <!-- <b-img class="card" :src="house[0].image2" style="width:inherit; height:auto;"></b-img>
        <b-img class="card" :src="house[0].image3" style="width:inherit; height:auto;"></b-img> -->
        <br />
        <br />
        <h4 style="font-weight:900; text-align:left;">Additional info</h4>
        <hr />

        <div class="table">
          <b-list-group>
            <b-list-group-item>Furnished: Yes</b-list-group-item>
            <b-list-group-item>Secure door: Yes</b-list-group-item>
            <b-list-group-item>Elevator: No</b-list-group-item>
            <b-list-group-item>Fireplace: No</b-list-group-item>
            <b-list-group-item>Parking: Yes</b-list-group-item>
            <b-list-group-item>Balcony: Yes</b-list-group-item>
          </b-list-group>

          <!-- <b-list-group>
          <b-img class="card" :src="house.image"></b-img>
          <b-list-group-item>City: {{ house.data.city }}</b-list-group-item>
          <b-list-group-item>Region: {{ house.data.region }}</b-list-group-item>
          <b-list-group-item>Size: {{ house.data.area }}</b-list-group-item>
          <b-list-group-item>Price: {{ house.data.price }} $</b-list-group-item>
          <b-list-group-item>Type: {{ house.data.type }}</b-list-group-item>
          <b-list-group-item>Heating Type:  {{  house.data.heatingType}} </b-list-group-item>
                    <b-list-group-item>Floor:  </b-list-group-item>
          </b-list-group>-->
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import { dbfs } from "../config/db";
export default {
  name: "Details",
  components: {},
  data() {
    return {
      house: []
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
  }
};
</script>

<style scoped>
/*.card {
  max-width: -webkit-fill-available;
}*/
.overlay {
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
  left: 0px;
  z-index: 1000;
}
.table {
  text-align: left;
  width: inherit;
  height: inherit;
}
.column {
  float: left;
  width: 50%;
}
.table2 {
  text-align: left;
  width: inherit;
  height: inherit;
}


/* Clear floats after the columns */
/* .row:after {
  content: "";
  display: table;
  clear: both;
} */
</style>

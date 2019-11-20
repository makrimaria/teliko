
<template>
  <div class="overlay">

<div class="row" >
  <div class="column">

     <div class="container">

       <!--eikones-->

      

      <div class="table2">
      <b-img class="card" :src="house[0].image" style="width:inherit; height:auto;"></b-img>
             <br><br><h4 style="font-weight:900; text-align:center;">Additional info</h4><hr>


       <b-list-group>
          
          <b-list-group-item>Furnished:  Yes</b-list-group-item>
          <b-list-group-item>Secure door: Yes</b-list-group-item>
          <b-list-group-item>Elevator: No</b-list-group-item>
          <b-list-group-item>Fireplace: No</b-list-group-item>
          <b-list-group-item>Parking: Yes</b-list-group-item>
          <b-list-group-item>Balcony:  Yes</b-list-group-item>
        </b-list-group>
              
      </div>

       
    
    </div>


  </div>
  <div class="column">

    <br><h3 style="text-align:left; font-weight:900;">Details</h3><hr>

      <div class="table">

         <b-list-group>
    <b-list-group-item>{{house[0].city}}</b-list-group-item>
      <b-list-group-item>{{house[0].region}}</b-list-group-item>
      <b-list-group-item>{{house[0].area}}</b-list-group-item>
      <b-list-group-item>{{house[0].price}}</b-list-group-item>
      <b-list-group-item>{{house[0].type}}</b-list-group-item>
      <b-list-group-item v-if="house[0].rent == true">Rent</b-list-group-item>
      <b-list-group-item v-else>Sale</b-list-group-item>
    </b-list-group>
    <Dummy></Dummy>
        <!-- <b-list-group>
          <b-img class="card" :src="house.image"></b-img>
          <b-list-group-item>City: {{ house.data.city }}</b-list-group-item>
          <b-list-group-item>Region: {{ house.data.region }}</b-list-group-item>
          <b-list-group-item>Size: {{ house.data.area }}</b-list-group-item>
          <b-list-group-item>Price: {{ house.data.price }} $</b-list-group-item>
          <b-list-group-item>Type: {{ house.data.type }}</b-list-group-item>
          <b-list-group-item>Heating Type:  {{  house.data.heatingType}} </b-list-group-item>
                    <b-list-group-item>Floor:  </b-list-group-item>

        </b-list-group> -->
      </div>


  </div>
</div>



   
  </div>
</template>










<script>
import Dummy from "./Dummy";
import { dbfs } from "../config/db";

export default {
  name: "Details",
  components: {
    Dummy
  },
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
    console.log(this.house);
  }
};
</script>

<style scoped>
/* .card {
  max-width: -webkit-fill-available;  
} */
.overlay{
    background-color:whitesmoke;
    /* position:fixed; */
    width:100%;
    height:100%;
    left:0px;
    z-index:1000;
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
<template>
  <div>


 <b-card no-body class="overflow:hidden" style="max-width:540px;">
    <b-row no-gutters>
      <b-col mb="6"  v-for="house in houses" v-bind:key="house.id">
          <router-link
          :to="{ name: 'Details', query: { id: house.id } }"
          target="_blank"
          class="houze"
          exact
        >
        <b-img
            
            v-if="house.data.image"
            class="card"
            :src="house.data.image"
          ></b-img>
          <b-img
            
            v-else
            class="card"
            src="../house-placeholder.jpg"
          ></b-img>
          </router-link>
      </b-col>
<b-col class="mb-6"  v-for="house in houses" v-bind:key="house.id">
          
            {{ house.data.type }} in {{ house.data.city }}
            {{ house.data.location }}, {{ house.data.area }} m<sup>2</sup>,
            {{ house.data.price }}€
            <div v-if="house.data.rent == true">for rent</div>
            <div v-else>for sale</div>
      </b-col>
      
    </b-row>
  </b-card> 







    <!--h2>
      <slot></slot>
    </h2>
    <b-row>
      <b-col
        class="mb-3"
        cols="12"
        sm="6"
        xl="4"
        v-for="house in houses"
        v-bind:key="house.id"
      >
 
        <router-link
          :to="{ name: 'Details', query: { id: house.id } }"
          target="_blank"
          class="houze"
          exact
        >
          <br /><b-img
            style="height:200px; width:100%; object-fit:cover;"
            fluid-grow
            v-if="house.data.image"
            class="card"
            :src="house.data.image"
          ></b-img>
          <b-img
            style="height:200px; width;100%; object-fit:cover;"
            fluid-grow
            v-else
            class="card"
            src="../house-placeholder.jpg"
          ></b-img>

         
          <b-list-group-item class="black-link">
            {{ house.data.type }} in {{ house.data.city }}
            {{ house.data.location }}, {{ house.data.area }} m<sup>2</sup>,
            {{ house.data.price }}€
            <div v-if="house.data.rent == true">for rent</div>
            <div v-else>for sale</div>
          </b-list-group-item>
        </router-link>
      </b-col>

     
           


    </b-row-->
  </div>
  <!-- </b-container> -->
</template>

<script>
//import {dbfs} from '../config/db'

export default {
  props: {
    houses: Array
  },
  // data: () =>({
  //   houses: []
  // }),
  mounted() {
    // //Real Time Database
    //  housesRef.once('value', (houses) => {
    //    houses.forEach((house) => {
    //      this.houses.push({
    //        ref: house.ref,
    //        city: house.child('city').val(),
    //        area: house.child('area').val(),
    //        price: house.child('price').val(),
    //        location: house.child('location').val(),
    //        image: house.child('image').val()
    //      })
    //    })
    //  })
    //Firestore
    // dbfs.collection("houses").where("city", "==", "Thessaloniki").get().then(querySnapshot => {
    //   querySnapshot.docs.forEach((doc) => {
    //       this.a.push(doc.data())
    //   });
    // });
  }
};
</script>

<style scoped>
p .house {
  color: black;
  font-size: 12px !important;
  font-family: "Rajdhani", sans-serif;
  display: block;
  white-space: normal;
}

h2 {
  color: black;
  display: none;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: "Rajdhani", sans-serif;
}

.houze {
  color: black;
}

.card {
  max-width: -webkit-fill-available;
  color: black;
}

.black-link {
  color: black;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  font-size: 13px;
}


</style>

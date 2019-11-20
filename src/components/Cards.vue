<template>
  <div>
    <!-- <b-container style="margin-top:10px;"> -->
    <h2>
      <slot></slot>
    </h2>
    <b-row>
      <b-col class="mb-4" cols="12" sm="6" xl="3" v-for="house in houses" v-bind:key="house.id">
        <!-- <b-card title v-bind:img-src="house.image" img-alt="Image" img-top> -->
        <router-link :to="{name: 'Details', query: {id: house.id}}" class="houze" exact>
          <b-img class="card" :src="house.data.image"></b-img>
          <!-- <p>{{house.id}}</p> -->
          <b-list-group-item class="black-link">
             {{house.data.city}} {{house.data.location}}, {{house.data.area}} <var>m<sup>2</sup></var>, {{house.data.price}}€
          </b-list-group-item>
        </router-link>
      </b-col>
    </b-row>
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


<style scoped >
p .house {
  color: black;
  font-size: 12px !important;
  font-family: "Rajdhani", sans-serif;
  display: block;
  white-space: normal;
}

h2 {
  color: black;
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

.black-link, :hover{
  color: black;
}
</style>




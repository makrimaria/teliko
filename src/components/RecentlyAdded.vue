<template>
  <b-container style="margin-top:10px;">
    <h2 style="font-size:35px;">Added Recently</h2>
    <br>
    <b-row>
      <b-col class="mb-4" sm="3" v-for="house in a" v-bind:key="house">
        <b-card title v-bind:img-src="house.image" img-alt="Image" img-top>
          <b-card-text>
            <b-list-group style="font-size:16px;">
              <b-list-group-item style="font-size:20px;"> {{house.city}}</b-list-group-item>
              <b-list-group-item>Area: {{house.location}}</b-list-group-item>
              <b-list-group-item>Size: {{house.area}} m2 </b-list-group-item>
              <b-list-group-item>Price: {{house.price}} €</b-list-group-item>
            </b-list-group>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>



<script>
import {dbfs} from '../config/db'

export default {
  data: () =>({
    houses: [],
    a: []

  }),
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
    dbfs.collection("houses").orderBy("created", "desc").get().then(querySnapshot => {
      querySnapshot.docs.forEach((doc) => {
          this.a.push(doc.data())
      });
    });
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
   color: black ;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
}
</style>




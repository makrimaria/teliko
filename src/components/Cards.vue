<template>
  <b-container style="margin-top:10px;">
    <br />

    <div class="text-center content icon-boxes">
      <div class="icon-boxes__box1" style="float:left; margin-left:auto">
        <img src="https://d2dlxvmcs24r4u.cloudfront.net/modules/spiti24/images/box-2.png" alt />
        <h4 style="margin-top:5px; font-size:18px;">Find the perfect home</h4>
        <p
          class="house"
          style="width: 100%; max-width: 400px; font-size:16px;"
        >Select advanced search filters according to the criteria you want to show results that fit your needs.</p>
      </div>
    </div>
    <div class="icon-boxes__box2" style="float:right; margin-left:10px;">
      <img src="https://d2dlxvmcs24r4u.cloudfront.net/modules/spiti24/images/box-1.png" alt />
      <h4 style="margin-top:5px; font-size:18px;">For each device</h4>
      <p
        class="house"
        style="width: 100%; max-width: 400px; font-size:16px;"
      >Explore Prodigy RealEstate ads from any smart device, thanks to its mobile-friendly design that adapts to any screen size.</p>
    </div>
    <div class="icon-boxes__box3">
      <img src="https://d2dlxvmcs24r4u.cloudfront.net/modules/spiti24/images/box-3.png" alt />
      <h4 style="margin-top:5px; font-size:18px;">Properties on the map</h4>
      <p
        class="house"
        style="font-size:16px;"
      >View the results of each search on the map and discover the available properties in each area based on their exact location.</p>
    </div>
    <br />
    <hr />

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
//import {dbrtd} from '../config/db'
import {dbfs} from '../config/db'
//var housesRef = dbrtd.ref('houses')

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
          this.a.push(doc.data()
            //ref: doc.ref,
            // city: doc.data(),
            // area: doc.getString("area"),
            // price: doc.getString("price"),
            // location: doc.getString("location"),
            // image: doc.getString("image")
          )
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data())
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




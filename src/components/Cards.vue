<template>
  <div>
    <!-- <b-container style="margin-top:10px;"> -->
    <h2>
      <slot></slot>
    </h2>
    <b-row>
      <b-col
        class="mb-3"
        cols="12"
        sm="6"
        xl="6"
        v-for="house in pageOfItems"
        v-bind:key="house.id"
      >
        <!-- <b-card title v-bind:img-src="house.image" img-alt="Image" img-top> -->
        <router-link
          :to="{ name: 'Details', query: { id: house.id } }"
          target="_blank"
          class="houze"
          exact
        >
          <br />
          <b-img
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

          <!-- <p>{{house.id}}</p> -->
          <!-- <b-list-group-item class="black-link">
            {{ house.data.type }} in {{ house.data.city }}
            {{ house.data.location }}, {{ house.data.area }} m
            <sup>2</sup>
            ,
            {{ house.data.price }}€
            <div style="display: inline;" v-if="house.data.rent == true">for rent</div>
            <div style="display: inline;" v-else>for sale</div>
          </b-list-group-item> -->

          <b-list-group-item class="black-link">
            <b-row>
              <b-col>
                <div id="price">
                  {{ house.data.price }}€
                  <div
                    id="month"
                    v-if="house.data.rent == true"
                    style="display:inline;"
                  >
                    /month
                  </div>
                </div>
                <div
                  id="for"
                  style="display:inline; font-size:16px; float:right;"
                >
                  {{ house.data.city }}, {{ house.data.location }}
                </div>
              </b-col>
            </b-row>
            <b-row id="lefty" style="float:right; display:inline;">
              {{ house.data.type }}

              <div
                class="vl"
                style="display:inline; border-left:1px solid #444; height:inherit; margin-right:3px;"
              ></div>

              <div v-if="house.data.rent == true" style="display:inline; ">for rent</div>
              <div v-else style="display:inline;">for sale</div>

              <div
                class="vl"
                style="display:inline; border-left:1px solid #444; height:inherit; margin-left:3px;"
              ></div>
              {{ house.data.area }} m<sup>2</sup>
              <!-- <div v-if="house.data.rent == true" style="display:inline;">for rent</div>
            <div  v-else style="display:inline;"> for sale</div> -->
            </b-row>
          </b-list-group-item>
        </router-link>
      </b-col>
    </b-row>
  </div>
  <!-- </b-container> -->
</template>

<script>
//import JwPagination from "jw-vue-pagination";

export default {
  props: {
    houses: Array,
    pageOfItems: Array
  },
  components: {
    //JwPagination
  },
  methods: {},
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
  /* display: none; */
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: "Rajdhani", sans-serif;
}

.houze {
  color: black;
  display: flex;
  flex-direction: column;
}

.card {
  max-width: -webkit-fill-available;
  color: black;
}

.black-link {
  color: black;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  font-size: 16px;
  flex: 1 0 auto;
}

.mb-3 {
  display: flex;
}

#price {
  font-size: 20px;
  color: #328ca8;

  float: left;
}
#month {
  font-size: 16px;
  color: #3279a8;
}

</style>

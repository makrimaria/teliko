<template>
<b-container fluid>
  <!-- <div id="background"> -->
    <b-row>
    <b-col md="3" lg="2">
    <!-- <div class="container4" style="width:300px; height:auto; float:left;"> -->
      <br><p>Filters</p>
      <b-form id="form" v-on:submit.prevent="submitFilters" style="text-align:left;">
        <b-form-group label="City" id="city" label-for="table-style-variant">
          <b-form-select
            v-model="filters.city"
            :options="cityVariants"
            v-on:change="onChange()"
            id="table-style-variant"
          >
            <template v-slot:first>
              <option :value="null" disabled>Select city</option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-form-group label="Region" id="region" label-for="table-style-variant">
          <b-form-select
            v-if="filters.city!=null"
            v-model="filters.region"
            :options="regionVariants[filters.city].text"
            id="table-style-variant"
          >
            <template v-slot:first>
              <option :value="null" disabled>Select area</option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-form-group label="Property for">
          <b-form-radio-group v-model="headVariant" class="mt-lg-2">
            <b-form-radio value="light" inline>Rent</b-form-radio>
            <b-form-radio value="dark" inline>Sale</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group label="Type" label-for="table-style-variant">
          <b-form-select v-model="tableVariant" :options="typeVariants" id="table-style-variant">
            <template v-slot:first>
              <option value>Type</option>
            </template>
          </b-form-select>
        </b-form-group>

        <hr />

        <b-form-group label="Heating Type">
          <b-form-radio-group v-model="headVariant" class="mt-lg-2">
            <b-form-radio value="any" inline>Any</b-form-radio>

            <b-form-radio value="autonomous" inline>Autonomous heating System</b-form-radio>
            <br />
            <b-form-radio value="central" inline>Central Heating</b-form-radio>
            <b-form-radio :value="null" inline>None</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <hr />

        <b-form-group label="with price(€) from:" label-for="price-style-variant">
          <b-form-select v-model="tableVariant" :options="priceMin" id="price-style-variant">
            <template v-slot:first>
              <option value>min</option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-form-group label="to:" label-for="price-style-variant">
          <b-form-select v-model="tableVariant" :options="priceMax" id="price-style-variant">
            <template v-slot:first>
              <option value>max</option>
            </template>
          </b-form-select>
        </b-form-group>
        <hr />
        <b-form-group label="Floor" label-for="table-style-variant">
          <b-form-select v-model="tableVariant" :options="floorVariants" id="table-style-variant">
            <template v-slot:first>
              <option value>Select floor</option>
            </template>
          </b-form-select>
        </b-form-group>

        <hr />

        <b-table
          :striped="striped"
          :bordered="bordered"
          :borderless="borderless"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :foot-clone="footClone"
          :no-border-collapse="noCollapse"
          :items="items"
          :fields="fields"
          :head-variant="headVariant"
          :table-variant="tableVariant"
        ></b-table>

        <b-form-group label="Key Features">
          <b-form-checkbox v-model="furnished" inline>Furnished</b-form-checkbox>
          <b-form-checkbox v-model="storage" inline>Storage</b-form-checkbox>
          <b-form-checkbox v-model="secureDoor" inline>Secure Door</b-form-checkbox>
          <br />
          <b-form-checkbox v-model="alarm" inline>Alarm</b-form-checkbox>

          <b-form-checkbox v-model="elevator" inline>Elevator</b-form-checkbox>
          <b-form-checkbox v-model="garden" inline>Garden</b-form-checkbox>
          <br />
          <b-form-checkbox v-model="petsWelcome" inline>Pets welcome</b-form-checkbox>

          <b-form-checkbox v-model="parking" inline>Parking</b-form-checkbox>
          <b-form-checkbox v-model="balcony" inline>Balcony</b-form-checkbox>
          <br />
          <b-form-checkbox v-model="fireplace" inline>Fireplace</b-form-checkbox>
          <b-form-checkbox v-model="view" inline>View</b-form-checkbox>
          <b-form-checkbox v-model="swimmingPool" inline>Swimming pool</b-form-checkbox>
        </b-form-group>

        <b-button type="submit" v-b-modal="'my-modal'" variant="outline-danger">Apply</b-button>
      </b-form>
      </b-col>
    <!-- </div> -->
    <br />
    <div style="margin-left:auto; border-left:1px solid grey;height:inherit;"></div>
    <!-- <div class="containerHouses" style="margin-left:300px; width:auto; height:100%;"> -->
      <b-col md="8" lg="8" style="margin: auto;">
      <Cards :houses="houses">Houses</Cards>
      </b-col>
      </b-row>
    <!-- </div> -->
  <!-- </div> -->
</b-container>
</template>

<script>
import { dbfs } from "../config/db";
import Cards from "./Cards.vue";

export default {
  components: {
    Cards
  },
  data() {
    return {
      houses: [],
      query: "",
      filters: {
        city: null,
        region: null
      },
      cityVariants: [],
      // regionVariants: [
      //   "Pefka",
      //   "Neapoli",
      //   "Sykies",
      //   "Agios Pavlos",
      //   "Stavroupoli",
      //   "Pylaia",
      //   "Thermi",
      //   "Kalamaria"
      // ],
      regionVariants: [],
      typeVariants: [
        "Apartment",
        "Studio",
        "Maisonette",
        "Villa",
        "Loft",
        "Apartment Complex",
        "Bungalow"
      ],
      floorVariants: [
        "Basement",
        "Semi Basement",
        "Ground floor",
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8+"
      ],
      priceMin: [
        "150",
        "200",
        "300",
        "500",
        "700",
        "1.000",
        "1.600",
        "2.000",
        "2.500",
        "3.000+"
      ],
      priceMax: [
        "150",
        "200",
        "300",
        "500",
        "700",
        "1.000",
        "1.600",
        "2.000",
        "2.500",
        "3.000+"
      ],

      furnished: false,
      storage: false,
      secureDoor: false,
      alarm: false,
      elevator: false,
      garden: false,
      petsWelcome: false,
      parking: false,
      balcony: false,
      fireplace: null,
      view: "",
      swimmingPool: false
    };
  },
  mounted() {
    //Firestore
    dbfs
      .collection("houses")
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.houses.push(doc.data());
        });
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
    onChange: function() {
      this.filters.region = null;
    },
    submitFilters: function() {
      this.houses = [];
      this.query = 'dbfs.collection("houses")';
      var query = dbfs.collection("houses");

      if (this.filters.city != null) {
        query = query.where(
          "city",
          "==",
          this.cityVariants[this.filters.city].text
        );
      }

      if (this.filters.region != "Anywhere" && this.filters.region != null) {
        query = query.where("location", "==", this.filters.region);
      }

      query.get().then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.houses.push(doc.data());
        });
      });
    }
  }
};
</script>




<style scoped >
#background {
  background-image: url(https://images.unsplash.com/photo-1572240979568-6ddb008a1128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80);
  background-size: cover;
  background-position: bottom center;
  height:max-content;
  width: max-content;
  color: black !important;
}

#table-style-variant {
  width: 200px;
}

#price-style-variant {
  width: 100px;
}

.container4 {
  display: block;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  color: black !important;
  position: absolute;
  /* margin-left: 0px; */
  /* top: 0px; */

  /* width: 287px; */

  border: 1px solid grey;
  background-color: whitesmoke;
  opacity: 0.85;
  padding: 50px;
}

p {
  color: black;
  margin-top: -20px;
}

#rentalsale {
  width: 100px;
}

.container3 {
  display: block;
  width: fit-content;

  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  color: black !important;

  border: 1px solid grey;
  background-color: whitesmoke;
  /* opacity: 0.85;
  padding: 50px; */
}

.containerHouses {
  display: block;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  color: black !important;
  position: relative;
  margin-left: 0px;
  top: 0px;

  /* width: 287px; */
  width: max-content;

  border: 1px solid grey;
  background-color: whitesmoke;
  opacity: 0.85;
  padding: 50px;
}

.container2 {
  display: block;
  font-family: "Rajdhani", sans-serif;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;

  color: black !important;
  position: absolute;
  /* margin-left: 0px; */
  /* top: 0px; */

  /* width: 287px; */

  border: 1px solid grey;
  background-color: whitesmoke;
  opacity: 0.85;
  padding: 50px;
}
</style>
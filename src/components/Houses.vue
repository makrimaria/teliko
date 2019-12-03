<template>
  <b-container fluid>
    <!-- <div id="background"> -->
    <b-row>
      <b-col md="3" xl="2">
        <!-- <div class="container4" style="width:300px; height:auto; float:left;"> -->
        <br />
        <p>Filters</p>
        <b-form id="form" ref="form" v-on:submit.prevent="submitFilters" style="text-align:left;">
          <!-- <b-form-group label="City" id="city" label-for="table-style-variant">
            <b-form-select
              v-model="filters.city"
              :options="cityVariants"
              v-on:change="onChange()"
              id="table-style-variant"
            >
              <template v-slot:first>
                <option :value="null" disabled>Select City</option>
              </template>
            </b-form-select>
          </b-form-group>-->
          <!-- Dropdown with search -->
          <label id="type__BV_label_" class="col-form-label pt-0">City</label>
          <div id="watcher" class="cityDropDown">
          <model-select
            v-model="filters.city"
            :options="cityVariants"
            placeholder="Select City"
            v-on:click="onChange()"
          ></model-select>
          </div >
          <br />
          <label id="type__BV_label_" class="col-form-label pt-0">Region</label>
          <model-list-select
            v-if="filters.city == null && !regionVariants[filters.city]"
            :list='[ ]'
            :isDisabled="true"
            placeholder="Select City first"
          ></model-list-select>
          <model-select
            v-else-if="regionVariants[filters.city]"
            v-model="filters.region"
            :options="regionVariants[filters.city].text"
            
            placeholder="Select Region"
          ></model-select>

          <br />

          <!-- -->
          <!-- <b-form-group label="Region" id="region" label-for="table-style-variant">
            <b-form-select
              v-if="filters.city!=null && regionVariants[filters.city]"
              v-model="filters.region"
              :options="regionVariants[filters.city].text"
              id="table-style-variant"
            >
              <template v-slot:first>
                <option :value="null" default="null" disabled>Select area</option>
              </template>
            </b-form-select>
          </b-form-group>-->
          <b-form-group label="Type" id="type">
            <b-form-select v-model="filters.type" :options="typeVariants" id="table-style-variant">
              <template v-slot:first>
                <option :value="null" disabled>Select type</option>
              </template>
            </b-form-select>
          </b-form-group>
          <b-form-group label="Property for">
            <b-form-radio-group class="mt-lg-2">
              <b-form-radio value="Rent" v-model="filters.rent" inline>Rent</b-form-radio>
              <b-form-radio value="Sale" v-model="filters.rent" inline>Sale</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <!-- <vue-slider v-model="price" :min="price.min" :max="price.max" :interval="1" :tooltip="'always'"></vue-slider> -->
          <b-form-group label="Price" id="price">
            <b-form-input
              v-model="filters.priceMin"
              type="number"
              placeholder="From"
              id="table-style-variant"
            ></b-form-input>
            <br />
            <b-form-input
              v-model="filters.priceMax"
              type="number"
              placeholder="To"
              id="table-style-variant"
            ></b-form-input>
          </b-form-group>

          <!-- 
        

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
          </b-form-group>-->
          <div style="text-align: center;">
            <b-button
              type="submit"
              v-b-modal="'my-modal'"
              variant="outline-danger"
              class="m-2"
            >Apply</b-button>
            <b-button
              @click="clearFilters()"
              v-b-modal="'my-modal'"
              variant="outline-danger"
              class="m-2"
            >Clear Filters</b-button>
          </div>
        </b-form>
      </b-col>
      <!-- </div> -->
      <br />
      <div style="border-left:1px solid grey;height:inherit;"></div>
      <!-- <div class="containerHouses" style="margin-left:300px; width:auto; height:100%;"> -->
      <b-col v-if="houses == '' && loaded == true" md="8" lg="8" style="margin: auto;">
        <h2>No properties match your criteria</h2>
      </b-col>
      <b-col v-else-if="loaded == true" md="8" lg="8" style="margin: auto;">
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

//Dropdown with search
import { ModelSelect } from "vue-search-select";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";

export default {
  components: {
    Cards,
    ModelSelect,
    ModelListSelect
  },
  data() {
    return {
      loaded: true,
      index: "",
      houses: [],
      filters: {
        city: null,
        region: null,
        type: null,
        rent: null,
        priceMin: null,
        priceMax: null
      },
      cityVariants: [],
      regionVariants: [],
      typeVariants: [],
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
  watch:{
    watcher: function() {
      console.log("hi")
      this.filters.region = null;
    }

  },
  created() {
    this.populateLists();
  },
  mounted() {
    this.getQueries();
  },
  methods: {
    clearFilters: function() {
      this.filters.city = null;
      this.filters.region = null;
      this.filters.type = null;
      this.filters.rent = null;
      this.filters.priceMin = null;
      this.filters.priceMax = null;
    },
    onChange: function() {
      console.log("hi")
      this.filters.region = "";
      this.filters.region = null;
    },
    submitFilters: function() {
      this.loaded = false;
      this.houses = [];
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
      if (this.filters.type != null) {
        query = query.where(
          "type",
          "==",
          this.typeVariants[this.filters.type].text
        );
      }

      if (this.filters.rent === "Rent") {
        if (this.filters.rent != null) {
          query = query.where("rent", "==", true);
        }
      } else if (this.filters.rent === "Sale") {
        if (this.filters.rent != null) {
          query = query.where("rent", "==", false);
        }
      }

      if (this.filters.priceMin != null) {
        query = query.where("price", ">=", parseInt(this.filters.priceMin));
      }

      if (this.filters.priceMax != null) {
        query = query.where("price", "<=", parseInt(this.filters.priceMax));
      }

      query
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            this.houses.push({ id: doc.id, data: doc.data() });
          });
        })
        .then(() => {
          this.loaded = true;
        });
    },
    populateLists: function() {
      //Get data from firestore
      /////////////////////////
      //Get cities in the form of [{value: , text:}, {}, {}], where value is a custom id (0,1,2...) and text the name of the city
      var i = 0;
      var self = this;
      dbfs
        .collection("cities")
        .orderBy("name", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            self.cityVariants.push({ value: i, text: doc.data().name });
            i++;
          });
        })
        //Check if URL query contains city or region and set the filters value accordingly. City name is matched to its id value through findIndex()
        .then(function() {
          if (self.$route.query.city != null) {
            var index = self.cityVariants.findIndex(
              o => o.text === self.$route.query.city
            );
            self.filters.city = self.cityVariants[index].value;
          }
          if (self.$route.query.region != null) {
            self.filters.region = self.$route.query.region;
          }
        });
      /*
      Get regions in the form of [{value: , text: {value: , text:}}, {}, {}].
      The inner value-text pair corresponds to a specific region in a city (e.g. Pylaia).
      The outer pair matches a city's id (value) with its regions.
      This value and the value from cityVariants point to the same city
      */
      var j = 0;
      var jj = 0;
      var temp = [];
      dbfs
        .collection("cities")
        .orderBy("name", "asc")

        .get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            while (doc.data().regions[jj]) {
              temp.push({
                value: doc.data().regions[jj],
                text: doc.data().regions[jj]
              });
              jj++;
            }
            this.regionVariants.push({ value: j, text: temp });
            j++;
            jj = 0;
            temp = [];
          });
        });
      //Same logic as in cities applies
      var z = 0;
      dbfs
        .collection("types")
        .orderBy("type", "asc")

        .get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            this.typeVariants.push({ value: z, text: doc.data().type });
            z++;
          });
        })
        .then(function() {
          if (self.$route.query.type != null) {
            var index = self.typeVariants.findIndex(
              o => o.text === self.$route.query.type
            );
            self.filters.type = self.typeVariants[index].value;
          }
        });
    },
    getQueries: function() {
      // dbfs
      //   .collection("houses")
      //   .orderBy("price", "desc")
      //   .limit(1)
      //   .get()
      //   .then(querySnapshot => {
      //     querySnapshot.docs.forEach(doc => {
      //       console.log(doc.data().price);
      //       this.price.max = doc.data().price;
      //     });
      //   });

      // dbfs
      //   .collection("houses")
      //   .orderBy("price", "asc")
      //   .limit(1)
      //   .get()
      //   .then(querySnapshot => {
      //     querySnapshot.docs.forEach(doc => {
      //       console.log(doc.data().price);
      //       this.price.min = doc.data().price;
      //     });
      //   });

      //Check URL for each filter, build the query and fetch houses matching the filters
      if (this.$route.query != null) {
        var query = dbfs.collection("houses");

        if (this.$route.query.city != null) {
          query = query.where("city", "==", this.$route.query.city);
        }

        if (
          this.$route.query.region != "Anywhere" &&
          this.$route.query.region != null
        ) {
          query = query.where("location", "==", this.$route.query.region);
        }

        if (this.$route.query.type != null) {
          query = query.where("type", "==", this.$route.query.type);
        }

        query.get().then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            this.houses.push({ id: doc.id, data: doc.data() });
          });
        });
      } else {
        //Fetch all houses
        dbfs
          .collection("houses")
          .get()
          .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
              this.houses.push({ id: doc.id, data: doc.data() });
            });
          });
      }
    }
  }
};
</script>


<style scoped >
.cityDropDown:focus-within {
  background-color: black;
}
#background {
  background-image: url(https://images.unsplash.com/photo-1572240979568-6ddb008a1128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80);
  background-size: cover;
  background-position: bottom center;
  height: max-content;
  width: max-content;
  color: black !important;
}

/* #table-style-variant {
  width: 200px;
}

#price-style-variant {
  width: 100px;
} */

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
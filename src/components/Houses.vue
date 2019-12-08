<template>
  <b-container class="mt-2">
    <b-row>
      <b-col md="3" xl="3">
        <br />
        <p>Filters</p>
        <b-form id="form" ref="form" v-on:submit.prevent="submitFilters" style="text-align:left;">
          <label id="type__BV_label_" class="col-form-label pt-0">City</label>
          <model-select
            v-model="filters.city"
            :options="cityVariants"
            placeholder="Select city"
            v-on:click="onChange()"
          ></model-select>
          <br />
          <label id="type__BV_label_" class="col-form-label pt-0">Region</label>
          <model-list-select
            v-if="filters.city == null && !regionVariants[filters.city]"
            :list="[ ]"
            :isDisabled="true"
            placeholder="Select city first"
          ></model-list-select>
          <model-select
            v-else-if="regionVariants[filters.city]"
            v-model="filters.region"
            :options="regionVariants[filters.city].text"
            placeholder="Select Region"
          ></model-select>
          <br />
          <label id="type__BV_label_" class="col-form-label pt-0">Type</label>
          <model-select v-model="filters.type" :options="typeVariants" placeholder="Select type"></model-select>
          <br />
          <b-form-group label="Property for">
            <b-form-radio-group class="mt-lg-2">
              <b-form-radio value="Rent" v-model="filters.rent" inline>Rent</b-form-radio>
              <b-form-radio value="Sale" v-model="filters.rent" inline>Sale</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group label="Price (€)" id="price">
            <b-form-input v-model="filters.priceMin" type="number" placeholder="From"></b-form-input>
            <br />
            <b-form-input v-model="filters.priceMax" type="number" placeholder="To"></b-form-input>
          </b-form-group>
          <b-form-group label="Area (m²)" id="area">
            <b-form-input v-model="filters.areaMin" type="number" placeholder="From"></b-form-input>
            <br />
            <b-form-input v-model="filters.areaMax" type="number" placeholder="To"></b-form-input>
          </b-form-group>

          <!-- 
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

      <br />
      <div style="border-left:1px solid grey;height:inherit;"></div>
      <b-col v-if="houses == '' && loaded == true" md="8" lg="8" style="margin: auto;">
        <h2>No properties match your criteria</h2>
      </b-col>
      <b-col v-else-if="loaded == true" md="8" lg="8" style="margin: auto;">
        <b-button squared variant="outline-secondary">
          <font-awesome-icon style="font-size: 1.1rem;" icon="list" />
        </b-button>
        <b-button squared variant="outline-secondary">
          <font-awesome-icon style="font-size: 1.1rem;" icon="th" />
        </b-button>
        <b-form-select v-model="perPage" :options="itemsPerPage" @change="onChange()"></b-form-select>
        <Cards :houses="houses" :pageOfItems="pageOfItems"></Cards>
        <jw-pagination
          :items="houses"
          :pageSize="perPage"
          @changePage="onChangePage"
          :labels="CustomLabels"
          :key="perPage"
        ></jw-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { dbfs } from "../config/db";
import Cards from "./Cards.vue";

//Dropdown with search
import { ModelSelect } from "vue-search-select";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";

import JwPagination from "jw-vue-pagination";

const CustomLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">"
};

export default {
  components: {
    Cards,
    ModelSelect,
    ModelListSelect,
    JwPagination
  },
  data() {
    return {
      itemsPerPage: [10, 20, 50],
      perPage: 10,
      CustomLabels,
      pageOfItems: [],
      loaded: true,
      index: "",
      houses: [],
      filters: {
        city: null,
        region: null,
        type: null,
        rent: null,
        priceMin: null,
        priceMax: null,
        areaMin: null,
        areaMax: null
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
  created() {
    this.populateLists();
  },
  mounted() {
    this.getQueries();
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    clearFilters: function() {
      this.filters.city = null;
      this.filters.region = null;
      this.filters.type = null;
      this.filters.rent = null;
      this.filters.priceMin = null;
      this.filters.priceMax = null;
      this.filters.areaMin = null;
      this.filters.areaMax = null;
    },
    onChange: function() {
      var temp = [];
      temp = this.houses;
      this.houses = [];
      setTimeout(() => this.houses = temp, 1);      
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
      query
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            this.houses.push({ id: doc.id, data: doc.data() });
          });
        })
        //Get houses based on price. Executes javascript after fetching data from firestore
        .then(() => {
          var self = this;
          if (self.filters.priceMin != null && self.filters.priceMin != "") {
            self.houses = self.houses.filter(function(house) {
              return (
                parseInt(house.data.price) >= parseInt(self.filters.priceMin)
              );
            });
          }
          if (self.filters.priceMax != null && self.filters.priceMax != "") {
            self.houses = self.houses.filter(function(house) {
              return (
                parseInt(house.data.price) <= parseInt(self.filters.priceMax)
              );
            });
          }
        })
        //Get houses based on area. Executes javascript after fetching data from firestore
        .then(() => {
          var self = this;
          if (self.filters.areaMin != null && self.filters.areaMin != "") {
            self.houses = self.houses.filter(function(house) {
              return (
                parseInt(house.data.area) >= parseInt(self.filters.areaMin)
              );
            });
          }
          if (self.filters.areaMax != null && self.filters.areaMax != "") {
            self.houses = self.houses.filter(function(house) {
              return (
                parseInt(house.data.area) <= parseInt(self.filters.areaMax)
              );
            });
          }
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
        })
        //Check rest fields for queries values
        .then(function() {
          //For rent/sale
          if (self.$route.query.rent != null) {
            if (JSON.parse(self.$route.query.rent) == true) {
              self.filters.rent = "Rent";
              console.log(self.filters.rent);
            }
            if (JSON.parse(self.$route.query.rent) == false) {
              self.filters.rent = "Sale";
            }
          }
          //Price range
          if (self.$route.query.priceMin != null) {
            console.log(self.$route.query.priceMin);
            self.filters.priceMin = self.$route.query.priceMin;
          }
          if (self.$route.query.priceMax != null) {
            self.filters.priceMax = self.$route.query.priceMax;
          }
          //Area range
          if (self.$route.query.areaMin != null) {
            console.log(self.$route.query.areaeMin);
            self.filters.areaMin = self.$route.query.areaMin;
          }
          if (self.$route.query.areaMax != null) {
            self.filters.areaMax = self.$route.query.areaMax;
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

        if (this.$route.query.rent != null) {
          if (JSON.parse(this.$route.query.rent) == true) {
            query = query.where("rent", "==", true);
          }
          if (JSON.parse(this.$route.query.rent) == false) {
            query = query.where("rent", "==", false);
          }
        }

        query
          .get()
          .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
              this.houses.push({ id: doc.id, data: doc.data() });
            });
          })
          .then(() => {
            var self = this;
            if (self.$route.query.priceMin != null) {
              self.houses = self.houses.filter(function(house) {
                return (
                  parseInt(house.data.price) >=
                  parseInt(self.$route.query.priceMin)
                );
              });
            }
            if (self.$route.query.priceMax != null) {
              self.houses = self.houses.filter(function(house) {
                return (
                  parseInt(house.data.price) <=
                  parseInt(self.$route.query.priceMax)
                );
              });
            }
          })
          //Get houses based on area. Executes javascript after fetching data from firestore
          .then(() => {
            var self = this;
            if (self.$route.query.areaMin != null) {
              self.houses = self.houses.filter(function(house) {
                return (
                  parseInt(house.data.area) >=
                  parseInt(self.$route.query.areaMin)
                );
              });
            }
            if (self.$route.query.areaMax != null) {
              self.houses = self.houses.filter(function(house) {
                return (
                  parseInt(house.data.area) <=
                  parseInt(self.$route.query.areaMax)
                );
              });
            }
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

div.text.default {
  color: white;
  font-size: 1rem;
}
</style>
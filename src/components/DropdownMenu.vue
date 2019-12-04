
<template>
  <!-- <div class="menu"> -->
  <!-- <section class="search-sec"> -->
  <div class="container" style="margin-top: 50px;">
    <!-- <form action="#" method="post" novalidate="novalidate"> -->
    
      <!-- <div class="row"> -->
      <!-- <div class="col-lg-12"> -->
        <b-form id="form" v-on:submit.prevent="submitSearch">
          <b-row align-h="center">
          <!-- <div class="row" style="margin-left: 250px;"> -->
          <div class="col-lg-3 col-md-3 col-sm-12 p-2">
            <!-- <select class="form-control search-slt" id="exampleFormControlSelect1">
                    <option>City</option>
                    
            </select>-->

            <b-form-group id="city" label-for="table-style-variant">
              <b-form-select
                v-model="city"
                :options="cityVariants"
                v-on:change="onChange()"
                id="table-style-variant"
              >
                <template v-slot:first>
                  <option :value="null" disabled>Select City</option>
                </template>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 p-2">
            <b-form-group id="region" label-for="table-style-variant">
              <b-form-select
                v-if="city==null && !regionVariants[city]"
                v-model="region"
                :options="regionVariants"
                disabled
                id="table-style-variant"
              >
                <template v-slot:first>
                  <option :value="null" disabled>Select city first</option>
                </template>
              </b-form-select>
              <b-form-select
                v-else
                v-model="region"
                :options="regionVariants[city].text"
                id="table-style-variant"
              >
                <template v-slot:first>
                  <option :value="null" disabled>Select area</option>
                </template>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 p-2">
            <b-button id="searchBtn" type="submit">Search</b-button>
          </div>
          <!-- </div> -->
          </b-row>
        </b-form>
      <!-- </div> -->
      <!-- </div> -->
    
    <!-- </form> -->
  </div>
  <!-- </section> -->
  <!-- </div> -->
</template>


<script>
import { dbfs } from "../config/db";

export default {
  data() {
    return {
      city: null,
      region: null,
      cityVariants: [],
      regionVariants: []
    };
  },
  mounted() {
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
      this.region = null;
    },
    submitSearch: function() {
      if (this.city != null && this.region != null) {
        this.$router.push({
          name: "Houses",
          query: {
            city: this.cityVariants[this.city].text,
            region: this.region
          }
        });
      } else if (this.city != null) {
        this.$router.push({
          name: "Houses",
          query: { city: this.cityVariants[this.city].text }
        });
      } else {
        this.$router.push({ name: "Houses" });
      }
    }
  }
};
</script>

<style lang="scss">
#searchBtn{
  background-color: #b34c37;

}

.search-sec {
  padding: 5px;
}
.search-slt {
  display: block;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #b34c37;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
  font-family: "Rajdhani", sans-serif;
}
.wrn-btn {
  background-color: #b34c37 !important;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
  font-family: "Rajdhani", sans-serif;
}
@media (min-width: 992px) {
  .search-sec {
    position: relative;
    top: -114px;
    background: rgba(0, 123, 255, 0);
  }
}

@media (max-width: 992px) {
  .search-sec {
    margin-left: -150px;
    top: -114px;

    background: rgba(0, 123, 255, 0);
  }
}
</style>





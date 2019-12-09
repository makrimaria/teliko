
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
        <div class="col-lg-3 col-md-3 col-sm-12 p-2 tp-bg">
          <model-select
            v-model="city"
            :options="cityVariants"
            placeholder="Select City"
            v-on:click="onChange()"
          ></model-select>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 p-2 tp-bg">
          <model-list-select
            v-if="city == null && !regionVariants[city]"
            :list="[ ]"
            :isDisabled="true"
            placeholder="Select city first"
          ></model-list-select>
          <model-select
            v-else-if="regionVariants[city]"
            v-model="region"
            :options="regionVariants[city].text"
            placeholder="Select region"
          ></model-select>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 p-2 tp-bg">
          <b-button id="searchBtn" class="btn-block" type="submit">Search</b-button>
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
import { ModelSelect } from "vue-search-select";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";

export default {
  components: {
    ModelSelect,
    ModelListSelect
  },
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
#searchBtn {
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

.tp-bg {
  background-color: rgba(0, 0, 0, 0.6);
  border: 10px solid rgba(0, 0, 0, 0);
}
</style>





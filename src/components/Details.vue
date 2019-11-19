<template>
  <div class="container">
    <b-list-group>
      <b-img class="card" :src="house[0].image"></b-img>
      <b-list-group-item>{{house[0].city}}</b-list-group-item>
      <b-list-group-item>{{house[0].region}}</b-list-group-item>
      <b-list-group-item>{{house[0].area}}</b-list-group-item>
      <b-list-group-item>{{house[0].price}}</b-list-group-item>
      <b-list-group-item>{{house[0].type}}</b-list-group-item>
      <b-list-group-item v-if="house[0].rent == true">Rent</b-list-group-item>
      <b-list-group-item v-else>Sale</b-list-group-item>
    </b-list-group>
    <Dummy></Dummy>
  </div>
</template>

<script>
import Dummy from "./Dummy";
import { dbfs } from "../config/db";

export default {
  name: "Details",
  components: {
    Dummy
  },
  data() {
    return {
      house: []
    };
  },
  mounted() {
    dbfs
      .collection("houses")
      .doc(this.$route.query.id)
      .get()
      .then(doc => {
        if (doc && doc.exists) {
          this.house.push(doc.data());
        }
      });
      console.log(this.house)
  }
};
</script>

<style scoped>
.card,
:hover {
  max-width: -webkit-fill-available;
  color: black;
}
</style>
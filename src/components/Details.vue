<template>
    <div class="container">
      
      <b-list-group>
        <b-img class="card" :src="house.image"></b-img>
        <b-list-group-item>{{house.data.city}}</b-list-group-item>
        <b-list-group-item>{{house.data.region}}</b-list-group-item>
        <b-list-group-item>{{house.data.area}}</b-list-group-item>
        <b-list-group-item>{{house.data.price}}</b-list-group-item>
      </b-list-group>
    </div>
</template>

<script>
import {dbfs} from "../config/db";
export default {
  data() {
    return{
     house: []
    }
  },
  mounted() {
    this.house = this.$route.params.house
  },
  updated() {
    dbfs
      .collection("houses/"+ this.house.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          this.houses.push({id: doc.id, data: doc.data()});
        });
      });
  }
}
</script>

<style scoped>
.card, :hover {
  max-width: -webkit-fill-available;
  color: black;
}

</style>
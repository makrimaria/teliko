<template>
<b-container style="margin-top:10px;">
<!--b-card-group deck>
  <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
    <b-card-text>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </b-card-text>
  
  </b-card>

  <b-card title="Title"  img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
    <b-card-text>
      This card has supporting text below as a natural lead-in to additional content.
    </b-card-text>
    
  </b-card>

  <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
    <b-card-text>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This card has even longer content than the first to show that equal height action.
    </b-card-text>
    
  </b-card>
</b-card-group-->
<h2>Suggestions</h2>
<p>------------</p>
  <b-row>
    
    
    <b-col class="mb-4" sm="3" v-for="house in houses" v-bind:key="house">
      <b-card title="" v-bind:img-src="house.image" img-alt="Image" img-top>
        <b-card-text>
          <b-list-group>
            <b-list-group-item>Πόλη: {{house.city}}</b-list-group-item>
            <b-list-group-item>Περιοχή: {{house.location}}</b-list-group-item>
            <b-list-group-item>Εμβαδό: {{house.area}} τ.μ.</b-list-group-item>
            <b-list-group-item>Τιμή: {{house.price}} €</b-list-group-item>
          </b-list-group>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import {db} from '../config/db'
var housesRef = db.ref('houses')

export default {
  data: () =>({
    houses: []
  }

  ),
  mounted() {
        housesRef.once('value', (houses) => {
          houses.forEach((house) => {
            this.houses.push({
              ref: house.ref,
              city: house.child('city').val(),
              area: house.child('area').val(),
              price: house.child('price').val(),
              location: house.child('location').val(),
              image: house.child('image').val()
            })
          })
        })
      }
}
  
</script>

<style>



</style>
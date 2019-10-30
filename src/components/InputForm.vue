<template>
    <div class="container" style="padding:20px;">
        <div>
            <h3>Do you want to list your property?</h3>
            <h4>Just fill the form and we will take care of it</h4>
        </div>
        <b-row style="background-color: aliceblue;">
            <b-col sm="6" style="padding: 10px;">
            <b-form id="form" v-on:submit.prevent="submitHouse">
            <b-form-group
                label="City"
            >
                <b-form-input 
                    type='text'
                    id="city"                    
                    v-model="house.city"
                    placeholder="City of the house"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group
                label="Location"
            >
                <b-form-input 
                    type='text'
                    id="location"
                    v-model="house.location"
                    placeholder="Specific location"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group
                label="Area"
            >
                <b-form-input
                    type='number'
                    id="area"
                    v-model="house.area"
                    placeholder="Area in square meters"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group
                label="Price"
            >
                <b-form-input
                    type='number'
                    id="price"
                    v-model="house.price"
                    placeholder="Price in €"
                >
                </b-form-input>
            </b-form-group>
            <b-button type="submit" v-b-modal="'my-modal'" variant="outline-primary">Submit</b-button>
        </b-form>
            </b-col>
            <b-col sm="6" style="margin:auto;">
                <img style="max-width: 60%" src="https://www.trzcacak.rs/myfile/full/387-3871068_5d-city-life-dimensional-png-and-vector-image.png">
            </b-col>
        </b-row>
           
        </div>


        
</template>

<script>
import {db} from '../config/db'

var housesRef = db.ref('houses')

export default {
    data: function() {
        return {
            house: {
                city:'',
                location:'',
                area:'',
                price: ''
            }
        }
    },
    firebase: {
        houses: housesRef

    },
    methods: {
        submitHouse: function() {
           
           var city = document.forms["form"]["city"].value;
           var location = document.forms["form"]["location"].value;
           var area = document.forms["form"]["area"].value;
           var price = document.forms["form"]["price"].value;
            if (city == "" || location == "" || area == "" || price == "") {
                alert("Please fill all fields");
                return false;}
            else {
                housesRef.push(this.house);
                document.getElementById("form").reset();
                alert("Property listed successfully")
            }
        }
    }
    }
</script>

<style >

.container {
    /* max-width: 5000px; */
    position: auto;
  
    /* background-image: url(https://colorate.azurewebsites.net/SwatchColor/262626); */
}

</style>
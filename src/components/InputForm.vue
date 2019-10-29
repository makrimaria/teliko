<!--template>
    <div class="container" >
        <b-form id="form"  v-on:submit.prevent="submitHouse ">
            <b-form-group 
                label="City"
            >
                <b-form-input 
                    type='text'
                    
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
                    v-model="house.price"
                    placeholder="Price in €"
                >
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="outline-primary">Submit</b-button>
        </b-form>
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
           housesRef.push(this.house)
        }
    }
    
}
</script>

<style >

.container {
    font-family: 'Courier New', Courier, monospace;
    background-image: url(https://www.colorhexa.com/262626.png);
    width: 100%;

    
}







</style>
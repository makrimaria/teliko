<template>
  <div>
    <br>
    <gmap-map ref="mapRef"
      :center="center"
      :zoom="19"
      style="width:100%;  height: 400px; align:'center';"
    >
        <gmap-custom-marker :marker="marker">
        <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/4482957981557740362-128.png" />
        <my-component></my-component>
  </gmap-custom-marker>
    </gmap-map>
  </div>
</template>

<script>
import { EventBus } from "../config/event-bus.js";
import GmapCustomMarker from 'vue2-gmap-custom-marker';
export default {
  components: {
      'gmap-custom-marker': GmapCustomMarker
  },
  name: "GoogleMap",
  data() {
    return {
      
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 39.362372, lng: 22.951689 },
      marker: {  }, //lat: 37.9891114, lng: 23.7359759
      places: [],
      currentPlace: null,
      lonn:0.0,
      latt:0.0,
      info:''
    };
  },

  mounted() {
    this.geolocate();     
    
    EventBus.$on("EencURL", Encurl=> {  
      console.log(`Received: ${Encurl} :)`)

      this.$axios
      .get('https://eu1.locationiq.com/v1/search.php?key=4f7b94f318fff1&q='+Encurl+'&format=json')
      .then(response => (this.info = response))
      .catch(error => console.log(error))
      console.log("info: "+this.info)
      console.log("lat: "+this.info.data[0].lat)
      console.log("lon: "+this.info.data[0].lon)
      
      var lonn=parseFloat(this.info.data[0].lon)
      var latt=parseFloat(this.info.data[0].lat)

      this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: latt, lng: lonn })})
      
    this.marker={lat: latt, lng: lonn }
    console.log("marker"+this.marker)

      }); 

    
       
  },

  methods: {
     //receives a place object via the autocomplete component
     setPlace(place) {
     this.currentPlace = place; 
    },
   
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
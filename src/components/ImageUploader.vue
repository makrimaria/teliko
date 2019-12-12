<template>
  <div>
    <div >
      <p>Upload an image</p>
      <input type="file" id=uploader @change="previewImage" accept="image/*">
    </div>
    <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null"> 
        <!-- <img class="preview" :src="picture"> -->
        <br>
      <button @click="onUpload">Upload</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { EventBus } from "../config/event-bus.js";

export default {
  name: 'Upload',
  mounted() {
    
   // Listen for the 'clicked-event'  
      EventBus.$on("reset", resetImg=>{  
        if(resetImg==true){
          this.imageData=null;
          this.uploadValue=0;
          document.getElementById("uploader").value = "";
        }
      });
  },

  data(){
	return{
      imageData: null,
      picture: null,
      uploadValue: 0
	}
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;

          EventBus.$emit("clicked-event", url);

        });
      }
      );
    }

  }
}
</script>

<style scoped="">
img.preview {
    width: 200px;
}

</style>
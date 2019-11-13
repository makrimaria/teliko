<template>

<div class="uploader" style="margin-left:-25px;">
    <i class="fa fa-cloud-upload " style="font-size:80px;"></i>
    <p style="text-align:left; font-size:22px; font-weight:900;">Drag your images here</p>
    <div>OR</div>
    <div class="file-input">
        <label for="file">Select a file</label>
        <input type="file" id="file" @change="onInputChange" multiple>

    </div>











</div>
    
</template>

<script>
export default {
    methods: {
        onInputChange() {
        }
    }
    
}
</script>

<style>

.uploader {
    width: 100%;
    /* display: block; */
    /* border: 0.5px solid grey; */
    padding: 30px 25px;
    text-align: left;
    border-radius: 60px;
    border: 0.7px dashed grey;
}







</style>
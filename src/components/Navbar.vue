<template>
    <div id="navigation">
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/faq" exact>FAQ</router-link></li>
            <li><router-link to="/contact" exact>Contact</router-link></li>
        </ul>
    </div>   
</template>

<script>
export default {
    
}
</script>

<style>
.router-link-active{
    background-color: #92a8d1;
    color: #444;
}

ul {
  list-style-type: none;
  margin-bottom: 0px !important; 
  margin-top: 0 !important;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
li {
  float: left;
  margin-block-end: 0px;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 28px 32px;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
}
li a:hover {
  background-color: #92a8d1;
}





</style>

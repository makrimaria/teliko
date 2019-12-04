<template>
  <div id="navigation">
    <div class="container">
    <ul>
      <li>
        <router-link to="/" exact
          ><img class="ant" src="@/assets/LogoMakr_0Deh1f.png"
        /></router-link>
      </li>
      <!-- <li>
        <router-link to="/faq" exact>FAQ</router-link>
      </li> -->
      <li>
        <router-link to="/sell" exact>List your property</router-link>
      </li>
      <li>
        <router-link to="/houses">Houses</router-link>
      </li>
      <div class="dropdown3">
        <button class="dropbtn3" style="float:right; margin-right:25px;">
          More
          <i style="margin-left:5px;" class="fa fa-angle-double-down"></i>
        </button>
        <div class="dropdown3-content">
          <router-link to="/faq" exact>FAQ</router-link>
          <router-link to="/contactt" exact>Contact</router-link>
        </div>
      </div>
    </ul>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#navigation{
  background-color: #333;
}
.router-link-active {
  background-color: #b34c37;
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
  font-weight: 500;
  text-align: center;
  padding: 17px 32px;
  text-decoration: none !important;
  font-family: "Rajdhani", sans-serif;
  border-radius: 5%;
}
li:hover {
  background-color: #b34c37;
  border-radius: 5%;
}

/* a:link {
  color: white;
} */
a:visited {
  color: white;
  border-radius: 5%;
}
a:hover {
  color: white !important;
  border-radius: 5%;
}

.ant {
  width: 26px;
  border-radius: 5%;
}
.dropdown3 {
  overflow: hidden;
  float: right;
}

.dropdown3 .dropbtn3 {
  font-size: 16px;
  border: 1px solid;
  border-radius: 5%;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: "Rajdhani", sans-serif;

  margin: 0;
}

.dropdown3-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  /* box-shadow: 0px 8px 16px 0px rgba(247, 33, 79, 0.2); */
  z-index: 1;
}
.dropdown3-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown3-content a:hover {
  background-color: #444;
}

.dropdown3:hover .dropdown3-content {
  display: block;
}
</style>

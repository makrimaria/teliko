<template>
  <div id="navigation">
    <ul>
      <li>
        <router-link to="/" exact><img class="ant" src="@/assets/LogoMakr_0Deh1f.png"></router-link>
      </li>
      <li>
        <router-link to="/faq" exact>FAQ</router-link>
      </li>
      <li>
        <router-link to="/sell" exact>List your property</router-link>
      </li>
      <li>
        <router-link to="/houses">Houses</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style >
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
}
li:hover {
  background-color: #b34c37;
}

/* a:link {
  color: white;
} */
a:visited {
  color: white;
}
a:hover {
  color: white !important;
}

.ant {
  width: 26px;
  
}
</style>

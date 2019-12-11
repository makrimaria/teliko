<template>
  <div id="navigation">
    <div class="container">
      <div class="desktop">
        <ul>
          <li>
            <router-link to="/" exact>
              <img class="ant" src="@/assets/LogoMakr_0Deh1f.png" />
            </router-link>
          </li>
          <li>
            <router-link to="/sell" exact>List your property</router-link>
          </li>
          <li>
            <router-link to="/houses">Houses</router-link>
          </li>
          <li>
            <router-link to="/faq" exact>FAQ</router-link>
          </li>
         
        </ul>
      </div>
      <div class="mobile">
        <Slide>
          <b-nav class="unblur mobile-menu">
            <b-nav-item>
              <img style="width: 70%;" src="@/assets/LogoMakr_0Deh1f.png" />
            </b-nav-item>
            <b-nav-item>
              <router-link to="/" exact>Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/sell" exact>List your property</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/houses">Houses</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/faq" exact>FAQ</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/contactt" exact>Contact</router-link>
            </b-nav-item>
          </b-nav>
        </Slide>
        <!-- <div id="toggleButton" class="sidemenu-right"><font-awesome-icon style="font-size: 30px;" icon="comments" /></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
import $ from "jquery";
export default {
  components: {
    Slide
  },
  mounted() {
    $(".bm-burger-button").click(function() {
      $("#wrapper").addClass("blur");
    });
    $(".bm-cross-button, .nav.unblur, #wrapper, #toggleButton").click(
      function() {
        $("#wrapper").removeClass("blur");
      }
    );

    $("#toggleButton").click(function() {
      $(document).ready(function() {
        $("#chatbot").slideToggle();
      });
    });
  }
};
</script>

<style>
#navigation {
  background-color: #161716;
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
  background-color: #161716;
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
  /* border-radius: 5%; */
}
li:hover {
  background-color: #b34c37;
  /* border-radius: 5%; */
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

@media (max-width: 767px) {
  .desktop {
    display: none;
  }

  .nav.mobile-menu {
    background-color: transparent;
    display: grid;
    padding: 0;
  }

  li:hover {
    background-color: transparent;
  }
}

@media (min-width: 767px) {
  .mobile {
    display: none;
  }
}
.bm-burger-button {
  z-index: 999;
  top: 5px;
  left: 0;
  background-color: #b34c37;
  border: 5px solid #b34c37;
  border-left: 22px solid #b34c38;
  width: 50px;
  border-radius: 0 15% 15% 0;
}

.bm-burger-bars {
  background-color: white;
}

.bm-item-list {
  margin-left: 0;
}

.blur {
  filter: blur(2px) brightness(0.5);
}

.sidemenu-right {
  z-index: 999;
  top: 5px;
  right: 0;
  background-color: #b34c37;
  border: 5px solid #b34c37;
  border-right: 22px solid #b34c38;
  width: 50px;
  border-radius: 15% 0 0 15%;
  position: fixed
}
</style>

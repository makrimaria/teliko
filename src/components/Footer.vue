<template>
  <div>
    <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sunt
              repellat quo iure illo iste optio incidunt placeat. Voluptatibus
              harum labore nobis, facilis aperiam aliquam veniam blanditiis eos,
              molestiae dolore, nostrum itaque mollitia illum amet corporis
              repellendus. Deleniti quia earum sequi provident aliquid, quasi
              minus fugiat unde doloribus aliquam perferendis repellendus ex
              distinctio, autem corrupti, placeat soluta vel id facilis!
            </p>
          </div>

          <div class="col-xs-6 col-md-3 col-lg-4" style="margin-left: 100px;">
            <h6 style="margin-left:-150px;">Quick Links</h6>
            <ul class="footer-links">
              <li>
                <router-link to="/" exact @click.native="scrollToTop()">Home</router-link>
              </li>
              <li>
                <router-link to="/faq" exact @click.native="scrollToTop()">FAQ</router-link>
              </li>
              <li>
                <router-link to="/sell" exact @click.native="scrollToTop()">List your property</router-link>
              </li>
              <li>
                <router-link to="/houses" exact @click.native="scrollToTop()">Houses</router-link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2019 All Rights Reserved by
              <a
                href="http://localhost:8080"
              >Prodigy Real Estate</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <a
                href="https://www.facebook.com/skgcode/"
                target="_blank"
                class="fa fa-facebook"
                style="margin-right:10px;"
              ></a>
              <a
                href="https://www.instagram.com/skgcode/?hl=el"
                target="_blank"
                class="fa fa-instagram"
                style="margin-right:10px;"
              ></a>
              <a
                href="https://www.linkedin.com/company/skgcode/"
                target="_blank"
                class="fa fa-linkedin"
                style="margin-right:10px;"
              ></a>

              <!-- <li><a class="facebook" href="https://www.facebook.com/skgcode/" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a class="instagram" href="https://www.instagram.com/skgcode/?hl=el" target="_blank"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/company/skgcode/" target="_blank"><i class="fa fa-linkedin"></i></a></li>-->
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.site-footer {
  background-color: #333;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: whitesmoke;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 3px;
  letter-spacing: 2px;
}
/* .site-footer a
{
  color:#737373;
} */
/* .site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
  
} */
.footer-links {
  padding-left: 10px;
}
/* .footer-links li
{
  display:none;
} */
/* .footer-links a
{
  color:#737373;
} */

.fa {
  padding: 20px;
  font-size: 30px;
  width: 70px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-instagram {
  background-image: linear-gradient(
    -140deg,
    #515bd4,
    #8134af,
    #dd2a7b,
    #f58529,
    #feda77
  );
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
/* .footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc !important;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
} */
/* .site-footer .social-icons
{
  text-align:right
} */
/* .site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  background-color:#33353d
}  */
.copyright-text {
  margin: 0;
}
/* @media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
} */
/* .social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
} */
/* .social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
} */
/* .social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
} */
/* .social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
} */
/* .social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
} */
/* .social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
} */
</style>


<template>
  <div class="menu">
    <section class="search-sec">
      <div class="container">
        <form action="#" method="post" novalidate="novalidate">
          <div class="row">
            <div class="col-lg-12">
              <div class="row" style="margin-left: 250px;">
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <select class="form-control search-slt" id="exampleFormControlSelect1">
                    <option>Thessaloniki</option>
                    <option>Athina</option>
                    <option>Larisa</option>
                    <option>Patra</option>
                  </select>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input type="text" class="form-control search-slt" placeholder="Enter Area" />
                </div>

                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                  <button type="button" class="btn btn-secondary wrn-btn">Search</button>
                </div>


              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>


<script>

export default {
  
}
</script>

<style lang="scss">.search-sec {
  padding: 5px;
  
}
.search-slt {
  display: block;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #cf6f6f;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
    font-family: 'Rajdhani', sans-serif;

}
.wrn-btn {
  background-color: #cf6f6f !important;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
    font-family: 'Rajdhani', sans-serif;

}
@media (min-width: 992px) {
  .search-sec {
    position: relative;
    top: -114px;
    background: rgba(0, 123, 255, 0);
  }
}

@media (max-width: 992px) {
  .search-sec {
    margin-left: -150px;
        top: -114px;

    background: rgba(0, 123, 255, 0);
  }
}





</style>





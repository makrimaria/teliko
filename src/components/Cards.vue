<template>

<div class="container">

<div class="card-columns">

  <div class="card">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img style="width=100%;" src="https://m1.spitogatos.gr/179121786_900x675.jpg?v=20140916" alt="First slide">
        </div>
        <div class="carousel-item">
          <img style="width=100%" src="https://m3.spitogatos.gr/179121788_900x675.jpg?v=20140916" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img style="width=100%;" src="https://m3.spitogatos.gr/179121599_900x675.jpg?v=20140916" alt="Third slide">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="icon-prev" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="icon-next" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="card-block">
      <h4 class="card-title">Nea Paralia</h4>
    </div>
  </div>


 <div class="card">
    <div id="carousel-example-generic1" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic1" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic1" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img style="width=100%;" src="https://m3.spitogatos.gr/179303942_900x675.jpg?v=20140916" alt="First slide">
        </div>
        <div class="carousel-item">
          <img style="width=100%;" src="https://m1.spitogatos.gr/179303943_900x675.jpg?v=20140916" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img style="width=100%;" src="https://m2.spitogatos.gr/179303944_900x675.jpg?v=20140916" alt="Third slide">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic1" role="button" data-slide="prev">
        <span class="icon-prev" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic1" role="button" data-slide="next">
        <span class="icon-next" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="card-block">
      <h4 class="card-title">Pylaia</h4>
    </div>
  </div>

</div>
</div>
    
</template>

<script>
export default {
    name: 'cards'
   
    
}
</script>

<style>

.card-columns {
    -webkit-column-count: 3;
       -moz-column-count: 3;
            column-count: 3;
    -webkit-column-gap: 1.25rem;
       -moz-column-gap: 1.25rem;
            column-gap: 1.25rem;
  }
  .card-columns .card {
    display:none;
    width: 100%;
   
  }

.card-title {
    font-family: 'Courier New', Courier, monospace;
    background-color:#3e4444;
    color: white;
}
 

</style>
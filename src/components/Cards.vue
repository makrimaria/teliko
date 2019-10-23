<template>


    <div>
  

<b-card class="mb-2"
        header-variant="card_header"
        footer-variant="card_footer"
        title-variant="card_title"
        :header="card.header"
        :title="card.items.title"
        :sub-title="card.subheader"
        show-footer
></b-card >

    </div>





    
</template>

<script>
export default {
    
}
</script>

<style>


.card-card_title {
    font-size: 1.2em;
    font-shadow: 2px 2px #ccc;
}
.card-card_header {
    font-shadow: 2px 2px #00ff00;
}
.card-card_footer {
    color: #000;
    font-shadow: 2px 2px #FFAAFF;
}


</style>
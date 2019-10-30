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
    background: #eee;
    color: #444;
}

</style>
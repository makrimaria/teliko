
<template>


<div id="app">
    <div id="navbar">
       
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>

        </ul>
 
    </div>
    <div class="header">
        <div class="header-img">
            
          <p><iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/78257b41-fbef-4e10-8246-8d7c8ac73e2e">
</iframe></p>

    <button class="btn2">Open Chatbot</button>
    <p> </p>
    <button class="btn1">Close Chatbot</button>

            
        </div>
    </div>



</div>

  
</template>


<script >

export default {
    name: 'header'
}


    </script>


<style>

.header {
  height: 320px;
}

.header .header-img {
  background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
 background-color: #f5f5f5;
 height: 300%;
}

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
li{
    float: left;
}
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 28px 32px;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    

}
li a:hover{
    background-color: #111;
}

#search {
  width: 357px;
  margin: 4px auto;
  text-align: center;
  display: inline-block;
}


#search_text {
  width: 297px;
  padding: 15px 0 15px 20px;
  font-size: 16px;
  font-family: Montserrat, sans-serif;
  border: 0 none;
  height: 52px;
  margin-right: 0;
  color: grey;
  outline: none;
  background: white;
  float: left;
  box-sizing: border-box;
  transition: all 0.15s;
}

button {
 
  margin: 4px auto;
  padding: 15px 25px;
  font-size: 12px;
  align-self: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: black;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

button:hover {background-color:grey}

button:active {
  background-color: black;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
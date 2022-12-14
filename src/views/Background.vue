<template>
  <div class="firstBackground">
    <div class="backgroundDog">
   <img  :src="image1" class="img1"/>
  
  </div>
  <div class="secondNav">
    <ul>
        <center>
     <li v-for="item in nav2Items" :key="item.id">{{item}}</li>
        </center>
   </ul>
  </div>
  <div class="msg1">
    <p id="message1">{{this.message1}}</p>
 
  </div>
  <div class="logo">
    <p id="message2">{{this.message2}}</p>
  </div>
  </div>
</template>

<script>
import image1 from '../assets/dog2.jpg';
import image2 from '../assets/logo.png';
export default {
    data(){
        return {
            image1,
            nav2Items:['PROJECT NOVA','ABOUT NOVA','ABOUT US'],
            message1:'WELCOME TO',
            message2:'K9 PAWS BEAHVIOR DOG TRAINING',
            image2,

        }
    },
    
       
        
    

}
</script>

<style scoped>
.firstBackground{
    display: grid;
    grid-template-columns: auto;

}
.logo{
    z-index: 100;
    position: absolute;
    top:280px;
    left:25%;
    font-size: 50px;
}
.msg1{
    position:absolute;
    top:250px;
    left:45%;
    font-size:30px;
    z-index: 100;
    animation: welcome 4s;
}
@keyframes welcome {
0%{
   left:0%;   
    }
   
    
    100%{
        left:45%;
    }
}
li{
    z-index: 100;
    width:100%;
    display: inline-block;
    height:auto;
    color:#000000;
    width:150px;
    padding:10px;
    font-weight: bold;
}
li:hover{
    background: white;
    color:black;
    cursor: pointer;
}
.secondNav{
    position:absolute;
    top:150px;
    left:35%;
    width:auto;
    height:auto;
        animation: animate 4s ;
}
 @keyframes animate {
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }

    }
.backgroundDog{
    width:100%;
    height:600px;
    z-index: 0;
    
}
.img1{
    width:100%;
    height:auto;
    z-index: 0;
}
@media only screen and (max-width: 400px) {
.msg1{
    position:absolute;
    top:300px;
    left:30%;
    font-size:25px;
    z-index: 100;
}
li{
    z-index: 100;
    width:100%;
    display: inline;
    height:auto;
    color:#000000;
    width:40%;
    left:0%;
    padding:10px;
    font-weight: bold;
}
.secondNav{
    position:absolute;
    top:150px;
    left:0%;
    background-color: green;
    height:auto;
    font-size: 15px;
    justify-self: start;
}

}

body{
    padding:0;
    margin:0;
}


</style>
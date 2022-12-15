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
    <p class="mess2">{{this.message2}}</p>
    <img :src="this.image2" class="logoImage"/>
    <p ref="bottom" @click="scrollDown" class="findMore">Find Out More</p>

  </div>

  <div id="videos">
  <the-videos>
  </the-videos>
  
      <p  class="blog">Check out my blog</p>


  </div>
  </div>
</template>

<script>
import image1 from '../assets/dog2.png';
import image2 from '../assets/logo.png';
import TheVideos from '../components/TheVideos.vue';
import flag from '../assets/flag.jpg';
export default {
    components:{
      TheVideos, 
    },
    data(){
        return {
            image1,
            nav2Items:['APPLY','DONATE','VOLUNTEER'],
            message1:'WELCOME TO',
            message2:'K9 PAWS BEAHVIOR DOG TRAINING',
            image2,
            flag,

        }
    },
    methods:{
        scrollDown(){

      this.$refs["bottom"].scrollIntoView({ behavior: "smooth" })
    
        }
    }
    
       
        
    

}
</script>

<style scoped>
.firstBackground{
    display: grid;
    grid-template-columns: auto;
    

}
.blog{
     color:#fff;
    z-index:120;
    position: absolute;
    top:550px;
    left:45%;
    font-size: 25px;
    padding:10px;
}
.blog:hover{
     background-color: #fff;
    color:black;
    cursor: pointer;
    border-radius:.5px;
    border: 1px solid black;
}
.findMore{
    color:#fff;
    z-index:120;
    position: absolute;
    top:550px;
    left:45%;
    font-size: 25px;
    padding:10px;
}
.findMore:hover{
    background-color: #fff;
    color:black;
    cursor: pointer;
    border-radius:.5px;
    border: 1px solid black;
}
#videos{
    z-index: 105;
    position:relative;
    top:600px;
    left:0%;
    
}
.mess2{
    color:#fff;
    animation: msg2 4s;
     position: absolute;
    top:280px;
    left:25%;
    font-size: 50px;
    
}
.logo{
    z-index: 100;
   
}
.logoImage{
    position: absolute;
    top:350px;
    left:25%;
    font-size: 50px;
    z-index: 100;
    animation: logo1 4s;
}
.msg2{
    font-size:30px;
}
.msg1{
    position:absolute;
    top:250px;
    left:45%;
    font-size:30px;
    z-index: 100;
    animation: welcome 4s;
    color:white;
}
@keyframes msg2 {
0%{
   left:0%;   
    }
   
    
    100%{
        left:25%;
    }
}
@keyframes welcome{
0%{
   left:100%;   
    }
   
    
    100%{
        left:45%;
    }
}
@keyframes logo1 {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 100%;
    }
    
}
li{
    z-index: 100;
    width:100%;
    display: inline-block;
    height:auto;
    color:#fff;
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
@media only screen and (max-width: 700px) {
  .firstBackground{
    background-color: blue;
  }
.msg1{
    position:absolute;
    top:190px;
    left:35%;
    font-size:20px;
    z-index: 100;
}
.findMore{
    display: none;
}
.logoImage{
   display: none;

}
#videos{
    position: absolute;
    top:550px;

   
}
li{
    z-index: 100;
    width:100%;
    display: inline;
    height:auto;
    color:#fff;
    width:40%;
    left:0%;
    padding:10px;
    font-weight: bold;
}
.secondNav{
    position:absolute;
    top:160px;
    left:20%;
    height:auto;
    font-size: 15px;
    
    justify-content: stretch;
    justify-items: stretch;

    

}
.mess2{
      position:absolute;
    top:230px;
    left:20%;
    font-size:25px;
    z-index: 100;
}

}

body{
    padding:0;
    margin:0;
}


</style>
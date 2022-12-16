<template>
  <div class="firstBackground">
    <div class="backgroundDog">
   <img  :src="image1" class="img1"/>
  
  </div>
  <application @close="closeModal" :logo="this.image2" v-if="this.showModal"></application>
  <div class="secondNav">
    <ul>
        <center>
     <li v-for="item in nav2Items" :key="item.id" @click="navbar(item)">{{item}}</li>
        </center>
   </ul>
  </div>
  <div class="msg1">
    <p id="message1">{{this.message1}}</p>
 
  </div>
  <div class="logo">
   <center> <p class="mess2">{{this.message2}}</p></center>
    <img :src="this.image2" class="logoImage"/>
    <p ref="bottom" @click="scrollDown" class="findMore">Find Out More</p>

  </div>
  

  <div id="videos">
  <the-videos>
  </the-videos>
  


  </div>
  </div>
</template>

<script>
import image1 from '../assets/dog2.png';
import image2 from '../assets/black.png';
import TheVideos from '../components/TheVideos.vue';
import Application from '../views/Application.vue';
export default {
    components:{
      TheVideos, Application
    },
    data(){
        return {
            image1,
            nav2Items:['APPLY','DONATE','VOLUNTEER'],
            message1:'WELCOME TO',
            message2:'BLACK MOUNTAIN K9 SEARCH & RESCUE',
            image2,
            
            showModal:false,

        }
    },
    methods:{
        closeModal(){
         this.showModal= false;
        },
        navbar(v){
          if(v.includes("APPLY")){
            this.showModal=true;
          }
          else if(v.includes("DONATE")){
            console.log("Donate was clicked")
          }
          else if(v.includes("VOLUNTEER")){
            console.log("Volunteer was clicked")
          }
        },
        scrollDown(){

      this.$refs["bottom"].scrollIntoView({ behavior: "smooth" })
    
        },
        
    }
    
       
        
    

}
</script>

<style scoped>
.firstBackground{
    display: grid;
    grid-template-columns: auto;
    

}

.findMore{
    color:#fff;
    z-index:120;
    position: absolute;
    top:590px;
    left:45%;
    font-size: 25px;
    padding:10px;
}
.findMore:hover{
    background-color: #f6b243;
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
    color:#f6b243;
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
    top:400px;
    left:45%;
    height:200px;
    width:200px;
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
    background: #f6b243;
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


@media only screen and (max-width: 900px) {
  .firstBackground{
  }
  .logoImage{
    position: absolute;
    top:330px;
    left:39%;
    height:150px;
    width:150px;
    font-size: 50px;
    z-index: 100;
    animation: logo1 4s;
}
.msg1{
    position:absolute;
    top:200px;
    left:40%;
    font-size:20px;
    z-index: 100;
}
.findMore{
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
    position: relative;
    top:10px;
    
    right:40px;
    height:auto;
    color:#fff;
    width:40%;
    
    padding:10px;
    font-weight: bold;
}

.mess2{
      position:absolute;
    top:240px;
    left:25%;
    font-size:25px;
    z-index: 100;
}

}
@media only screen and (max-width: 700px) {

.msg1{
    position:absolute;
    top:120px;
    left:32%;
    font-size:18px;
    z-index: 100;
}
.findMore{
    display: none;
}
.logoImage{
   display: block;
   height:100px;
   width:100px;
   position: absolute;
   top:1%;
   left:1%;

}
#videos{
    position: absolute;
    top:550px;

   
}
li{
    z-index: 100;
    width:100%;
    display: inline;
    position: relative;
    bottom:85px;
    right:30px;
    height:auto;
    color:#fff;
    width:40%;
    
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
    top:150px;
    left:9%;
    font-size:18px;
    z-index: 100;
}

}

@media only screen and (max-width: 500px) {
.msg1{
    position:absolute;
    top:120px;
    left:32%;
    font-size:18px;
    z-index: 100;
}
.findMore{
    display: none;
}
.logoImage{
   display: block;
   height:100px;
   width:100px;
   position: absolute;
   top:1%;
   left:1%;
   z-index: 200;

}
#videos{
    position: absolute;
    top:350px;

   
}
.secondNav{
    position:absolute;
    top:80px;
    left:20%;
    height:auto;
    font-size: 15px;
    
    justify-content: stretch;
    justify-items: stretch;

    

}
li{
      z-index: 500;
    width:100%;
    display: inline;
    height:auto;
    position: relative;
    bottom:500px;
    color:#fff;
    width:150px;
    padding:10px;
    font-weight: bold;
}

.mess2{
       position:absolute;
    top:150px;
    left:9%;
    font-size:18px;
    z-index: 100;
}



}


</style>
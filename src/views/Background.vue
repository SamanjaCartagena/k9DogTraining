<template>
   <div >
         <el-row>
 <el-col :span="24"><div class="grid-content">
  <div class="firstBackground">
    <div class="backgroundDog">
   <img  :src="image1" class="img1"/>
  
  </div>
  <application :message="this.message1" @close="closeModal" :logo="this.image2" v-if="this.showModal"></application>
  <div class="secondNav"	has-text-centered has-text-justified>
    <ul>
        <center>
     <li class='navitems'  v-for="item in nav2Items" :key="item.id" @click="navbar(item)">{{item}}</li>
        </center>
   </ul>
  </div>


  <el-dialog
    v-model="dialogVisible"
   
    width="80%"
    
    :before-close="handleClose"
  >
    <img :src="this.brochure1" style="width:100%;height:100%"/>
       <img :src="this.brochure2" style="width:100%;height:100%"/>

  </el-dialog>

 <el-dialog
    v-model="volunteerwork"
    width="80%"
    :before-close="handleClose"
  >
  <h1 style='text-align:center;'>Volunteer Application</h1>
  <img :src="this.black" class='applylogo' style="width:100px;height:100px;border-radius:50%;
  "/>
  <form>
    <input placeholder="Full Name"/>
    <input type="email" placeholder='Email' />
    <textarea value="Tell us why you want to volunteer">

    </textarea>


  </form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="volunteerwork = false">Cancel</el-button>
        <el-button type="primary" @click="volunteerwork = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <div class="msg1">
    <p id="message1">{{this.message1}}</p>
 
  </div>
  <div class="logo">
   <center> <p class="mess2">{{this.message2}}</p></center>
    <img :src="this.image2" class="logoImage"/>
    <p class="msg3">BLACK K9 SEARCH AND RESCUE WAS CREATED TO ASSIST FAMILIES IN FINDING MISSING INDIVIDUALS ! </p>
  </div>
  <div id="videos">

  


  </div>
  </div>
  </div>
  


  <middle-section style='z-index:0;'></middle-section>
  <some-photos></some-photos>
 </el-col>
          </el-row>


          
          <footer-page class='backgroundfooter'></footer-page>
   </div>
</template>

<script>
import image1 from '../assets/dog2.png';
import image2 from '../assets/black.png';
import brochure1 from '../assets/brochure1.jpg'
import brochure2 from '../assets/brochure2.jpg'
import TheVideos from '../components/TheVideos.vue';
import black from '../assets/black.png'
import Application from '../views/Application.vue';
import MiddleSection from '../components/MiddleSection.vue';
import SomePhotos from '../components/SomePhotos.vue';
import FooterPage from '../components/FooterPage.vue';
export default {
    components:{
      TheVideos, Application, MiddleSection, SomePhotos, FooterPage
       
    },
    data(){
        return {
            image1,
            nav2Items:['MISSION','DONATE','VOLUNTEER'],
            message1:'WELCOME TO',
            message2:'BLACK MOUNTAIN K9 SEARCH & RESCUE',
            image2,
            black:black,
            brochure1:brochure1,
            brochure2:brochure2,
            dialogVisible:false,
            mission:false,
            donate:false,
            volunteerwork:false

        }
    },
    methods:{
       
        navbar(v){
          if(v.includes("VOLUNTEER")){
            this.volunteerwork=true;



          }
          else if(v.includes("DONATE")){
            console.log("Donate was clicked")
          }
          else if(v.includes("MISSION")){
            this.mission=true
            this.dialogVisible=true
          
          }
        },
      
         
    }
    
       
        
    

}
</script>

<style scoped>
input{
  margin: 1px;
}
.msg3{
    color:white;
    position: relative;
    text-align: center;
    bottom:160px;
    height:auto;
    font-size: 25px;
    overflow:hidden;
    width:fit-content;
      border-right: .15em solid #f6b243; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .10em; /* Adjust as needed */
   animation: 
    typing 2.5s steps(30, end),
    blink-caret .75s step-end infinite;

}




/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  30% { border-color: #f6b243 }
}
.firstBackground{
    display: grid;
    grid-template-columns: auto;
    margin:auto

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
     position: relative;
     bottom:500px;
    text-align: center;
    font-size: 50px;
    
}
.logo{
    z-index: 100;
   
}
.applylogo{
  position: relative;

}
.logoImage{
    position: absolute;
    top:300px;
    left:45%;
    height:200px;
    width:200px;
    font-size: 50px;
    z-index: 100;
    border:5px solid white;
    border-radius:50%;
       animation: spin 4s;

}
@keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);} 
}

.msg1{
    position:relative;
    bottom:500px;
   text-align: center;
    font-size:30px;
    z-index: 100;
    animation: welcome 4s;
    color:white;
}
@keyframes msg2 {
0%{
   right:100%;   
    }
   
    
    100%{
      right:0%;
 }
}
@keyframes welcome{
0%{
   left:100%;   
    }
   
    
    100%{
        left:0%;
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
    text-align: center;
    padding:10px;
    position: relative;
    bottom:120px;
}
li:hover{
    background: #f6b243;
    color:black;
    cursor: pointer;
}
.secondNav{
    position:relative;
    text-align: center;
     bottom:420px;
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

.applylogo{
         animation: spin 4s;
         position: relative;
        left:45%;
        
         border:2px solid white;

}



  
    

@media only screen and (max-width: 700px) {
.backgroundfooter{
    position: relative;
    bottom:500px;
}


.img1{
    max-width:100%;
    height:auto;
}
.logoImage{
 position: absolute;
 text-align: center;
 top:-90px;
 left:5%;
    height:100px;
    width:100px;
    font-size: 50px;
    z-index: 100;
    border-radius:50%;
       animation: spin 4s;
}
el-dialog{
  width:100%;
  z-index: 5000;
}
li{
        z-index: 100;
    width:100%;
    display: inline-block;
    height:auto;
    color:#fff;
    width:50px;
    margin:10px;
    padding:10px;
    position: relative;
    right:28px;
    bottom:170px;
    text-align: center;


}

li:hover{
   width:100px;
    background: #f6b243;
    color:black;
    cursor: pointer;
}
.mess2{
         position: absolute;
       color:#f6b243;
    animation: msg1 4s;
    top:100px;
    left:5%;
    z-index: 1000;
    text-align: center;
    font-size: 20px;
}
.msg1{
    display: none;
}
.msg2{
    display: none;
}
.msg3{
    display: none;
}
}


</style>
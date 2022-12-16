<template>
  <div class="container">
    <div style=" margin-left:55px;">
   <p class="headerName" >
     BLACK MOUNTAIN K9 SEARCH AND RESCUE
   </p>
    <ul style="position:relative; bottom:10px;">
        <li class="firstNav" v-for="nav in navItems" @click="navClicked(nav)" :key="nav">{{nav}}</li>

    </ul>
    <ul style="text-decoration:none; width: 100%; " >
      <center>
        <li v-show="sizeNav" class="secondNav" 

        style="text-decoration:none;"
        
         v-for="nav in navItems" @click="showNav" :key="nav">{{nav}}</li>
      </center>

    </ul>
    </div>
    
  <div id="top-socials">
     <ul>
        <li v-for="icon in socialIcons" :key="icon" class="socialNav">
            <img @click="socialClicked(icon)" :src="icon" style="width:25px;height:25px;"/>
        </li>    </ul>

  </div>
                         <img :src="this.listIcon"  class="listIcons" @click="showNav"/>

  </div>
</template>

<script>
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import youtube from '../assets/youtube.png';
import listIcon from '../assets/listIcon.png';
export default {
    data(){
        return{
            navItems:['Home','About','Projects','Videos','Gallery','News'],
            socialIcons:[facebook,instagram,tiktok,youtube],
            listIcon,
            sizeNav:false
        }
    },
    methods:{
      showNav(){
        this.sizeNav = !this.sizeNav;
      },
      socialClicked(v){
       if(v.includes(tiktok)){
         var anchor1 = document.createElement('a');
        anchor1.href = 'https://www.tiktok.com/@novathewonderdog';
        anchor1.target="_blank";
        anchor1.click();
       }
       else if(v.includes(youtube)){
        var anchor = document.createElement('a');
        anchor.href = 'https://www.youtube.com/@novathewonderdog9404';
        anchor.target="_blank";
        anchor.click();

       }
       else if(v.includes(instagram)){
        
       }
       else if(v.includes(facebook)){
         var anchor2 = document.createElement('a');
        anchor2.href = 'https://www.facebook.com/groups/409712361276865';
        anchor2.target="_blank";
        anchor2.click();
       }
      },
      navClicked(v){
        console.log(v+" was clicked")
      }
    }

}
</script>

<style scoped>
.headerName{
    font-size: 25px;
}

.listIcons{
 width:50px;
  height:50px;
  z-index: 100;
  display: block;
  position: absolute;
  top:30px;
  right:30px;
  display:none;
 

}
.secondNav{
  position:relative;
        width:100%;
        height:35px;
        top:65px;
        right:23%;
        z-index:500;
        display:block;
        animation: sizeNavAnimate 4s;
        background-color:#f6b243;
        color:black;
        padding:10px;
        border:1px solid black;
        text-decoration:none;
}

.container{
    display:grid;
    grid-template-columns:auto auto;
    height:120px;
}
#top-socials{
    justify-self:end; margin-right:20px;
    margin-top:50px;
}
 .firstNav{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    right:50px;
}
.firstNav:hover{
    cursor:pointer;
}
.socialNav{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    right:50px;
}
.socialNav:hover{
    cursor:pointer;
}
body{
    padding:0;
    margin:0;
}
@keyframes sizeNavAnimate {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@media only screen and (min-width:700px){
  .secondNav {
    display:none;
  }
}
@media only screen and (max-width:800px){
  .headerName {
    font-size:25px;
    position: absolute;
    left:5%;
    top:5px;
    display:block;
    font-weight: bold;
  }
    .firstNav{
      text-decoration: none;
    display: inline;
    justify-self:start;
    position: relative;
    padding:10px;
    top:65px;
    right:16%;
}
.socialNav{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    left:15px;
}
 
}
@media only screen and (max-width: 700px) {
  .headerName {
    font-size:20px;
    position: absolute;
    left:5%;
    top:50px;
    display: none;
    font-weight: bold;
  }
  ul{
    text-decoration: none;

  }
    .container{
    display: grid;
    grid-template-columns: auto auto;
    height:80px;
  }


  #top-socials{

}
  .firstNav{
    
    display:none;
}
.socialNav{
  
    display:none;
}
.listIcons{
   width:40px;
  height:40px;
  z-index: 100;
  display: block;
  position: absolute;
  top:20px;
  right:20px;
 
}

  
  .container{
    display: grid;
    grid-template-columns: auto;
    height:80px;
  }
}


</style>
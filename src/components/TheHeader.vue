<template>
  <div class="container">
    <div style=" margin-left:55px;">
   <p class="headerName" >
     K9 DOG TRAINING
   </p>
    <ul style="position:relative; bottom:10px;">
        <li v-for="nav in navItems" @click="navClicked(nav)" :key="nav">{{nav}}</li>

    </ul>
    </div>
    
  <div id="top-socials">
     <ul>
        <li v-for="icon in socialIcons" :key="icon">
            <img @click="socialClicked(icon)" :src="icon" style="width:25px;height:25px;"/>
        </li>

    </ul>
  </div>
    
  </div>
</template>

<script>
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import youtube from '../assets/youtube.png';
export default {
    data(){
        return{
            navItems:['Home','About','Projects','Videos','Gallery','News'],
            socialIcons:[facebook,instagram,tiktok,youtube]
        }
    },
    methods:{
      socialClicked(v){
       if(v.includes(tiktok)){
        console.log(v)
       }
       else if(v.includes(youtube)){
        var anchor = document.createElement('a');
        anchor.href = 'https://www.youtube.com/@novathewonderdog9404';
        anchor.target="_blank";
        anchor.click();

        console.log("You Tube was clicked")
       }
       else if(v.includes(instagram)){
        console.log("Instagram was clicked")
       }
       else if(v.includes(facebook)){
        console.log("Facebook was clicked")
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
.container{
    display:grid;
    grid-template-columns:auto auto;
    height:120px;
}
#top-socials{
    justify-self:end; margin-right:20px;
    margin-top:50px;
}
li{
    text-decoration: none;
    display: inline;
    justify-self:start;
    padding:10px;
    position: relative;
    right:50px;
}
li:hover{
    cursor:pointer;
}
@media only screen and (max-width: 700px) {
  .headerName {
    font-size:25px;
  }
  #top-socials{
    font-size:15px;
    justify-self:start;
    position:absolute;
    top:95px;
    left:13%;
    
        margin-top:0px;

    
  }
  li{
    position: relative;
    right:45px;
    font-size: 15px;
  }
  .container{
    display: grid;
    grid-template-columns: auto;
    height:160px;
  }
}

body{
    padding:0;
    margin:0;
}
</style>
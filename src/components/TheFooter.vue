<template>
  <div>
<footer>
  
<ul>
  
<li v-for="icon in social" :key="icon" @click="footersocial(icon)">
  <img class="footersocial" :src="icon" style="width:25px;height:25px; position:relative; left:95%; top:10px; border:1px solid white; margin:5px; "/>
</li>
  
</ul>
<center> 

  <p style="position:relative; bottom: 35px;">Copyrights &copy. Black Mountain K9 Search and Rescue</p> </center>
</footer>
  </div>
</template>

<script>
import facebook from '../assets/facebook1.png'
import instagram from '../assets/instagram1.png'
import tiktok from '../assets/tiktok1.jpg'
import youtube from '../assets/youtube1.png'
export default {
 data(){
  return{
    social:[facebook, instagram, tiktok, youtube]
  }
  },
  methods:{
    footersocial(v){
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
    }
  
 

}
</script>

<style scoped>
footer{
  height:200px;
  width:100%;
  position: relative;
  top:1250px;
  color:white;
  background-color: black;
  z-index:5000;
}
li{
  text-decoration: none;
  display: block;
  
}
.footersocial:hover{
  cursor:pointer;
}
@media only screen and (max-width:800px) {
  footer{
    position: relative;
    top:2500px;
    z-index:0;
  }
  li{
  text-decoration: none;
  display: inline-block;
  position: relative;
  top:10px;
  left:15%;
  
}
p{
  position: relative;
 
}

}
</style>
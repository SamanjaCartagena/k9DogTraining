

<template>
  <div>
    <nav class="navbar" style='height:100px;' role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" style='font-size: 25px;'>
        Black Mountain Search Rescue
      </a>

      <a class="navbar-item">
        Gallery
      </a>
 <a class="navbar-item">
        News
      </a>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          
          <a class="button " @click="drawer = true" style='background-color:black;'>
            Follow
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<hr style="border:1px solid #d5a341; padding:0px; margin:0px;"/>
  

   <el-drawer  v-model="drawer" title="I am the title" :with-header="false">
         <p style='padding-top:80px; padding-left:40px; font-size:25px; font-family:Times New Roman'><strong>Follow me on</strong></p>
        <button class='iconbtn'><img :src="this.twitter" class='iconimage'/>Twitter</button><br/>
        <button class='iconbtn'><img :src="this.facebook" class='iconimage'/>Facebook</button><br/>
        <button class='iconbtn'><img :src="this.instagram" class='iconimage'/>Instagram</button><br/>
        <button class='iconbtn'><img :src="this.tiktok" class='iconimage'/>Tiktok</button><br/>
                <button class='iconbtn'><img :src="this.pinterest" class='iconimage'/>Pinterest</button><br/>
                                <button class='iconbtn'><img :src="this.linkedin" class='iconimage'/>Linkedin</button><br/>
                                                                <button class='iconbtn'><img :src="this.discord" class='iconimage'/>Discord</button><br/>
        <p style='padding-top:80px; padding-left:40px; font-size:25px; font-family:Times New Roman'><strong>Sign up for my monthly Newsletter</strong></p>
        <input type='email' placeholder='Email' class='emailsignup'/>
         <img :src="this.arrow" style='width:40px;height:40px; position:relative; left:50px;; top:50px;border:1px solid #d5a341'/>

  </el-drawer>
  </div>
</template>

<script>
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import tiktok from '../assets/tiktok.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import pinterest from '../assets/pinterest.png'
import arrow from '../assets/arrow.png'
import discord from '../assets/discord.png'
export default {
  data(){
    return{
      drawer:false,
      twitter:twitter,
      facebook:facebook,
      tiktok:tiktok,
      instagram:instagram,
      linkedin:linkedin,
      pinterest:pinterest,
      arrow:arrow,
      discord:discord

    }
  }

}
</script>

<style scoped>

.navbar{
    background-color: black;
    color:white;
}
.navbar:hover{
     text-decoration:#d5a341 ;

}
a{
    color:#d5a341;
}
a:hover{
    color:#d5a341;
    text-decoration: underline;
    background-color: black;
}
.navbar-item{
  background-color: black;
  color:#d5a341;
  font-family: 'Times New Roman', Times, serif;
}
.navbar-item:hover{
  background-color: black;
  color:#d5a341;
}
.iconbtn{
    margin:10px;
    background-color: black;
    width:250px;
    height:60px;
    color:#d5a341;
    padding:10px;
    border:.5px solid #d5a341;
    border-radius:3px;
    font-size: 20px;
}
.iconbtn:hover{
    background-color: white;
    color:black;
    cursor: pointer;
}
.iconimage{
    width:25px;
    height:25px;
    float:left;
    
   
}
.emailsignup{
    border:0px;
    border-bottom:2px solid #d5a341;
    width:250px;
    position: relative;
    left:40px;
    top:20px;
    height:40px;

}
</style>
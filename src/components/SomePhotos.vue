<template>
<div class="pics">
<div class="columns" v-if='!picset1'>
  <div class="column">
    <img :src="this.pic24"  class='images' />
  </div>
  <div class="column">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/uZqDGzDl1iM?si=e07GehfTTUIkU4eW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
  <div class="column">
    <div id='previous' @click='previous'>Previous</div>
    <img :src="this.pic3" class='images'/>
        <div id='next' @click='next'>Next</div>

  </div>
  <div class="column">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/dSCYRs8OT9o?si=CKfh4fIWwlKRppig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
</div>
<div class="columns" v-else>
  <div class="column">
    <img :src="this.pic20"  class='images' />
  </div>
  <div class="column">
    <img :src="this.pic21"  class='images' />
  </div>
  <div class="column">
    <div id='previous' @click='previous'>Previous</div>
    <img :src="this.pic22" class='images'/>
        <div id='next' @click='next'>Next</div>

  </div>
  <div class="column">
        <img :src="this.pic23" class='images'/>


</div>
</div>
<div class="columns">
  <div class="column">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/gzwmmT78qZ8?si=e0JCd2KYmvxsuCbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
  <div class="column">
    <img :src="this.pic6" class='images'/>
  </div>
  <div class="column">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/tMAWaYJoKzo?si=3C3PDnh31k0J-1-r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
  <div class="column">
    <img :src="this.pic8" class='images'/>
  </div>
</div>
</div>

</template>

<script>
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
import pic7 from '../assets/pic7.jpg'
import pic8 from '../assets/pic8.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic13 from '../assets/pic13.jpg'
import pic14 from '../assets/pic14.jpg'
import pic12 from '../assets/pic12.jpg'
import pic15 from '../assets/dog3.jpg'
import pic20 from '../assets/pic20.jpg'
import pic21 from '../assets/pic21.jpg'
import pic22 from '../assets/pic22.jpg'
import pic23 from '../assets/pic23.jpg'
import pic24 from '../assets/pic24.jpg'
import veteran from '../assets/veterans.jpg'
export default {
  data(){
    return{
        pic1:pic1,
        pic2:pic2,
        pic3:pic3,
        pic4:pic4,
        pic5:pic5,
        pic6:pic6,
        pic7:pic7,
        pic8:pic8,
        pic9:pic9,
        pic10:pic10,
        pic13:pic13,
        pic14:pic14,
        pic20:pic20,
        pic21:pic21,
        pic22:pic22,
        pic23:pic23,
        pic24:pic24,
        picset1:false
    }
  },
  methods:{
    modals(v){
     console.log("The value is "+v)
    },
    previous(){
         if(this.picset1==false){
          this.picset1=true;
         }
         else if(this.picset1==true){
          this.picset1=false;
         }
    },
     next(){
         if(this.picset1==false){
          this.picset1=true;
         }
         else if(this.picset1==true){
          this.picset1=false;
         }
    }

      }
}
</script>

<style scoped>
.pics{
  position: relative;
  top:740px;
  background-color: black;
  height:auto;
  width:100%;
  z-index: 1000;

    
}
#previous{
  background-color: black;
  color:white;
  height:50px;
  width:80px;
  z-index: 1000;
  position:absolute;
  top:150px;
  left:0px;
  padding-top:10px;
  padding-left:10px;
  opacity: .5;
}
#previous:hover{
  cursor:pointer;
}
#next{
  background-color: black;
  color:white;
  height:50px;
  width:80px;
  z-index: 1000;
  position:absolute;
  top:150px;
  right:0px;
  padding-top:10px;
  padding-left:10px;
  opacity: .5;
}
#next:hover{
  cursor:pointer;
}
iframe{
  border:1px solid #d5a341;
}
.column{
  margin:0px;
  padding:0px;
}
.columns{
  position: relative;
  bottom:10px;
  margin:0px;
  padding:0px;
}
.images{
  width:100%;
  height:350px;
  border:1px solid #d5a341;
  border-radius: 3px;
  animation: fade 1s;
}
@keyframes fade {
  from {opacity:.5}
  to {opacity: 1;}
}
.images:hover{
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
.pics{
  position: absolute;
  top:490px;


  height:auto;
  width:100%;
  z-index: 1000;
 
    border-bottom:2px solid #d5a341 ;

    
}
.images{
  width:100%;
  height:300px;
 margin:0px;
 padding:0px;
 border:1px solid #d5a341;
}
.column{
  margin:0px;
  padding:0px;
}
.columns{
  margin:0px;
  padding: 0px;
}
}


</style>
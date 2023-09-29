<template>
  <div class='gallerypage'>
   <div class='columns'>
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images image1' />

    
  </div>

</div>
    </div>
  




  
    <div class='column'>
          <div class="card logocard" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.black"  class="logoImage"/>


    
  </div>

</div>
    </div>
    
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic31"  class='images' />

    
  </div>

</div>
    </div>
   </div>
      <div class='columns'>
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic32"  class='images' />

    
  </div>

</div>
    </div>
  
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic45"  class='images' />

    
  </div>

</div>

   </div>   
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic34"  class='images' />

    
  </div>

</div>
    </div>
    
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic43"  class='images' />

    
  </div>

</div>
    </div>
   </div>
      <div class='columns'>
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic36"  class='images' />

    
  </div>

</div>
    </div>
  
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic25"  class='images' />

    
  </div>

</div>

   </div>   
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic14"  class='images' />

    
  </div>

</div>
    </div>
    
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic27"  class='images' />

    
  </div>

</div>
    </div>
   </div>
      <div class='columns'>
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic28"  class='images' />

    
  </div>

</div>
    </div>
  
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic26"  class='images' />

    
  </div>

</div>

   </div>   
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic40"  class='images' />

    
  </div>

</div>
    </div>
    
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic44"  class='images' />

    
  </div>

</div>
    </div>
   </div>
  <el-carousel :interval="4000" type="card" height="700px" >
    <el-carousel-item v-for="pic in pics" :key="pic.id">
     <img :src="pic" style='height:100%; width:100%'/>
    </el-carousel-item>
  </el-carousel>
  <footer-page class='galleryfooter'></footer-page>
  </div>
</template>

<script>
import pic20 from '../assets/pic20.jpg';
import pic21 from '../assets/pic21.jpg';
import pic22 from '../assets/pic22.jpg';
import pic26 from '../assets/pic26.jpg';
import pic31 from '../assets/pic31.jpg';
import pic32 from '../assets/pic32.jpg';
import pic33 from '../assets/pic33.jpg';
import pic34 from '../assets/pic34.jpg';
import pic35 from '../assets/pic35.jpg';
import black from '../assets/black.png';
import pic36 from '../assets/pic36.jpg';
import pic25 from '../assets/pic25.jpg';
import pic28 from '../assets/pic28.jpg';
import pic14 from '../assets/pic14.jpg';
import pic27 from '../assets/pic27.jpg';
import pic40 from '../assets/pic40.jpg';
import pic43 from '../assets/pic43.jpg';
import pic44 from '../assets/pic44.jpg';
import pic45 from '../assets/pic45.jpg';
import FooterPage from '../components/FooterPage.vue';;
export default {
      components:{FooterPage},
  data(){
    return{
      pic20:pic20,
      pic21:pic21,
      pic22:pic22,
      pic31:pic31,
      pic32:pic32,
      pic33:pic33,
      pic34:pic34,
      pic35:pic35,
      pic36:pic36,
      pic25:pic25,
      pic14:pic14,
      pic26:pic26,
      pic27:pic27,
      pic28:pic28,
      pic40:pic40,
      pic43:pic43,
      pic44:pic44,
      pic45:pic45,
      black:black,
      pics:[pic20,pic21,pic31,pic32,pic33,pic34]
    }
  },
  created(){
  


  }

}
</script>

<style scoped>
.gallerypage{
  width:100%;
  height:auto;
  background-image: url('../assets/background.jpg');
  background-size: 100%;
  background-repeat: repeat-y;
  border-top:.75px solid #d5a341;

}
.galleryfooter{
      position: relative;
      bottom:720px;
}


.el-carousel__item:nth-child(2n) {
 border:2px solid white;
}

.el-carousel__item:nth-child(2n + 1) {
 border:2px solid white;
}
.images{
  width:100%;
  height:400px;
 margin:0px;
 padding:0px;
 border:3px solid white;
}
.logoImage{
  position: relative;
   left:25%;
   bottom:60px;
    text-align: center;   
    height:200px;
    width:200px;
    font-size: 50px;
    z-index: 100;
    border:5px solid white;
    border-radius:50%;
       animation: spin 4s;
}
.images:hover{
      cursor: pointer;
}
@media only screen and (max-width: 700px) {
      .image1{
            position: relative;
            top:30px;
      }
.logocard{
      height:0px;
}
.logoImage{
 position: relative;
bottom:590px;
 left:2%;
    height:100px;
    width:100px;
    font-size: 50px;
    z-index: 100;
    border-radius:50%;
       animation: spin 4s;
}
.el-carousel {
      height:400px;
      width:100%;
      
}
.el-carousel__item{
      height:400px;
      width: 100%;
}

.galleryfooter{
    position: relative;
    bottom:3150px;
    z-index: 1000;
     
}


}
</style>
<template>
  <div class='gallerypage'>
   <div class='columns'>
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
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
        <img :src="this.pic33"  class='images' />

    
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
        <img :src="this.pic35"  class='images' />

    
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
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>

   </div>   
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>
    </div>
    
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>
    </div>
   </div>
      <div class='columns'>
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>
    </div>
  
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>

   </div>   
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>
    </div>
    
    <div class='column'>
          <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images' />

    
  </div>

</div>
    </div>
   </div>
  <el-carousel :interval="4000" type="card" height="600px" >
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import pic20 from '../assets/pic20.jpg';
import pic21 from '../assets/pic21.jpg';
import pic22 from '../assets/pic22.jpg';
import pic31 from '../assets/pic31.jpg';
import pic32 from '../assets/pic32.jpg';
import pic33 from '../assets/pic33.jpg';
import pic34 from '../assets/pic34.jpg';
import pic35 from '../assets/pic35.jpg';
import black from '../assets/black.png';
import pic36 from '../assets/pic36.jpg';
export default {
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
      black:black
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

}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.images{
  width:100%;
  height:400px;
 margin:0px;
 padding:0px;
 border:1px solid #d5a341;
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
@media only screen and (max-width: 700px) {

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

}
</style>
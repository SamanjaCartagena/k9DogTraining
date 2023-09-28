<template>
  <div class='gallerypage'>
    <div class="columns" >
  <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images image1' />

    
  </div>

  </div>
  </div>
  <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic21"  class='images image2' />

  </div>

  </div>
  </div>
  <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images image3' />

    
  </div>

  </div>
  </div>
  <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images image4' />

    
  </div>

  </div>
  </div>
    </div>
     <div class="columns" >
  <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">

    
  </div>

  </div>

  </div>
    <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images oddone' />

    
  </div>

  </div>
  
  </div>
    <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images evenone' />

    
  </div>

  </div>
  
  </div>
    <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">

    
  </div>

  </div>
  
  </div>
     </div>
      <div class="columns" >
  <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images evenone' />

    
  </div>

  </div>

  </div>
    <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">

    
  </div>

  </div>
  
  </div>
    <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">

    
  </div>

  </div>
  
  </div>
    <div class="column">
    <div class="card" style='background-color:transparent'>
  <div class="card-content">
        <img :src="this.pic20"  class='images evenone' />

    
  </div>

  </div>
    </div>
      </div>
  </div>
</template>

<script>
import pic20 from '../assets/pic20.jpg';
import pic21 from '../assets/pic21.jpg'
export default {
  data(){
    return{
      pic20:pic20,
      pic21:pic21
    }
  },
  created(){
  


  }

}
</script>

<style scoped>
.gallerypage{
  width:100%;
  height:1400px;
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
.images{
  width:100%;
  height:350px;
  border:1px solid #d5a341;
  border-radius: 3px;

}
.image2{
  animation: animate 10s infinite;
}
@keyframes animate {
  from{
    opacity: 0%;

  }
  to{
    opacity:100%;

  }
  
}

.image3{
  display: none;
}
</style>
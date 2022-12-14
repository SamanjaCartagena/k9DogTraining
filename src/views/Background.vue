<template>
  <div class="firstBackground">
    <div class="backgroundDog">
   <img :src="image1" class="img1"/>
  
  </div>
  <div class="secondNav">
    <ul>
     <li v-for="item in nav2Items" :key="item.id">{{item}}</li>
   </ul>
  </div>
  </div>
</template>

<script>
import image1 from '../assets/dog1.jpg';
export default {
    data(){
        return {
            image1,
            nav2Items:['projectNova','aboutNova','AboutUs'],
        }
    }

}
</script>

<style scoped>
.firstBackground{
    display: grid;
    grid-template-columns: auto;

}
li{
    z-index: 100;
    background-color: blue;
    width:100%;
    height:auto;
    color:black;
}
.secondNav{
    position:absolute;
    top:150px;
    left:40%;
    background-color:transparent;
    width:100%;
    height:auto;
    overflow: hidden;
        animation: animate 2s ;
}
 @keyframes animate {
        0% {
            width: 0px;
            height: 0px;
        }
        30% {
            width: 50px;
            height: 0px;
        }
        60% {
            width: 50px;
            height: 80px;
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
@media only screen and (max-width: 400px) {


}


</style>
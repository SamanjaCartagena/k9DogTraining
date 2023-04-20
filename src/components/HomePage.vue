<template>
  <div class="completeContainer">
   <the-header></the-header>

   <background>


   </background>
    <br/>
    <br/>

  </div >
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Background from '../views/Background.vue'
import SomePhotos from '../components/SomePhotos.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
 components:{
    TheHeader, Background, SomePhotos, TheFooter
 },
 methods:{

 }
}
</script>

<style>
.findMore{
    color:#fff;
    z-index:120;
    position: absolute;
    top:600px;
    left:46%;
    font-size: 25px;
    padding:10px;
    width:180px;
}
.findMore:hover{
    background-color: #f6b243;
    color:black;
    cursor: pointer;
    border-radius:.5px;
    border: 1px solid black;
}
.completeContainer{

}
@media only screen and (max-width:800px) {
 .completeContainer{
  display: grid;
  grid-template-columns: auto;
 }
}
</style>
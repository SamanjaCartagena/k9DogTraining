<template>
  <div class="completeContainer">

   <background>


   </background>
    <br/>
    <br/>

  </div >
</template>

<script>
import Background from '../views/Background.vue'
import SomePhotos from '../components/SomePhotos.vue'
export default {
 components:{
    Background, SomePhotos 
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

</style>
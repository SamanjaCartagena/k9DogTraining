<template>
  <div id="founder">
 <p class="about">
 <strong>   My name is Chris Marshman I am a retired US Airforce Officer, an ex deputy sherriff of the Los Angeles Police Department, an independent filmmaker and a dog lover. 
    I love America and I will do anything to help this great nation and its people. K9 Search and Rescue has so far helped hundreds of people. My goal is to blank, blank, blank
    
 </strong>  </p>
 <img :src="this.pic" style="width:400px;height:400px; float:right;margin-right:40px; margin-top:20px;border:.1px solid white"/>
  </div>
</template>

<script>
import chris from '../assets/chris.jpg'
export default {
  data(){
    return {
        pic:chris
    }
  }

}
</script>

<style scoped>
#founder{
    height:450px;
    width:100%;
    z-index: 5000;
    position: relative;
    top:130px;
    background-image: url('../assets/mountains.jpg');
    border-top:.1px solid white;
    border-bottom:.1px solid white;
    color:black;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100%;
}
.about{
    padding:10px;
        font-size: 20px;
        float:left;
        width:65%;
        height:80%;
        margin-left:40px ;

}
</style>
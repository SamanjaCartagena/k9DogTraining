<template>
  <div class="pics">
    <center>
 
  <ul>
    <li v-for="pic in pics" :key="pic.id">

    <img class="dogPics" :src="pic" />
    </li>
  </ul>
 
    </center>
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
import veteran from '../assets/veterans.jpg'
export default {
  data(){
    return{
        pics:[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic14,pic13,pic12,pic15,veteran],
        picAlter:[pic10,pic2,pic4,pic3,pic6,pic5,pic8,pic7,pic9,pic1]
    }
  }
}
</script>

<style scoped>
.pics{
 height:850px;
 width:100%;
 position:relative;
 top:130px;
z-index:0;
background-image: url('../assets/bald.jpg');
background-repeat: no-repeat;
background-size: 100%;
border-top:1px solid white;

    
}

.dogPics{
  width:300px; height:250px;  border:.1px solid white;
    border-radius:.05px;
    margin:10px;
    z-index:0;
}

li{
    display: inline;
    margin:10px;
  
}
@media only screen and (max-width:800px) {
.pics{
 height:500px;
 width:100%;
 position:relative;
 top:2450px;

 background-color: black;
    
}

}

</style>
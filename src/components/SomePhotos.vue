<template>
<div class="pics">
<div class="columns">
  <div class="column">
    <img :src="this.pic1"  class='images' />
  </div>
  <div class="column">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/uZqDGzDl1iM?si=e07GehfTTUIkU4eW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
  <div class="column">
    <img :src="this.pic3" class='images'/>
  </div>
  <div class="column">
<iframe width="100%" height="350" src="https://www.youtube.com/embed/dSCYRs8OT9o?si=CKfh4fIWwlKRppig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>
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
        pic14:pic14
    }
  },
  methods:{
    modals(v){
     console.log("The value is "+v)
    }
  }
}
</script>

<style scoped>
.pics{
  position: relative;
  top:753px;
  height:auto;
  width:100%;
  z-index: 1000;
    border-bottom:2px solid #d5a341 ;

    
}
iframe{
  border:1px solid #d5a341;
}
.column{
  margin:0px;
  padding:0px;
}
.columns{
  margin:0px;
  padding:0px;
}
.images{
  width:100%;
  height:350px;
  border:1px solid #d5a341;
  border-radius: 3px;

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
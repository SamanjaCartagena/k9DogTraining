<template>
<div style="height:1000px; width:100%">
   
<div>
   <center>   
    <ul>
   <!--  <li v-for="photo in photos" :key="photo.id">
      <img :src="photo" style="width:600px; height:600px;"/>
     </li> !-->
    </ul>
    

   </center>
</div>
<some-photos></some-photos>
<second-middle></second-middle>
<br/>
<center>
  
   
  <div class="videos">
    <div  style="width:100%; height:250px; color:white; padding-top:10px" >
        
  <iframe  width="60%" height="400" src="https://www.youtube.com/embed/uZqDGzDl1iM"  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
    <div style="width:100%; height:250px; color:white;">
      <p style=" font-size:30px; color:#f6b243;" class="videoTitles">Big Day</p>
      <p style="padding:20px; font-size:25px;"> A human's nose is approximately 5 million neurons that lets us smell our environment. <br/>A dog has approximately 
        200 million neurons dedicated to small. We can't just compete in the area of smelling.
      </p>
    </div>
    
    
      <div style="width:100%; height:250px; color:white;" >
      <p style="padding:10px; font-size:30px; color:#f6b243;" class="videoTitles"><strong>How to train a search dog</strong></p>
         <p style="padding:20px; font-size:25px;">A trained search dog can replace 20 to 30 human searchers on foot. There are a variety of ways a trained search dog works ! Be it tracking trailing or 
          airscent. Any of them is far superior to anything a human can do. Bottom line is a search dog can smell your odor that is yours alone, just like a finger print.
      </p>
    </div>
        <div style="width:100%; height:250px; color:white; position:relative; bottom:20px; padding-bottom:10px"  >
        
  <iframe width="60%" height="400" src="https://www.youtube.com/embed/A-UH1FV0qXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </div>
  
  </div>
</center>

</div>
</template>

<script>
import brochure from '../assets/brochure1.jpg'
import brochure2 from '../assets/brochure2.jpg'
import SomePhotos from '../components/SomePhotos.vue'
import SecondMiddle from './SecondMiddle.vue'

export default {
  
  components:{SomePhotos, SecondMiddle},
    data(){
        return{
            searchVideos:'',
           photos:[brochure, brochure2]
          
        }
    }, 
    computed:{
     
    },
    methods:{
      
    }
    

}
</script>

<style scoped>
li{
  display: inline;
  position: relative;
  bottom: 100px;
}
.videoTitles{
  color:white
}

#videoContainer{
     
}
.videos{
    position: relative;
      display: grid;
      height:800px;
      width:100%;
      grid-template-columns: auto auto ;
     top:110px;
   z-index:100;
   background-image: url('../assets/stars.webp');
   background-repeat: none;
   background-size: 100%;
 border-top: .1px solid white;
 border-bottom:.1px solid white;

}
iframe{
    margin:10px;
    justify-content:end;
    
}
@media only screen and (max-width:900px) {
      .searchBar{
 
   text-align: center;
  position:relative;
  top:50px;
  border-radius:0.8;
  left:9%;
  width:80%;
 top:50px;
 z-index:200;

   
}

#videoContainer{
   width:100%;
   height:100%;
  
}
iframe{
   width:90%;
   height:300;
   

}
}
@media only screen and (max-width:800px) {
  .videos{
    margin:10px;
   width:100%;
 
   display:grid;
   grid-template-columns:auto auto;
     
}
iframe{
   width:95%;
   height:300;
   

}
}

@media only screen and (max-width:700px) {
   .searchBar{
 
   text-align: center;
  position:relative;
  border-radius:0.8;
  left:20%;
  width:80%;
  bottom:200px;
 z-index:200;

   
}
    .videos{
    margin:10px;
   width:100%;
   display:grid;
   grid-template-columns:auto;
     
 
   
}
#videoContainer{
   width:100%;
   height:100%;
  
}
iframe{
   width:90%;
   height:300;
   

}
}
@media only screen and (max-width:500px) {
   .searchBar{
  
   text-align: center;
  position:relative;
  border-radius:0.8;
  width:60%;
  
 z-index:200;

   
}
  .videos{
    margin:10px;
   width:100%;
   display:grid;
   grid-template-columns:auto;
 position:relative;
  border-radius:0.8;
   width:98%;
   bottom:120px;
  z-index:200;  
   
}
#videoContainer{
   width:100%;
   height:100%;
  
}
iframe{
   width:90%;
   height:300;
   

}

}


</style>
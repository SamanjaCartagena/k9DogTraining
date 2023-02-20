<template>
<div style="height:1000px; width:100%">
   <div>
   
  </div>
<div>
   <center>
    <img :src="this.photo" style="width:40%; height:600px;" />
        <img :src="this.photo2" style="width:40%; height:600px;" />

   </center>
</div>
<some-photos></some-photos>
<br/>
<center>
  
   
  <div class="videos">
    <div  style="width:100%; height:250px; color:white;" >
        
  <iframe  width="60%" height="400" src="https://www.youtube.com/embed/uZqDGzDl1iM"  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
    <div style="width:100%; height:250px; color:white;">
      <h3 class="videoTitles">Big Day</h3>
      <p > A human's nose is approximately 5 million neurons that lets us smell our environment. <br/>A dog has approximately 
        200 million neurons dedicated to small. We can't just compete in the area of smelling.
      </p>
    </div>
    
    
      <div style="width:100%; height:250px; color:white;" >
      <h3 class="videoTitles">Big Day</h3>
         <p > A human's nose is approximately 5 million neurons that lets us smell our environment. <br/>A dog has approximately 
        200 million neurons dedicated to small. We can't just compete in the area of smelling.
      </p>
    </div>
        <div style="width:100%; height:250px; color:white; position:relative; bottom:20px"  >
        
  <iframe  width="60%" height="400" src="https://www.youtube.com/embed/rR5JZ0cbAsQ"  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
  
  </div>
</center>

</div>
</template>

<script>
import brochure from '../assets/brochure1.jpg'
import brochure2 from '../assets/brochure2.jpg'
import SomePhotos from '../components/SomePhotos.vue'
export default {
  
  components:{SomePhotos},
    data(){
        return{
            searchVideos:'',
            photo:brochure,
            photo2:brochure2,
          
        }
    }, 
    computed:{
     
    },
    methods:{
      
    }
    

}
</script>

<style scoped>

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
   top:-20px;
   z-index:100;
   background-color: black;
 

}
iframe{
    margin:10px;
    justify-content:end;
    
}
@media only screen and (max-width:900px) {
      .searchBar{
 
   text-align: center;
  position:relative;
  border-radius:0.8;
  left:9%;
  width:80%;
 top:50px;
 z-index:200;

   
}
  .videos{
    margin:10px;
   width:100%;
   position: relative;
   top:50px;
   left:7%;
   display:grid;
   grid-template-columns:auto auto;
     
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

@medi
    SomePhotosa only screen and (max-width:700px) {
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
<template>
  <div class="videos">

    <div v-for="vid in videos" :key="vid" id="videoContainer" >
        
  <iframe  width="90%" height="315" :src="vid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
            videos:['https://www.youtube.com/embed/uZqDGzDl1iM?autoplay=1&mute=1','https://www.youtube.com/embed/rR5JZ0cbAsQ?autoplay=1&mute=1',
            'https://www.youtube.com/embed/gzwmmT78qZ8?autoplay=1&mute=1','https://www.youtube.com/embed/HmUPaHuYxOM?autoplay=1&mute=1','https://www.youtube.com/embed/rlQOFIuco8Q?autoplay=1&mute=1',
            'https://www.youtube.com/embed/r6LsZZW-pEg?autoplay=1&mute=1','https://www.youtube.com/embed/A-UH1FV0qXI?autoplay=1&mute=1','https://www.youtube.com/embed/K66v5CpKUXM?autoplay=1&mute=1']
        }
    }
    

}
</script>

<style scoped>

#videoContainer{
     
}
.videos{
    margin:10px;
    position: relative;
      display: grid;
      grid-template-columns: auto auto auto auto;
   top:-110px;
   z-index:100;
 

}
iframe{
    margin:10px;
    justify-content:end;
    
}
@media only screen and (max-width:700px) {
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
</style>
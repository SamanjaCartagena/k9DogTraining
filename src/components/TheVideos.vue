<template>
<div>
   <center>
      <div class="searchInputs">
      <input type="search" class="searchBar" v-model="searchVideos" placeholder="Search Videos" />
      </div>
   </center>

<center>
   
  <div class="videos">
    <div v-for="vid in filteredVideos.slice(0,8)" :key="vid" id="videoContainer" >
        
  <iframe  width="90%" height="315" :src="vid.vid"  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    </div>
  </div>
</center>

</div>
</template>

<script>
export default {
    data(){
        return{
            searchVideos:'',
            videos:[
                {
                  id:1,
                  title:'Search and rescue finals',
                  vid:'https://www.youtube.com/embed/uZqDGzDl1iM'
                },
                {
                  id:2,
                  title:'Big Test Day',
                  vid:'https://www.youtube.com/embed/rR5JZ0cbAsQ'
                },
                 {
                  id:3,
                  title:'A Day in the Mountains',
                  vid:'https://www.youtube.com/embed/dSCYRs8OT9o'
                },
                {
                  id:4,
                  title:'New Place',
                  vid:'https://www.youtube.com/embed/A-UH1FV0qXI'
                },
                {
                  id:5,
                  title:'Meet Ollie, the K9 Sar Newbie',
                  vid:'https://www.youtube.com/embed/gzwmmT78qZ8'
                },

               {
                  id:6,
                  title:'Nova Schools the NewBees',
                  vid:'https://www.youtube.com/embed/tMAWaYJoKzo'
                },
                {
                  id:7,
                  title:'Novas First Search',
                  vid:'https://www.youtube.com/embed/r6LsZZW-pEg'
                },
                {
                  id:8,
                  title:'Searching searching',
                  vid:'https://www.youtube.com/embed/rlQOFIuco8Q'
                },
               ]
        }
    }, 
    computed:{
      filteredVideos(){
         return this.videos.filter(video=>video.title.includes(this.searchVideos))
      }
    }
    

}
</script>

<style scoped>
.searchBar{
   background-image:url('../assets/search.png');
   background-repeat:no-repeat;
   background-size:3%;
   background-position-x: 1%;
   background-position-y: 50%;
   text-align: center;
  position:relative;
  border-radius:0.8;
  width:30%;
  bottom:100px;
 z-index:200;

   
}
.searchInputs{
   display: flex;
   justify-content: center;
}

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
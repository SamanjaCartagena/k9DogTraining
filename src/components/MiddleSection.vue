<template>
  <div id="founder" has-text-centered	>
 <p class="about"> Black Mountain K9 Search and Rescue was created to Assist families in finding individuals, using trained and certified dogs. This solely volunteer 501(c)3
    organization offers their search and rescue trained dogs and handler services at no charge to the public, law enforcements and other search and rescue organizations<br/>
    
  Call us at 702-512-7359 
   Email us at blackmountaink9.sar@usa.com <br/>
  Visit us at blackmountaink9.com</p>
  </div>
</template>

<script>
export default {


}
</script>

<style scoped>
#founder{
    height:500px;
    width:100%;
    z-index: 5000;
    position: relative;
    top:730px;
    background-image: url('../assets/yosemite.jpg');
    border-top:2px solid #d5a341 ;
    border-bottom:2px solid #d5a341 ;
    color:#d5a341 ;
    text-align: center;
    background-repeat: no-repeat;
    background-size: 100%;
}
.about{
    font-style:italic;
    padding:10px;
        font-size: 25px;

}
@media only screen and (max-width: 700px) {
#founder{
    height:auto;
    width:100%;
    z-index: 5000;
    position: absolute;
    top:300px;
    background-image: url('../assets/yosemite.jpg');
    background-size: 100%;
    border-top:2px solid #d5a341 ;
    border-bottom:2px solid #d5a341 ;
    color:#d5a341 ;
   
    background-repeat: no-repeat;
    background-size: 110%;
}
.about{
    padding:10px;
        font-size: 15px;

}

}
</style>
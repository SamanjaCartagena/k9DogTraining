<template>
  <div class="completeContainer">
   <the-header></the-header>
   <background></background>
   <some-photos ></some-photos>
   <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import Background from '../views/Background.vue'
import SomePhotos from '../components/SomePhotos.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
 components:{
    TheHeader, Background, SomePhotos, TheFooter
 }
}
</script>

<style>
.completeContainer{

}
@media only screen and (max-width:800px) {
 .completeContainer{
  display: grid;
  grid-template-columns: auto;
 }
}
</style>
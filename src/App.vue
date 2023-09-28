<script setup>
import Background from "./views/Background.vue"
import TheHeader from "./components/TheHeader.vue"

  


  components: { TheHeader,Background }</script>

<template>

  <div>
    <the-header></the-header>
  <router-view></router-view>
  
  </div>
</template>

<style >
@import 'bulma/css/bulma.min.css';


body{
  padding:0;
  margin:0;
  font-family:'Didact Gothic';


}
#app{
  padding:0;
  margin:0;
}

</style>

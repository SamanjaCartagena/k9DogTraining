<script setup>
import Background from "./views/Background.vue"
import TheHeader from "./components/TheHeader.vue"

  


  components: { TheHeader,Background }</script>

<template>

  <div>
    <the-header></the-header>
    <background></background>
  
  </div>
</template>

<style >



body{
  padding:0;
  margin:0;
}
#app{
  padding:0;
  margin:0;
}

</style>

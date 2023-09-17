<template>
  <div>
   <footer class="footer" style='background-color:black;
   color:white'>
  <div class="content has-text-centered">
    <p style='color:white'>
      Copyrights &copy Black Mountain K9 Search and Rescue
    </p>
  </div>
</footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    position: relative;
    top:740px;
    background-color: black;
    z-index: 1000;
    color:#d5a341;
}
@media only screen and (max-width: 700px) {
.footer{
    position: absolute;
    top:3150px;
    background-color: black;
    font-size: 15px;
    color:#d5a341;
}

}
</style>
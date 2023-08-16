<template>
<div>
  <div class="screen-size">  
    <nav>
      <the-header></the-header>
      
    </nav>
  </div>
  
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  /* background-color: #e4e4e4; */
}
.screen-size{
  @apply px-6 py-6
}

@screen lg{
  .screen-size{
    @apply py-6 px-20
  }
}
</style>

<script>
import TheHeader from './components/TheHeader.vue';
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  components : {
    TheHeader,
  }
}
</script>

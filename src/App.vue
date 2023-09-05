<template>
<hello-world>
<div>
  <div class="screen-size">  
    <nav>
      <the-header></the-header>
      
    </nav>
  </div>
  
  </div>
  </hello-world>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
 
  
}
.screen-size{
  @apply px-6 py-6
}

@screen lg{
  .screen-size{
    @apply py-6 px-16
  }
}
@screen xl{
  .screen-size{
    @apply py-6 px-60
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

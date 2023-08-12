<template>
<div>
<particles-background class="">
  <div class="py-4 px-20">  
    <nav>
      <the-header></the-header>
      
    </nav>
  </div>
  </particles-background>
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

</style>

<script>
import TheHeader from './components/TheHeader.vue';
import ParticlesBackground from './components/ParticlesBackground.vue'
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  components : {
    TheHeader,
    ParticlesBackground,
    // HelloWorld
  }
}
</script>

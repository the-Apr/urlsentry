<template>
  <div class="py-4 px-20">
    <nav>
      <the-header></the-header>
      
    </nav>
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

export default {
  components : {
    TheHeader
  }
}
</script>

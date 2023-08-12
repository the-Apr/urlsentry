<template>
  <button :class= 'mode'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style scoped>
  button{
    @apply py-1 px-4 bg-purple-800 border-solid border-2 border-purple-800 text-white
    cursor-pointer rounded-3xl mr-3;
  }

  button:hover,
  button:active{
    @apply bg-purple-900 border-purple-900;
  }

  .flat{
    @apply bg-transparent text-purple-800 border-none;
  }

  .flat:hover,
  .flat:active{
   background-color: #edd2ff;
  }

</style>
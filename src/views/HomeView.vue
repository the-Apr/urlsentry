<template>
  <div class="home">
    <div class="grid grid-cols-6 gap-y-12 gap-x-8 items-center mt-40 justify-items-center">
      <div class="col-span-6">
        <h1 class=" dispOne mb-2">One click away from spotting that phishing link</h1>
        <h1 class="text-2xl tracking-widest leading-normal">Stay safeguarded from scammers!</h1>
      </div>
      <search-link class="col-span-6 lg:col-start-2 lg:col-span-4"></search-link>
      <div class="col-span-2 ">
        <img src="../assets/shouldI.png" alt="a man in dilemma" class="max-w-full max-h-full transform scale-150">
      </div>
      <div class="col-span-4">
        <h1 class="font-bold text-5xl tracking-wide leading-normal">Doubting that Link?</h1>
        <h1 class="font- text-2xl tracking-widest leading-normal">Might be a phishing link.</h1>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchLink from '@/components/SearchLink.vue'

export default {
  name: 'HomeView',
  components: {
    SearchLink
  }
}
</script>

<style scoped>
  .dispOne{
    @apply tracking-wider leading-normal
  }

  @screen md{
    .dispOne {
      @apply font-bold text-2xl
    }
  }
  @screen lg{
    .dispOne {
      @apply font-bold text-4xl
    }
  }
</style>

<template>
  <div class="home">
    <section class="grid grid-cols-6 gap-y-8 md:gap-y-12 gap-x-8 items-center mt-8 justify-items-center mb-16 lg:mb-32">
      <div class="lg:col-span-2 col-span-6 lg:flex lg:flex-col-reverse transform lg:hover:scale-150">
        <img src="../assets/shouldI.png" alt="a man in dilemma" class="w-9/12 lg:w-full h-auto mx-auto">
      </div>
      <div class="lg:col-span-4 col-span-6">
        <h1 class="font-bold text-lg md:text-5xl tracking-wide leading-normal">Doubting that Link?</h1>
        <h1 class="text-base md:text-2xl tracking-widest leading-normal">Might be a phishing link.</h1>
      </div>
      <search-link class="col-span-6 lg:col-start-2 lg:col-span-4"></search-link>
      <div class="col-span-6">
        <h1 class=" dispOne mb-2">One click away from spotting that phishing link</h1>
        <h1 class="dispTwo">Stay safeguarded from scammers!</h1>
      </div>
      
    </section>
    <section>
      <faq-list></faq-list>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchLink from '@/components/SearchLink.vue';
import FaqList from '@/components/FaqList.vue';

export default {
  name: 'HomeView',
  components: {
    SearchLink,
    FaqList
  }
}
</script>

<style scoped>
  .dispOne{
    @apply tracking-wider leading-normal font-bold text-lg
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

  .dispTwo{
    @apply text-base tracking-widest leading-normal
  }

  @screen md{
    .dispTwo {
      @apply text-2xl
    }
  }
</style>

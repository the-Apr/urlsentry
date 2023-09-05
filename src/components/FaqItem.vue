<template>
  <li class="grid grid-cols-12">
    <div class="grid  col-span-12 grid-cols-12 border-t md:border-t-2 items-center p-4 transition-all hover:bg-bkup-blue" 
    :class="{ 'bg-bkup-blue': isActive }">
      <div class="col-span-1 grid justify-items-start">
        <router-link :to="faqLink"> 
          <fa icon="sort-desc" 
          :class="{ 'transition duration-700 transform rotate-180': isActive, 'rotate-0': !isActive }" 
          @click="toggleDropdown"/>
        </router-link>
      </div>
      <div class=" col-start-2 col-span-10 grid justify-items-start">
        <h1 class="font-bold text-sm md:text-xl text-left">{{title}}</h1>
      </div>
    </div>

    <div class="col-span-12" 
    :class="{ 'my-4':isActive,}" 
    v-if="isActive" >
      <router-view v-for="graph in graphs" :key="graph">
        <p class="font-normal text-base md:text-xl text-start mb-2">{{ graph }}</p>
      </router-view>
    
    </div>
    
  </li>
</template>

<script>

export default {
  components: {
   
  },
  props: ['title', 'body', 'graphs', 'id'],

  data(){
    return{}
  },

  computed: {
    faqLink(){
      return { name: 'faq', params: {id: this.id} }
    },
    isActive() {
      return this.$store.state.activeDropdownId === this.id;
    },
  },

  methods: {
    toggleDropdown(){
      if (this.isActive) {
        this.$store.commit('clearActiveDropdown');
      } else {
        this.$store.commit('setActiveDropdown', this.id);
      }
    }
  },
  
}
</script>
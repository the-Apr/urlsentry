<template>
  <li class="grid grid-cols-12">
    <div class="grid  col-span-12 grid-cols-12 border-t-2 items-center p-4" :class="{ 'bg-bkup-blue': isActive }">
    <div class="col-span-1 grid justify-items-start">
      <router-link :to="faqLink"> 
        <fa icon="sort-desc" @click="toggleDropdown"/>
      </router-link>
    </div>
    <div class="col-span-11 grid justify-items-start">
      <h1 class="font-bold text-xl ">{{title}}</h1>
    </div>
    </div>

    <div class="col-span-12" :class="{ 'my-4':isActive}" v-if="isActive" >
      <router-view v-for="graph in graphs" :key="graph">
        <p class="font-normal text-base text-start mb-2">{{ graph }}</p>
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
    return{
      isDropdownOpen: false,
    }
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
      // this.isDropdownOpen = !this.isDropdownOpen;

      // if (this.isDropdownOpen) {
      //     this.$emit('closeOtherDropdowns', this.id);
      // }

      if (this.isActive) {
        this.$store.commit('clearActiveDropdown');
      } else {
        this.$store.commit('setActiveDropdown', this.id);
      }
    }
  },
  
  // watch: {
  //   isDropdownOpen(newVal) {
  //     if (newVal) {
  //       // Close other dropdowns if the current one is opened
  //       this.$emit('closeOtherDropdowns', this.id);
  //     }
  //   },
  // },

  // watch: {
  //   id: {
  //     handler(newId, oldId) {
  //       // Close other dropdowns if the id changes
  //       if (this.isDropdownOpen && newId !== oldId) {
  //         this.isDropdownOpen = false;
  //       }
  //     },
  //     immediate: true, // This will trigger the watch immediately when the component is created
  //   },
  // },
}
</script>
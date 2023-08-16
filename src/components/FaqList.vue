<template>
  <ul>
    <faq-item v-for="faqDoc in faqDocs" :key="faqDoc.id"
    :id="faqDoc.id"
    :title="faqDoc.title"
    :graphs="faqDoc.graphs"
    @closeOtherDropdowns="closeOtherDropdowns">
    </faq-item>
  </ul>
</template>

<script>
import FaqItem from './FaqItem.vue';

export default {
  components: {
    FaqItem
  },

  computed: {
    faqDocs(){
      return this.$store.getters['phishingDocs']
    }
  },
  
  methods: {
    closeOtherDropdowns(currentId) {
      // Iterate through items and close other dropdowns
      this.faqDocs.forEach(faqDoc => {
        if (faqDoc.id !== currentId) {
          faqDoc.isDropdownOpen = false;
        }
      });
    },
  }
}
</script>
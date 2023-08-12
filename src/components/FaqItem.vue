<template>
  <div class="grid grid-cols-4">
    <div class="col-span-1">^</div>
    <div class="col-span-3">
      <h1 class="font-bold text-xl">{{title}}</h1>
      <p>{{ body}}</p>
    </div>
  </div>
</template>

<script>
import phisingDoc from './phishingDoc.vue'
export default {
  components: {
    phisingDoc,
  }
}
</script>
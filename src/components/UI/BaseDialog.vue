<template>
  <!-- <teleport> -->
    <div @click="$emit('close')">
      
    </div>
      <dialog open>
        <header>
          <slot name="header">
            <h2 class="text-xl font-medium"> {{title}}</h2>
          </slot>
        </header>

        <section>
          <slot></slot>
        </section>
        <menu>
          <slot name="actions">
          </slot>
        </menu>
      </dialog>
  <!-- </teleport> -->
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title :{
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
div {
  @apply fixed top-0 left-0 w-full z-10;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
}


dialog{ 
  @apply fixed border-none p-0 m-0 rounded-xl overflow-hidden;
  top: 30vh;
  left: 50%;  
  width: 90%;
  transform: translateX(-50%);
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

@screen md{
  dialog{  
    width: 70%;
  }
}

header{
  @apply text-white p-4 w-full;
  background-color: #3a0061;
}

header h2{
  margin: 0;
}

section{
  @apply p-4
}

menu{
  @apply p-4 flex justify-end m-0
}

</style>
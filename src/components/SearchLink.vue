<template>

<!-- <base-dialog :show="inputisInvalid" title="An error occured!" @close="handleError"></base-dialog> -->

  <div class="search my-4">
    <input type="text" name="searchLink" id="searchLink" placeholder="input the url" ref="searchInput"
    class="py-2 px-8 md:py-4 md:px-12">
    <button type="submit" @click= "submitData" class="py-2 px-4 md:py-4 md:px-8">Verify</button>
  </div>
  
</template>

<script>
export default {
 data(){
  return{
    inputisInvalid :false,
    error: false
  }
 },
 methods: {
  submitData(){
    const enteredSearch = this.$refs.searchInput.value;

    if(enteredSearch.trim() === ''){
      this.inputisInvalid = true;
      console.log('no input')
      return;
    }
    this.$refs.searchInput.value = '';
  },

  handleError(){
    this.inputisInvalid= false;
  }
 }
}
</script>

<style scoped>
  
  .search {
  display: flex;
  align-items: right; 
  justify-items: right;
  position: relative;
  max-width: 40rem;
  width: 100%;
}

.search input[type="text"] { 
  flex: 1;
 
  border: none;
  border-radius: 27px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #000
}

.search button[type="submit"] {
  background-color: #4e99e9;
  border: none;
  color: #fff;
  cursor: pointer;
  
  border-radius: 27px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  right: 0em;
  transition: .9s ease;
}

.search button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: #366bd3;
}

</style>


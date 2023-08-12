<template>
  <div class="search">
    <input type="text" name="searchLink" id="searchLink" placeholder="input the url" ref="searchInput">
    <button type="submit" @click= "submitData">Go</button>
  </div>
</template>

<script>
export default {
 data(){
  return{
    inputisInvalid :false
  }
 },
 methods: {
  submitData(){
    const enteredSearch = this.$refs.searchInput.value;

    if(enteredSearch.trim === ''){
      this.inputisInvalid = true;
      return;
    }
    console.log(enteredSearch)
    console.log(this.$refs.searchInput.value)
    this.$refs.searchInput.value = '';
  }
 }
}
</script>

<style scoped>
  /* input {
    @apply block w-full py-2 px-4 border-solid border-2 rounded-s-3xl
  }

  input:focus {
    @apply outline-none bg-gray-100 border-main-blue
  } */
  .search {
  /* display: inline-block;
  position: relative; */
  display: flex;
  align-items: right; 
  justify-items: right;
  position: relative;
  width: 40rem;
}

.search input[type="text"] {
  
  flex: 1;
  padding: 12px 25px;
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
  padding: 12px 20px;
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


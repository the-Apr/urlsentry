<template>
  <header class="flex items-center justify-between  px-8 md:px-8 py-2">
  
    <div class="flex items-center space-x-4">
      <a href="#"><img src=# alt="Logo" class="h-8 w-8"></a>
      <h2 class="text-lg font-semibold">urlsentry</h2>
    </div>

    <div class="items-center font-semibold text-lg">
      <router-link to="/">Learn More</router-link> 
    </div>
  </header>
  <router-view/>
</template>
<template>
  <header class="flex items-center justify-between px-4 py-2">
  
    <div class="flex items-center space-x-4">
      <a href="#"><img src="your-logo.png" alt="Logo" class="h-8 w-8"></a>
      <h2>urlsentry</h2>
    </div>

    <div class="flex items-center space-x-4">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
  </header>
  <router-view/>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './views/NavBar.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <NavBar></NavBar>
  <RouterView />
  <footer-view></footer-view>
</template>

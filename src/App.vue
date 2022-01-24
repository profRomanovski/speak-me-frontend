<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "@/modules/Main/layouts/MainLayout";

export default {
  name: 'App',
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
  components:{
    MainLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 40px auto;
  width: 920px;
}
</style>

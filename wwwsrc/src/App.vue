<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    data() {
      return {
      }
    },
    name: 'app',
    components: {
      Navbar
    },
    mounted() {
      this.$store.dispatch('authenticate')

    }
  }
</script>

<style>
  #app {
    background: url("https://hdwallsource.com/img/2014/12/silver-wallpaper-21839-22382-hd-wallpapers.jpg") no-repeat fixed center;
    /* background: rgb(206, 39, 39); */
    min-height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* margin-top: 60px; */
  }
</style>
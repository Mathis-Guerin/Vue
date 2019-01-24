<template>
  <div id="app">
    <Header></Header>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main-content {
    height: 100%;
    min-height: 740PX;;
    width: 100%;
    background-color: #efefef;
    padding: 20px 0;
  }
}
</style>

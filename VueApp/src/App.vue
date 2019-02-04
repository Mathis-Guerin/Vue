<template>
  <div id="app" :class="{'app-dark': darkMode}">
    <Header></Header>
    <div class="main-content" :class="{'main-content-dark': darkMode}">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import Vuex from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    ...Vuex.mapGetters(['darkMode'])
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

  &.app-dark {
    color: white;
  }

  .main-content {
    height: 100%;
    min-height: 740PX;;
    width: 100%;
    background-color: #efefef;
    padding: 20px 0;
    border-bottom: 2px solid #444;
  }

  .main-content-dark {
    background-color: #2c3e50;
  }
}
</style>

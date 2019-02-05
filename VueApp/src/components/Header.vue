<template>
    <div id="header">
        <h2 v-if="login !== ''">Hello {{this.login}}</h2>
        <h2 v-if="login === ''">Tuto Vue</h2>
        <router-link to="/"><button class="ui button">Users</button></router-link>
        <router-link to="/posts"><button class="ui button">Posts</button></router-link>
        <router-link to="/profil"><button class="ui button">Profil</button></router-link>
        <router-link to="/connexion"><button @click="connexionFunction" class="ui icon button connexion"><i class="icon user"></i>{{connexionLabel}}</button></router-link>
        <router-link to="/calculator"><button class="ui button">Calculette</button></router-link>
        <button @click="darkmodeclick" class="ui icon button"><i class="icon lightbulb"></i></button>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from '../store/AppStore'

export default {
  store: store,
  computed: {
    ...Vuex.mapGetters(['login', 'darkMode']),
    connexionLabel: function () {
      return this.login === '' ? 'Connexion' : 'Déconnexion'
    }
  },
  methods: {
    ...Vuex.mapActions(['addLogin', 'setDarkmode']),
    connexionFunction () {
      if (this.login !== '') {
        this.addLogin('')
      }
    },
    darkmodeclick () {
      this.setDarkmode(this.darkMode)
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
    position: relative;
    border-bottom: 2px solid #444;
    padding: 20px;
    background-color: #00E676;
    color: #2c3e50;

    .connexion {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
</style>

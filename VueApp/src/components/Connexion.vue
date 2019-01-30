<template>
  <div id="connexion">
    <h2>Page de connexion</h2>
    <form v-if="!this.isLoading" class="ui form">
      <p class="error-block" v-if="errors.length">
        <b>Merci de corriger les erreurs suivantes :</b>
        <ul>
          <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <div class="field">
        <label>Login</label>
        <input autocomplete="off" v-model="login" type="text" name="login" placeholder="Login">
      </div>
      <div class="field">
        <label>Mot de passe</label>
        <input v-model="password" type="password" name="password" placeholder="Mot de passe">
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input v-model="checked" type="checkbox" tabindex="0" class="">
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button @click.prevent="submit" class="ui button" type="submit">Submit</button>
    </form>
    <div v-if="this.isLoading" class="ui segment transparent connexion-loader">
      <p></p>
      <div class="ui inverted active dimmer transparent">
        <div class="ui huge loader"></div>
      </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      login: '',
      password: '',
      checked: false,
      errors: [],
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['addLogin']),
    submit () {
      this.errors = []

      if (!this.login) {
        this.errors.push('Veuillez saisir votre Login')
      }
      if (!this.password) {
        this.errors.push('Veuillez saisir votre Login')
      }
      if (!this.checked) {
        this.errors.push('Veuillez accepter les CGU.')
      }

      if (this.login !== this.password) {
        this.errors.push('Mot de passe incorrect (Pour vous connecter, le login doit être égal au mot de passe...)')
      }

      if (!this.errors.length) {
        this.isLoading = true
        var that = this
        setTimeout(function () {
          that.$router.push('/')
        }, 1000)
        this.addLogin(this.login)
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
#connexion {
  .error-block {
    background-color: #ff9696;
    padding: 10px;
    border: 2px solid #ff6666;

    li {
      text-align: left;
    }
  }
  form {
    width: 50%;
    margin: 0 auto;
  }
  .connexion-loader {
    margin-top: 100px;
  }
  .transparent {
    background-color: transparent !important;
    border: none;
    box-shadow: none;
  }
}
</style>

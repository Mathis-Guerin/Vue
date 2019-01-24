<template>
  <div id="content">
    <Compteur title="Nombre d'utilisateur à afficher" :counter="counter"> </Compteur>
    <div v-if="users && users.length>0 && counter>=0" class="content-users ui four column doubling stackable grid container cards">
      <UserCard v-bind:key="user.id" v-for="user in users.slice(0,counter)" :user="user">
      </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
import Compteur from './Compteur.vue'

export default {
  data () {
    return {
      counter: 4,
      users: {}
    }
  },
  components: {
    UserCard, Compteur
  },
  methods: {
    increment () {
      if (this.counter === 10) {
        return this.counter
      }
      this.counter++
      return this.counter
    },
    decrement () {
      return this.counter--
    },
    reset () {
      this.counter = 0
    },
    deleteUser (user) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          this.users = this.users.filter(u => u !== user)
        })
    }
  },
  mounted: function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.users = json
      })
  }
}
</script>

<style lang="scss" scoped>
.content-users {
  margin-top: 20px;
}
</style>

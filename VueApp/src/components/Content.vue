<template>
  <div id="content">
    <div class="content-compteur">
      <h2>Le petit compteur</h2>
      <button @click="decrement">-</button>
      <div :class="{red: isNegative}">{{counter}}</div>
      <button @click="increment">+</button>
      <button @click="reset">Reset</button>
    </div>
    <div class="content-users">
      <UserCard v-bind:key="user.id" v-for="user in users" :user="user">
      </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
export default {
  data () {
    return {
      counter: 0,
      users: {}
    }
  },
  components: {
    UserCard
  },
  methods: {
    increment () {
      return this.counter++
    },
    decrement () {
      return this.counter--
    },
    reset () {
      this.counter = 0
    }
  },
  computed: {
    isNegative: function () {
      return this.counter < 0
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
#content {
  height: 100%;
  width: 100%;
  background-color: #efefef;
  padding: 20px 0;
}

.content-compteur {
  border-bottom: 2px solid #444;
  padding-bottom: 20px;
  div {
    display: inline-block;

    &.red {
      color: red;
      font-weight: bold;
    }
  }
}
</style>

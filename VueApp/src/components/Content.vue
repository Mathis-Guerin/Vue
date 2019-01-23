<template>
  <div id="content">
    <div class="content-compteur">
      <h2>Nombre d'utilisateur à afficher : </h2>
      <button class="ui icon button" @click="decrement"><i class="minus icon"></i></button>
      <div :class="{red: isNegative}" class="number">{{counter}}</div>
      <button class="ui icon button" @click="increment"><i class="plus icon"></i></button>
      <button class="ui button" @click="reset">Reset</button>
      <div v-if="counter<0" class='error'> Veuillez choisir un nombre positif</div>
    </div>
    <div v-if="users && users.length>0" class="content-users ui four column doubling stackable grid container cards">
      <UserCard v-if="counter>=0" v-bind:key="user.id" v-for="user in users.slice(0,counter)" :user="user">
      </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
export default {
  data () {
    return {
      counter: 4,
      users: {}
    }
  },
  components: {
    UserCard
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
  min-height: 740PX;;
  width: 100%;
  background-color: #efefef;
  padding: 20px 0;
}

.content-compteur {
  border-bottom: 2px solid #444;
  padding-bottom: 20px;
  h2 {
    display: inline-block;
    margin: 0 5px;
    vertical-align: middle;
  }
  div {
    display: inline-block;

    &.red {
      color: red;
      font-weight: bold;
    }
  }
  .number {
    font-size: 30px;
    vertical-align: middle;
    padding: 5px;
  }
  .error {
    display: block;
    margin: 5px auto;
    background-color: #ff9696;
    padding: 10px;
    width: fit-content;
    border: 2px solid #ff6666;
  }
}

.content-users {
  margin-top: 20px;
}
</style>

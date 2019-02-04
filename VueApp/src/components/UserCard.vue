<template>
  <div class="card user-card">
    <div class="content" :class="{'content-dark': darkMode}">
      <div class="extra content right">
        <button class="circular ui small white icon button">
          <i @click="deleteUser(user)" class="x icon"></i>
        </button>
      </div>
      <div class="image"><img class="right round" :src="imageUrl"></div>
      <div class="user-name">{{this.user.name}}</div>
      <div class="user-mail">{{this.user.email}}</div>
      <button class="button-subscribe">
        S'abonner
      </button>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  props: ['user'],
  methods: {
    deleteUser (user) {
      this.$parent.deleteUser(user)
    }
  },
  computed: {
    imageUrl: function () {
      const randomId = this.user.id
      return `http://lorempixel.com/g/200/200/people/${randomId}`
    },
    ...Vuex.mapGetters(['darkMode'])
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  font-family: Lato;
}

button {
  &.white {
    background-color: white !important;
  }
}

.user-name {
  margin: 20px 0 10px;
  font-weight: bold;
  font-size: 20px;
}

.user-mail {
  color: #6f6f6f;
}

.image {
  text-align: center;
  margin: 0 auto;

  img {
    float: none !important;
    margin: 0 auto;
    height: 120px;
  }
}

.right {
  text-align: right;
}

.round {
  border-radius: 100%;
}

.button-subscribe {
    appearance: none;
    cursor: pointer;
    display: block;
    font-weight: 600;
    padding: 8px 40px;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    background-color: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 4px;
    color: #fff;
    position: relative;
    margin: 10px auto 5px;
}

.content-dark {
  background-color: #151f29 !important;
}
</style>

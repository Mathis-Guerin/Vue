<template>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="https://picsum.photos/200/?random">
      <div class="header">{{this.user.name}}</div>
      <div class="meta">{{this.user.email}}</div>
      <div class="description">
        <div>{{this.user.website}}</div>
        <div>{{this.user.phone}}</div>
      </div>
    </div>
    <div class="extra content right">
      <button class="circular ui icon button red">
        <i @click="deleteUser(user)" class="icon trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    deleteUser (user) {
      this.$parent.deleteUser(user)
    }
  }
}
</script>

<style lang="scss" scoped>
.right {
  text-align: right;
}
</style>

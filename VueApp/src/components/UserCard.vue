<template>
  <div class="user-card">
    <div>{{this.user.name}}</div>
    <div>{{this.user.email}}</div>
    <div>{{this.user.address.city}}</div>
    <div>{{this.user.website}}</div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="scss" scoped>
.user-card {
  display: inline-block;
  margin: 20px;
  text-align: left;
  width: 200px;
}
</style>

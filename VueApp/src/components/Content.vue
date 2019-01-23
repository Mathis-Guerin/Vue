<template>
  <div id="content">
    <div class="content-compteur">
      <h2>Le petit compteur</h2>
      <button @click="decrement">-</button>
      <div :class="{red: isNegative}">{{counter}}</div>
      <button @click="increment">+</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
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
  div {
    display: inline-block;

    &.red {
      color: red;
      font-weight: bold;
    }
  }
}
</style>

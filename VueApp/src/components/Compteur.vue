<template>
  <div id="compteur">
      <div class="content-compteur">
        <h2>{{title}}</h2>
        <button class="ui icon button" @click="decrement"><i class="minus icon"></i></button>
        <div :class="{red: isNegative}" class="number">{{counter}}</div>
        <button class="ui icon button" @click="increment"><i class="plus icon"></i></button>
        <button class="ui button" @click="reset">Reset</button>
        <div v-if="counter<0" class='error'> Veuillez choisir un nombre positif</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    counter: Number
  },
  data () {
    return {
    }
  },
  methods: {
    increment () {
      this.$parent.increment()
    },
    decrement () {
      this.$parent.decrement()
    },
    reset () {
      this.$parent.reset()
    }
  },
  computed: {
    isNegative: function () {
      return this.counter < 0
    }
  }
}
</script>

<style lang="scss">
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
</style>

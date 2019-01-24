<template>
  <div id="posts">
    <Compteur title="Nombre de posts à afficher" :counter="counter"> </Compteur>
    <div class="posts-display">
      <button class="ui icon button" @click="displayList"><i class="icon large list"></i></button>
      <button class="ui icon button" @click="displayTable"><i class="icon large th"></i></button>
    </div>
    <div v-if="posts && posts.length>0 && counter>=0" class="content-posts ui" :class="{'items':display=='list', 'cards':display=='table'}">
      <PostCard v-bind:key="post.id" v-for="post in posts.slice(0,counter)" :post="post" :display="display">
      </PostCard>
    </div>
  </div>
</template>

<script>
import Compteur from './Compteur.vue'
import PostCard from './PostCard.vue'

export default {
  data () {
    return {
      counter: 8,
      posts: {},
      display: 'list'
    }
  },
  components: {Compteur, PostCard},
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
    displayList () {
      this.display = 'list'
      console.log(this.display)
      return this.display
    },
    displayTable () {
      this.display = 'table'
      console.log(this.display)
      return this.display
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.posts = json
      })
  }
}
</script>

<style lang="scss" scoped>
.content-posts {
  margin: 20px;
  justify-content: center;
}

.posts-display {
  text-align: right;
  padding: 5px 20px;
}
</style>

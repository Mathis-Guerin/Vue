<template>
  <div id="posts">
    <Compteur title="Nombre de posts à afficher" :counter="counter"> </Compteur>
    <div v-if="posts && posts.length>0 && counter>=0" class="content-posts ui items">
      <PostCard v-bind:key="post.id" v-for="post in posts.slice(0,counter)" :post="post">
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
      posts: {}
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
}
</style>

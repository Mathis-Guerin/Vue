<template>
  <div id="posts">
    <Compteur title="Nombre de posts à afficher" :counter="counter"> </Compteur>
    <div :class="{'fullWidth-background': displayImage}">
      <div class="posts-display">
        <button class="ui icon button" @click="displayList"><i class="icon large list"></i></button>
        <button class="ui icon button" @click="displayTable"><i class="icon large th"></i></button>
      </div>
      <div v-if="posts && posts.length>0 && counter>=0" class="content-posts ui" :class="{'items':display=='list', 'cards':display=='table'}">
        <PostCard v-bind:key="post.id" v-for="post in posts.slice(0,counter)" :post="post" :display="display">
        </PostCard>
      </div>
    </div>
    <transition name="fade">
      <div @click="closeImage" v-if="displayImage" class="fullWidth-image">
        <button class="circular ui huge white icon button">
          <i @click="closeImage" class="x icon"></i>
        </button>
        <img :src="imageSrc"/>
      </div>
    </transition>
  </div>
</template>

<script>
import Compteur from './Compteur.vue'
import PostCard from './PostCard.vue'
import store from '../store/AppStore'

export default {
  store: store,
  data () {
    return {
      counter: 8,
      posts: {},
      display: 'list',
      displayImage: false,
      imageSrc: ''
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
      return this.display
    },
    displayTable () {
      this.display = 'table'
      return this.display
    },
    openImage (src) {
      this.displayImage = true
      this.imageSrc = src
    },
    closeImage () {
      this.displayImage = false
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

.fullWidth-image {
  width: 100%;
  position: fixed;
  top: 12%;
  margin: 20px;

  button {
    position: absolute;
    top: 0;
    right: 40px;

    &.white {
      background-color: transparent;
    }
  }

  img {
    height: 700px;
  }
}

.fullWidth-background {
  opacity: 0.2;
  background: #dedede;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

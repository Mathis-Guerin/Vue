<template>
  <div :class="{'item':display=='list', 'ui link card':display=='table'}">
    <div class="ui image" :class="{'small':display=='list', 'medium':display=='table'}">
      <img @click="openImage(imageSrc)" :src="imageSrc">
    </div>
    <div class="content content-post" :class="{'content-post-item': display=='list', 'content-post-card': display=='table'}">
      <div class="header">{{this.post.title}}</div>
      <div class="description">
        <div>{{this.post.body}}</div>
      </div>
      <div class="extra content bottom-block">
        <button @click="like(post)" class="circular button-blue ui icon button">
          <i class="icon large red heart" :class="{outline: !this.isLiked}"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post', 'display'],
  data () {
    return {
      isLiked: false
    }
  },
  methods: {
    like (post) {
      this.isLiked = !this.isLiked
    },
    openImage (src) {
      console.log('PostCard', src)
      this.$parent.openImage(src)
    }
  },
  computed: {
    imageSrc: function () {
      const randomId = Math.floor(Math.random() * 101) * this.post.id
      return `https://picsum.photos/700/700?image=${randomId}`
    }
  }

}
</script>

<style lang="scss" scoped>

.content.content-post {
  text-align: left;
  background-color: #bcd9ff !important;
  padding: 15px !important;
}

.content-post-item {
  max-height: 150px;
}

.button-blue {
  background-color: transparent;
  &:hover, &:focus {
    background-color: #bcd9ff;
  }
}

.bottom-block {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>

<template>
  <div class="image-view" @click="onClick">
    <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      @load="onLoad"
      @error="onError"
      v-show="!isLoading && !error"
    >
    <img
      :class="round ? 'round image' : 'image'"
      :style="{ height }"
      src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
      :mode="mode"
      :lazy-load="lazyLoad"
      v-show="isLoading || error"
    >
  </div>
</template>

<script>
  export default {
    name: 'ImageView',
    props: {
      src: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: 'widthFix'
      },
      lazyLoad: {
        type: Boolean,
        default: true
      },
      round: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        default: 'auto'
      }
    },
    watch: {
      src(newValue, preValue) {
      }
    },
    data() {
      return {
        isLoading: true,
        error: false
      }
    },
    methods: {
      onClick() {
        this.$emit('onClick')
      },
      onLoad() {
        this.isLoading = false
        this.error = false
      },
      onError() {
        this.error = true
        this.isLoading = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .image-view {
    width: 100%;
    .image {
      width: 100%;
      &.round {
        border-radius: 50%;
      }
    }
  }
</style>

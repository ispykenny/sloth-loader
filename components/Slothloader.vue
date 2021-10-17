<template>
  <div 
    ref="imageParent" 
    class="lazy-to-vue-loader"
    v-bind:class="isLoaded ? 'loaded' : '' "
    :style="`padding-bottom:${height/width * 100}%`"
  >
    <img 
      ref="imageElement"
      :src=imageSrc 
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: 1080
    },
    width: {
      type: Number,
      default: 1920
    },
    loadWhen: {
      type: Number,
      default: 0.5
    },  
    alt: {
      type: String,
      default: "Loaded image"
    }
  },
  data() {
    return {
      isLoaded: false,
      imageSrc: ''
    }
  },
  mounted() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: this.$props.loadWhen,
    };

    const element = this.$refs.imageParent
    const observer = new IntersectionObserver((element) => {
      if(!element[0].isIntersecting) return;
      if(element[0].intersectionRatio > 0) {
        const newImage = new Image();
        newImage.src = this.$props.src;
        newImage.onload = () => {
          this.imageSrc = newImage.src
          this.isLoaded = true
        }
      }
      observer.unobserve(element[0].target)
    }, observerOptions)

    observer.observe(element)
  }
}
</script>

<style>
  .lazy-to-vue-loader {
    position: relative;
  }

  .lazy-to-vue-loader img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
  }
</style>
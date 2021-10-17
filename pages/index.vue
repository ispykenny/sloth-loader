<template>
  <section class="hero">
    <div class="inner">
      <div class="hero__logo">
        <Icon/>
      </div>
      <h1>Sloth Loader</h1>
      <h4>By <a style="color: black;" href="https://twitter.com/ispykenny" target="_blank"
        rel="noopener">@ispykenny</a></h4>
      <p>A slick image lazy loader <strong>Vue Component</strong> that maintains the height of your document while your images wait (using intersectionObserver) to be loaded. </p>
      <Cta 
        href="https://github.com/ispykenny/sloth-loader/blob/main/components/Slothloader.vue" 
        target="_blank"
        rel="noopener">
        View Code
      </Cta>
      <h2>See it in action</h2>
      <div class="images">
        <div class="images__el">
          <div 
            v-for="(images, index) in leftImages"
            :key="index"
            >
            <Slothloader
              :src=images.src
              :omitAspect=true
              :width=images.width
              :height=images.height
              :loadWhen=0.2
              :alt=images.alt
            />
          </div>
        </div>
        <div class="images__el">
          <div 
            v-for="(images, index) in rightImages"
            :key="`${index}-b`"
            >
            <Slothloader
              :src=images.src
              :width=images.width
              :height=images.height
              :loadWhen=0.2
              :alt=images.alt
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { leftImages } from '@/utils/leftimages'
import { rightImages } from '@/utils/rightimages'

export default {
  data() {
    return {
      leftImages: '',
      rightImages: ''
    }
  },
  mounted() {
    this.leftImages = leftImages;
    this.rightImages = rightImages;
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

.hero {
  margin-top: 3em;
  text-align: center;

  h1 {
    font-size: 32px;
    margin-bottom: 0.2em;
  }

  p {
    max-width: 600px;
    margin: auto;
    line-height: 1.4;
  }
}

.cta {
  margin-top: 1em;
}

h2 {
  text-align: left;
  margin-top: 2em;
}

.images {
  padding: 0em 0em 4em 0em;

  img {
    border-radius: 8px;
  }
}

.images__el {
  > div {
    margin-bottom: 1em;
  }
}

.lazy-to-vue-loader {

  img {
    opacity: 0;
    transition: opacity 800ms ease;
  }

  &.loaded {
    img {
      opacity: 1;
    }
  }
}


@media(min-width: 600px) {
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;

    &__el {
      width: 49%;
    }
  }
}

</style>

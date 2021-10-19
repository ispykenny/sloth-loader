<template>
  <section class="hero">
    <div class="inner">
      <h1>Sloth Loader</h1>
      <p>A slick image lazy loader <strong>Vue Component</strong> that maintains the height of your document while your images wait (using intersectionObserver) to be loaded. </p>
      <div style="margin-top:1em;">
        <strong>Download</strong>: <pre><code>yarn add sloth-loader</code></pre>
      </div>
      <div style="margin-top:1em;">
        <strong>Import component</strong>: <pre><code>import Slothloader from 'sloth-loader/index.vue'</code></pre>
      </div>
      <Cta 
        href="https://www.npmjs.com/package/sloth-loader#use-in-component"
        target="_blank"
        rel="noopener"
      >
        View Options
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
  background: #fff;
}
.sloth-loader {
  background: #eee;
}
.hero {
  margin-top: 3em;
  text-align: center;

  a:not(.cta) {
    color: $green;
  }

  &__logo {
    max-width: 50px;
    fill: $green;

    svg {
      width: 100% !important;
    }
  }

  h1 {
    font-size: 32px;
    margin-bottom: 0.5em;
  }

  p {
    max-width: 600px;
    margin: auto;
    font-size: 16px;
    line-height: 1.4;
  }
}

code {
  background: #f1f1f1;
  padding: 0.5em;
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

.sloth-loader {

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

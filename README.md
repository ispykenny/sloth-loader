# sloth-loader
 Lazy loader Vue Component with intersection observer
 [Example:](https://sloth-loader.netlify.app/)

## Installation
`yarn add sloth-loader`
`npm i sloth-loader`

## import component
import Lazyload from 'sloth-loader/index.vue';

## use in component
```
<Lazyload
  :width=1000
  :height=1000
  :omitAspect=false
  :src=src
  :loadWhen=0.2
  loadedClass="loaded"
  alt="Loaded image"
/>```
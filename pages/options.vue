<template>
  <section>
    <div class="inner hero">
      <h1 id="pageTitle">Sloth Options</h1>
    </div>
    <div class="inner prop-options">
      <h1>Styling</h1>
      <p>Once your images become loaded, the Sloth loader component will add a <strong>loaded</strong> class to the images parent element (which you can style off of)</p>
      <hr/>
    </div>
    <div class="inner prop-options">
      <h1>Props</h1>
      <div class="prop" v-for="(option, index) in options" :key="index">
        <h2>{{option.prop}} <span>{{option.type}}</span></h2>
        <small>Required: <strong>{{option.required}}</strong></small>
        <p v-html="option.details"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          prop: 'src',
          required: true,
          type: 'String',
          details: 'value of image source'
        },
        {
          prop: 'omitAspect',
          required: false,
          type: 'String',
          details: 'Use this to avoid maintaining the set or default aspect ratio of your image if you dont want to define an aspect ratio for your image with the height/width props.'
        },
        {
          prop: 'width',
          required: false,
          type: 'Number',
          details: 'If using width, then the height prop is also <strong>required</strong> to generate an aspect ratio for the image parent.'
        },
        {
          prop: 'height',
          required: false,
          type: 'Number',
          details: 'If using height, then the width prop is also <strong>required</strong> to generate an aspect ratio for the image parent.'
        },
        {
          prop: 'loadWhen',
          required: false,
          type: 'Number',
          details: 'Load when is the value in which your image becomes fetched. So if using the value 0.2 then your image will begin to be fetched when it is 20% visible. You can use a value between 0 - 1.0. Leaving this blank will default to 0.5'
        },
        {
          prop: 'alt',
          required: true,
          type: 'String',
          details: 'Alt tag for image for accessibility'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
hr {
  margin: 2em 0em 0em 0em;
}

#pageTitle {
  margin-bottom: 2em;
}

.prop {
  border-bottom: 1px solid #ddd;
  padding: 2em 0em;

  &:last-of-type {
    border-bottom: 0;
  }

  h2 {
    margin-top: 0em;
    margin-bottom: 0.5em;

    span {
      font-size: 13px;
      color: $green;
    }
  }
}

.prop-options {
  max-width: 800px !important;
  margin: auto;
  margin-bottom: 3em;
}
</style>
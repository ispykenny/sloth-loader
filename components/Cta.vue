<template>
  <nuxt-link :to=Linkhref class="cta">
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  props:["Linkhref"]
}
</script>

<style lang="scss">
  .cta {
    background: $green;
    color: #fff;
    display: inline-block;
    font-weight: 700;
    padding: 0.8em 2em;
    text-decoration: none;
    font-size: 15px;
    border-radius: 3px;

    &:hover {
      background: darken($green, 5%);
    }
  }
</style>
<template>
  <a class="cta">
    <slot/>
  </a>
</template>

<script>
export default {
  props:["Linkhref"]
}
</script>

<style lang="scss">
  .cta {
    background: #eee;
    color: black;
    display: inline-block;
    font-weight: 700;
    padding: 0.8em 2em;
    text-decoration: none;
    font-size: 15px;
    border-radius: 3px;

    &:hover {
      background: darken(#eee, 5%);
    }
  }
</style>
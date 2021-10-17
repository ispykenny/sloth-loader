<template>
  <a target="_blank" class="cta">
    <slot/>
  </a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .cta {
    background: $green;
    color: #000;
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
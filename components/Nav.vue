<template>
  <header>
    <div class="inner">
      <nuxt-link to="/" class="box">
        <span class="sr-only">Link home</span>
        <span class="box__el"></span>
        <span class="box__name">Sloth Loader</span>
      </nuxt-link>
      <nav>
        <ul>
          <li>
            <nuxt-link to="options">Sloth Options</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style lang="scss">
header {
  padding: 1em 0em;
  border-bottom: 1px solid #ddd;

  > .inner {
    display: flex;
    align-items: center;
    justify-content: space-between
  }

  nav {

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    a {
      color: #444;
      font-weight: 700;
      text-decoration: none;
    }
  }
}
.box {
  display: flex;
  align-items: center;
  font-weight: 800;
  text-decoration: none;
  color: #444;

  &__el {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: $green;
    margin-right: 8px;
  }
}
</style>
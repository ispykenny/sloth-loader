<template>
  <header>
    <div class="pre-header">
      <div class="inner">
        By <a href="https://twitter.com/ispykenny" target="_blank"
        rel="noopener">@ispykenny</a>
      </div>
    </div>
    <div class="inner">
      <nuxt-link to="/" class="box">
        <span class="sr-only">Link home</span>
        <span class="box__logo">
          <Icon/>
        </span>
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
.pre-header {
  padding: 0.5em 0em;
  background: #f8f8f8;
  font-size: 14px;
  text-align: right;
  a {
    color: black;
    display: inline-block;
    text-decoration: none;
    font-weight: 800;
  }
}
header {
  border-bottom: 1px solid #ddd;

  > .inner {
    display: flex;
    padding: 1em 0em;
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
      color: #000;
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
  color: #000;

  &__logo {
    width: 50px;
    margin-right: 1em;

    svg {
      width: 100%;
      fill: $green;
    }
  }

  &__el {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: $green;
    margin-right: 8px;
  }
}
</style>
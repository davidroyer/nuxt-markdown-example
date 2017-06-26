<template lang="html">
    <nav class="nav">
      <div class="nav-left">
        <nuxt-link class="nav-item" to="/">Nuxt Markdown Example</nuxt-link>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">

        <nuxt-link class="nav-item" to="/dynamic/test1">Post 1</nuxt-link>
        <nuxt-link class="nav-item" to="/dynamic/test2">Post 2</nuxt-link>

        <div class="nav-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button" >
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <a class="button is-outlined">Outlined</a>
      <a class="button is-primary is-outlined">Outlined</a>
      <a class="button is-info is-outlined">Outlined</a>
      <a class="button is-success is-outlined">Outlined</a>
      <a class="button is-danger is-outlined">Outlined</a>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>

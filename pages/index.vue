<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <div v-html="content"></div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import HomeContent from '~static/markdownFiles/HomeContent.md'
export default {
  components: {
    Logo
  },
  data () {
    return {
      content: HomeContent
    }
  }
}
</script>

<style>

</style>

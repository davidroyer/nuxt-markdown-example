<template>
  <section class="container">
    <div>
      <h1 class="title">
        Markdown Main Page
      </h1>
      <div v-html="test"></div>
    </div>
  </section>
</template>

<script>
import test1 from '~static/dynamicMarkdownFiles/test1.md'

export default {
  components: {
  },
  computed: {
    test () {
      return test1
    }
  }
}
</script>

<style>

</style>

<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{$route.params.slug}}
      </h1>
      <div v-html="content"></div>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData ({params}) {
    const fileContent = await import(`~/static/markdownFiles/${params.slug}.md`)
    return {
      content: fileContent
    }
  }
}
</script>

<style>
</style>

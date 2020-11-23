<template>
  <div class="container">
      <Header/>
      <Table/>
  </div>
</template>

<script>
export default {
  name: 'index',
  computed: {
    courses () {
      return this.$store.state.courses
    }
  },
  created () {
    this.$store.commit('SET_COURSES')
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>

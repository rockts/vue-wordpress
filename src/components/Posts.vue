<template>
  <div class="header">{{ header }}</div>
</template>

<script>
  export default {
    name: 'Posts',
    data () {
      return {
        header: 'Posts'
      }
    }
  }
</script>

<style scoped>
  .header {
    font-size: 18px;
    color: #6435c9;
  }
</style>

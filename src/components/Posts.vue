<template>
  <div>
    <div v-for="entity in entities" v-bind:key="entity.id">
      {{ entity.title.rendered }}

    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'Posts',
    created () {
      this.getInitialData()
    },
    data () {
      return {
        header: 'Posts'
      }
    },
    methods: {
      ...mapActions([
        'getInitialData'
      ])
    },
    computed: {
      ...mapState({
        entities: state => state.posts.entities
      })
    }
  }
</script>

<style scoped>
  .header {
    font-size: 18px;
    color: #6435c9;
  }
</style>

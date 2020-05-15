<template>
  <div id="app">
    89696868767868768
    <ev-dialog :visibile.sync="visibile">
      <!-- <span slot="header">标题</span> -->
    </ev-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visibile: false
    }
  },
  mounted () {

  },
  components: {}
}
</script>

<style lang="scss">
#app {
  height: 5000px;
}
</style>

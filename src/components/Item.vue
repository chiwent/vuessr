<template>
  <div v-if="item">{{ item.title }}</div>
</template>

<script>
export default {
  // 由于此函数会在组件实例化之前调用，所以无法访问this
  // 需要将store和路由信息作为参数传递进去
  asyncData ({ store, route }) {
    // 触发action后，会返回promise
    return store.dispatch('fetchItem', route.params.id)
  },
  computed: {
    item () {
      return this.$store.state.items[this.$route.params.id]
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <nav>
      <router-link to="/bar">Bar</router-link>
      <router-link to="/baz">Baz</router-link>
      <router-link to="/foo">Foo</router-link>      
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<template>
  <div id="app">
    <router-view class="view" name="a"></router-view>
    <router-view class="view" name="b"></router-view>
    <router-view class="view"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {}
</style>

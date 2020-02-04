<template>
    <div>
<!--      $route代表当前加载页面的路由对象，params是一个对象，里面包含一个name值-->
      {{ $route.params.name }}
    </div>
</template>

<script>
  export default {
    name: 'argu'
  }
</script>

<style scoped>

</style>

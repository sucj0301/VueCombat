<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      if(type === 'back') {
        // this.$router.go(-1)
        this.$router.back()
      } else if(type === 'push'){
        const name = 'lison';
        this.$router.push({
          path: `/argu/${name}`
          // name: 'argu',

          // params: {
          //   name: 'lison'
          // }

          // query: {
          //   name: 'lison'
          // }
        })
      } else if (type === 'replace'){
        this.$router.replace('/parent')
      }

    }
  }
}
</script>

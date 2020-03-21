<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  created() {
    // this.login()
  },
  methods: {
    // get请求
    getlist() {
      this.$http.get('/api/list',
        {
          params: {
            name: 'loading',
            age: '12'
          }
        }
      ).then(res => {
        console.log(res)
      })
    },
    // post请求
    login() {
      this.$http.post('/api/login', {
        name: 'test',
        age: '33'
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Shl :message="message">
      测试
    </Shl>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import Shl from "./components/Shl.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    // Shl
  },
  watch: {
    message: {
      handler: function(val) {
        console.log(val, "mess"); // eslint-disable-line
      },
      deep: true, //深度监听
      /**
       * 立即 已初始值 执行 hanlder方法, 比如刷新页面 会打印 message为 changsi,
       * 如果去掉此选项则 只有在message变化时候才会执行hanlder方法
       */
      immediate: true 
    }
  },
  data() {
    return {
      message: {
        name: "changsi"
      }
    };
  },
  methods: {
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

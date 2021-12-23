<script>
export default {
  name: "App",
  mounted () {
    console.log('app-vue');
  }
};
</script>

<template>
<div id="app-vue">
  <h2>Vue App</h2>
  <hr />
</div>
</template>

<style lang='scss' scoped>
#app-vue {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  margin: 0;
  color: green;
}
</style>

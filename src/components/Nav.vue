<template>
  <div id="nav">
    <router-link to="/money" class="item" active-class="x">
      <Icon name="money" class="icon"></Icon>
      记账</router-link>
    <router-link to="/labels" class="item" active-class="x">
      <Icon name="labels" class="icon"></Icon>
      标签</router-link>
    <router-link to="/statistics" class="item" active-class="x">
      <Icon name="statistics" class="icon"></Icon>
      统计</router-link>
  </div>
</template>

<script lang="ts">
export default {
name: "Nav",
}
</script>

<style lang="scss" scoped>
#nav{
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >.item{
    justify-content: center;
    width: 33.3333%;
    display: flex;
    align-items: center;
    flex-direction: column;

  }
>.item.x{
  color: #42b983;
}
    }
</style>
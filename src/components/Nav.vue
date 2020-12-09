<template>
  <div id="nav">
    <router-link to="/">
      <Icon name="money"></Icon>
      Money</router-link> |
    <router-link to="/labels">
      <Icon name="labels"></Icon>
      Labels</router-link>|
    <router-link to="/statistics">
      <Icon name="statistics"></Icon>
      Statistics</router-link>
  </div>
</template>

<script lang="ts">
export default {
name: "Nav",
}
</script>

<style lang="scss" scoped>
#nav{
  border: 1px solid red;
}
</style>
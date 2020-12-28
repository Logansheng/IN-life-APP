<template>
  <div id="nav">
    <router-link to="/money" class="item">
      <Icon name="money" class="icon"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="labels" class="icon"></Icon>
      标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics" class="icon"></Icon>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
name: "Nav",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
#nav {
  height: 20%;
  padding: 6px;
  display: flex;
  flex-direction: row;
  @extend %outerShadow;

  > .item {
    justify-content: center;
    width: 33.3333%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #334b5c;
    >.icon{
      height: 30px;
      width: 30px;
    }
  }
  > .router-link-active {
    color: #d53a35;
  }
    }
</style>
<template>
  <div class="layout-warpper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.layout-warpper{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  flex-direction: column-reverse;
  border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
}
</style>
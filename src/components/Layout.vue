<template>
  <div class="nav-warpper">
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
.nav-warpper{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content{
  flex-grow: 1;
  overflow: auto;
}
</style>
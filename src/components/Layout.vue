<template>
  <div class="layout-warpper" :class=" classPrefix && `${classPrefix}-warpper` ">
    <div class="content" :class=" classPrefix && `${classPrefix}-content` ">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  props:['classPrefix'],
  name: 'Layout'
};
</script>


<style lang="scss" scoped>
.layout-warpper{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content{
  flex-grow: 1;
  overflow: auto;
}
</style>
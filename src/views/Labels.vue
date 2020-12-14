<template>
  <Layout class="context">

    <ol>
      <li><span>衣</span> <Icon name="right"></Icon></li>
      <li><span>食</span> <Icon name="right"></Icon></li>
      <li><span>住</span> <Icon name="right"></Icon></li>
      <li><span>行</span> <Icon name="right"></Icon></li>
    </ol>
    <div>
      <button>新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
name: "Labels"
}
</script>

<style lang="scss" scoped>
.context{


  ol{

    font-size: 16px;
    li{
      border: 1px solid red;
      background: #fff;
      min-height: 44px;
    }
  }
}
</style>
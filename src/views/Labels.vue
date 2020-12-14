<template>
  <Layout class="context">

    <ol>
      <li><span>衣</span> <Icon class="icon" name="right"></Icon></li>
      <li><span>食</span> <Icon class="icon" name="right"></Icon></li>
      <li><span>住</span> <Icon class="icon" name="right"></Icon></li>
      <li><span>行</span> <Icon class="icon" name="right"></Icon></li>
    </ol>
    <div class="newTag-wrapper">
      <button class="newTag">新建标签</button>
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
    background: #fff;
    padding-left: 16px;
    font-size: 16px;
    .icon{
      height: 16px;
      width: 16px;
      color: #666;
      margin-right: 16px;
    }
    li{
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .newTag{
    background: #767676;
    height: 32px;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
  }
  .newTag-wrapper{
    padding: 32px 0;
    text-align: center;
  }
}
</style>
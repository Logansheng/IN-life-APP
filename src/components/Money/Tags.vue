<template>
  <div class="tags">
    <div class="new ">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>

</template>

<script lang="ts">
export default {
name: "Tags"
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;

  > .current {
    display: flex;

    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 14px;
      margin-right: 14px;
      line-height: $h;
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      color: #999;
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}

</style>
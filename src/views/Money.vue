<template>
  <Layout>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
      </div>
    </div>

    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div class="notes">
      <label>
        <span class="name">备注</span>
        <input type="text" placeholder="在这里输入备注">
      </label>
    </div>

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

  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

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

.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;

  .name {
    padding-right: 16px;
  }

  input {
    flex-grow: 1;
    border: none;
    height: 64px;
    background: transparent;
    padding-right: 16px;
  }
}

.types {
  background: #c4c4c4;
  font-size: 24px;
  display: flex;

  > li {
    height: 64px;
    line-height: 64px;
    width: 50%;
    display: flex;
    justify-content: center;
    position: relative;

    &.selected::after {
      content: '';
      width: 100%;
      bottom: 0;
      left: 0px;
      height: 4px;
      position: absolute;
      background: #333;

    }

  }
}

.numberPad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    @extend %innerShadow;
  }

  .buttons {
    @extend %x;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      $bg: #f2f2f2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }
    }
  }
}
</style>
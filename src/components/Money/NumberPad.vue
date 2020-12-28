<template>
  <div class="NumberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button class="choose" @click="inputContent">1</button>
      <button class="choose" @click="inputContent">2</button>
      <button class="choose" @click="inputContent">3</button>
      <button class="choose" @click="remove">
        <Icon name="close" class="remove"></Icon>
      </button>
      <button class="choose" @click="inputContent">4</button>
      <button class="choose" @click="inputContent">5</button>
      <button class="choose" @click="inputContent">6</button>
      <button class="choose" @click="clear" >
        <Icon name="clear" class="clear" ></Icon>
      </button>
      <button class="choose" @click="inputContent">7</button>
      <button class="choose" @click="inputContent">8</button>
      <button class="choose" @click="inputContent">9</button>
      <button  class="ok" @click="ok"><span>ok</span></button>
      <button  @click="inputContent" class="zero choose">0</button>
      <button class="choose" @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent as string;
    if (this.output === '0') {
      if (input === '0') {
        return;
      } else if ('123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += button.textContent;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
    return;
  }

  clear() {
    this.output = '0';
  }

  ok() {
    if (this.output === '0') {
      return alert('金额不能为空哦');
    } else {
      const number = parseFloat(this.output);
      this.$emit('update:value', number);
      this.$emit('submit', number);
      this.output = '0';
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.NumberPad {
  color: #334b5c;
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height: 72px;
    @extend %innerShadow;

  }
  .remove {
    height: 44px;
    width: 44px;
    color: #334b5c;
  }
  .buttons {
    .choose:active{
      background: #fd7e79;
    }
    @extend %x;
    > button {
      font-weight: bold;
      font-size: 24px;
      width: 25%;
      color: #334b5c;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      border-radius: 10px;
      @extend %outerShadow;
      &.ok {
      height: 128px;
      float: right;
      background: #fd7e79;

    }

      &.zero {
        width: 50%;
      }
    }
  }
}
@keyframes wave{
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(10deg);
  }
  66%{
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.clear:active{
   animation: wave 150ms infinite ;
 }
@keyframes big {
  0%{
    font-size: 24px;
  }
  100%{
    font-size: 36px;
  }
}
.ok:active{
  animation: big 150ms infinite ;
}
</style>
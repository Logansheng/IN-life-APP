<template>
  <div>
    <ul class="types">
      <li :class="{[classPrefix+'-item']: classPrefix, selected: value==='-'}"
          @click="selectType('-')">支出
      </li>
      <li :class="{[classPrefix+'-item']: classPrefix, selected: value==='+'}"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Watch, Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  type = '-';

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }

  @Watch('type')
  onTypeChanged(value: string) {
    this.$emit('update:value', value);
  }

}
</script>

<style lang="scss" scoped>
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
      left: 0;
      height: 4px;
      position: absolute;
      background: #333;

    }

  }
}

</style>
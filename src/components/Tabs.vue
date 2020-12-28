<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li v-for="item in dataSource" :key="item.value"
        class="tabs-item"
        :class="liClass(item)"
        @click="select(item)"
    >{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
type DataSourceItem = { text: string; value: string }
@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array})
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix?: string;
  @Prop({type: String, default: '64px'})
  height!: string;
  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    };
  }
  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background:#eef2f6;
  font-size: 24px;
  display: flex;

   &-item{
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
      background: #fd7e79;
      transition: all 1s;
    }

  }
}
</style>
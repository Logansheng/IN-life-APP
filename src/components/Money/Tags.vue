<template>
  <div class="tags">
    <div>

    </div>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">

      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">

import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper';
@Component

export default class Tags extends mixins(TagHelper) {

  selectedTags: string[] = [];
  get tagList() {

    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags');
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #eef2f6;
  font-size: 14px;
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {

    display: flex;
    flex-wrap: wrap;
    > li {
      $bg: #e7e8ea;
      background: $bg;
      color: #7a7b7d;
      $h: 30px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: #334b5c;
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
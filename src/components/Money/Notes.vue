<template>
  <div class="notes">
    <label>
      <span class="name">备注{{value}}</span>
      <input type="text" placeholder="在这里输入备注" v-model="value">
    </label>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value='';

}
</script>

<style lang="scss" scoped>
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

</style>
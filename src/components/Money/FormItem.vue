<template>
  <div class="notes">
    <label>
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" :placeholder="this.placeholder" v-model="value">
    </label>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default:''}) value!: string
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding: 8px 0px 8px 16px;
  display: flex;
  .name {
    padding-right: 16px;
  }

  input {
    flex-grow: 1;
    border: none;
    height: 40px;
    background: transparent;
    padding-right: 16px;
  }
}

</style>
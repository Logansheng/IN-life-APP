<template>
  <div class="notes">
    <label>
      <span class="name">{{ this.fieldName }}</span>
      <template v-if=" type==='date'">
        <input :type="type||'text'" :placeholder="this.placeholder"
               :value="x(value)"
               @input="onValueChanged($event.target.value)">
      </template>
      <template v-else>

        <input :type="type||'text'" :placeholder="this.placeholder"
               :value="value"
               @input="onValueChanged($event.target.value)">
      </template>

    </label>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;

  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

  x(isoString: string) {
    console.log(isoString);
    return dayjs(isoString).format('YYYY-MM-DD');
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding: 4px 0 4px 16px;
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
<template>
  <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
      <Types @update:value="onUpdateType"></Types>
    <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"></FormItem>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" class="save"></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';

@Component(
  {
    components: {Tags, FormItem, Types, NumberPad},
    computed:{
      recordList(){
        return store.recordList
      }
    }
  }
)
export default class Money extends Vue {

  tags = store.tagList;
  recordList = store.recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord(){
   store.createRecord(this.record)
  }

}

</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>

</style>
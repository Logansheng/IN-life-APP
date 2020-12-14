<template>
  <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
      <Notes @update:value="onUpdateNotes"></Notes>
      <Types @update:value="onUpdateType"></Types>
      <Tags :data-source="tags" @update:value="onUpdateTags" class="save"></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';

const recordList: RecordItem[]=model.fetch()
@Component(
  {
    components: {Tags, Notes, Types, NumberPad},
  }
)
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: RecordItem[] = recordList
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
    const record2: RecordItem = model.clone(this.record);
    record2.time= new Date()
    this.recordList.push(record2)
  }
@Watch('recordList')
  onRecordListChange(){
    model.save(this.recordList)
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
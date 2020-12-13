<template>
  <Layout>
    {{ recordList }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>
    <Types @update:value="onUpdateType"></Types>
    <Notes @update:value="onUpdateNotes"></Notes>
    <Tags :data-source="tags" @update:value="onUpdateTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  time?: Date;
}

@Component(
  {
    components: {Tags, Notes, Types, NumberPad},
  }
)
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: Record = {
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
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.time= new Date()
    this.recordList.push(record2)
  }
@Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
}
}

</script>

<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"
    ></Tabs>
    <div class="notes">
      <FormItem field-name="备注"
                :value.sync="record.notes"
                placeholder="在这里输入备注"/>
    </div>
    <div class="createAt">
      <FormItem field-name="日期"
                type="date"
                :value.sync="record.createAt"
                placeholder="在这里输入日期"/>
    </div>
    <Tags @update:value="record.tags= $event"/>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeLIst';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0,createAt: new Date().toISOString()
  };

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('添加成功✔');
      this.record.notes = '';
    }

  }
}
</script>

<style lang="scss" >
.layout-content {
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
  }

.notes {
  padding: 12px 0;
}
</style>
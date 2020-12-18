<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeLIst" :value.sync="type"></Tabs>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></Tabs>
    <div>
      type:{{type}}
      <hr>
      interval:{{interval}}
    </div>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalLIst';
import recordTypeList from '@/constants/recordTypeLIst';

@Component({
    components: {Tabs,},
  }
)
export default class Statistics extends Vue {
  type='-'
  interval = 'day ';
  intervalList = intervalList
  recordTypeLIst=recordTypeList


}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item{
  background: #ffffff;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
</style>
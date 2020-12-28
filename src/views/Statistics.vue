<template>
  <Layout>
    <div class="parent">
      <Tabs class-prefix="type" :data-source="recordTypeLIst" :value.sync="type"></Tabs>
      <div></div>
      <Chart :options="x"></Chart>
      <ol v-if="groupedList.length>0" class="pra">
        <li v-for="(group,index) in groupedList" :key="index">
          <h3 class="title">{{ beautify(group.title) }} <span>￥{{ group.total }}</span></h3>
          <ol>
            <li v-for="item in group.items" :key="item.id"
                class="record"
            >
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }} </span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="noResult">目前没有记录，请添加一笔哦</div>
      <img src="../assets/icons/笔记本.png" alt="~~" class="hint" >

    </div>

  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeLIst';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import Chart from '@/components/Chart.vue';
import _ from 'lodash';

type Result = { title: string; total?: number; items: RecordItem[] }
@Component({
  components: {Tabs, Chart},
})
export default class Statistics extends Vue {
  beautify(string: string) {
    const now = dayjs();
    if (dayjs(string).isSame(now, 'day')) {
      return '今天';
    } else if (dayjs(string).isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (dayjs(string).isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (dayjs(string).isSame(now, 'year')) {
      return dayjs(string).format('YYYY年M月D日');
    } else {
      return dayjs(string).format('YYYY年M月D日');
    }
  }

  get x() {
    const array = this.recordList.map(r => _.pick(r, ['type', 'amount']));
    const outCome = array.filter(i => i.type === '-').map(i => i.amount)
      .reduce((v1, v2) => {return v1 + v2;}, 0);
    const inCome = array.filter(i => i.type === '+').map(i => i.amount)
      .reduce((v1, v2) => {return v1 + v2;}, 0);
    return {

      tooltip: {
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        left: 'left',

      },
      color: ['#f37570', '#80a9b0'],
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],

          data: [
            {value: outCome, name: '支出'},
            {value: inCome, name: '收入'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.map(t => t.name).join(',');
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const {recordList} = this;
    const newList = clone(recordList)
      .filter(r => r.type === this.type)
      .sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
    if (newList.length === 0) {return [];}

    const result: Result[] = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  recordTypeLIst = recordTypeList;

}
</script>

<style lang="scss" scoped>

.echarts {
  max-width: 100%;
}

.parent {
  height: 80vh;
  position: relative;
}

.noResult {
  padding: 32px;
  text-align: center;
}

.hint {

  position: absolute;
  max-width: 80px;
  opacity: 0.5;
  right: 50%;
  margin-right: -40px;
}


::v-deep {
  .type-tabs-item {
    background: white;
    transition: all 1000ms;
    //font-size: 20px;


    &.selected {
      background: #334b5c;
      color: white;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  overflow: auto;
  background: white;

  @extend %item;
}

.notes {
  padding: 0;
  margin-right: auto;
  margin-left: 16px;
  color: #999;

}


</style>
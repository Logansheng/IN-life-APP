<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
//import {echarts} from 'echarts'
import * as ECharts from 'echarts';
import * as echarts from 'echarts';

@Component
export default class Chart extends Vue {
  @Prop() options: any;

  mounted() {
     const chart = echarts.init(this.$refs.wrapper)
      chart.setOption(this.options)

  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 400px;
}
</style>
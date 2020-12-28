<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts';

@Component
export default class Chart extends Vue {
  @Prop() options: any;
  chart: any;

  mounted() {
    this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    this.chart.setOption(this.options);
  }

  @Watch('options')
  onOptionsChange() {
    this.chart.setOption(this.options);
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 400px;
}
</style>
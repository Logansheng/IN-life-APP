<template>
  <div>
    <ul class="types">
      <li @click="selectType('-')" :class="type==='-' && 'selected'">支出</li>
      <li @click="selectType('+')" :class="type==='+' && 'selected'">收入</li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-';

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>

<!--<script >-->
<!--export default {-->
<!--name: "Types",-->
<!--  data(){-->
<!--  return{type:'-'}-->
<!--  },-->
<!--  methods:{-->
<!--  selectType(type){-->
<!--    if (type !== '-' && type!=='+'){-->
<!--      throw new Error('type is unknown')-->
<!--    }-->
<!--    this.type=type-->
<!--  }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  font-size: 24px;
  display: flex;

  > li {
    height: 64px;
    line-height: 64px;
    width: 50%;
    display: flex;
    justify-content: center;
    position: relative;

    &.selected::after {
      content: '';
      width: 100%;
      bottom: 0;
      left: 0;
      height: 4px;
      position: absolute;
      background: #333;

    }

  }
}

</style>
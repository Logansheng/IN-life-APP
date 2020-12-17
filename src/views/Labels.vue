<template>
  <Layout class="context">
    <div class="taggs">
      <router-link :to="`/labels/edit/${tag.id}`"
                   class="tagg" v-for="tag in tags"
                   :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon class="icon" name="right"></Icon>
      </router-link>
    </div>
    <div class="newTag-wrapper">
      <Button @click="createTag" class="newTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {Button}
})
export default class Labels extends Vue {

TODO  tags = []//store.tagList

  createTag() {
    const name = window.prompt('请输出标签名');
    if (name){
      //TODO
      // store.createTag(name)
    }
  }

}
</script>

<style lang="scss" scoped>
.context {
  .taggs {
    background: #fff;
    padding-left: 16px;
    font-size: 16px;

    .icon {
      height: 16px;
      width: 16px;
      color: #666;
      margin-right: 16px;
    }

    .tagg {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
    }
  }

  .newTag {
    background: #767676;
    height: 32px;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
  }

  .newTag-wrapper {
    padding: 32px 0;
    text-align: center;
  }
}
</style>
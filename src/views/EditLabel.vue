<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goback"></Icon>
      <span class="title">编辑栏</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" field-name="标签名"
                placeholder=请输入标签名
                @update:value="update"
      ></FormItem>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
  components: {Button, FormItem}
})

export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;

  created() {
    this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace('/NotFound');
    }
  }

  update(name: string) {
    if (this.tag) {
      store.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (store.removeTag(this.tag.id)) {
        this.$router.back();
      }
    }
  }

  goback() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
  }

  > .leftIcon {
    width: 20px;
    height: 20px;
    color: #666666;
  }

  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}

.form-wrapper {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>
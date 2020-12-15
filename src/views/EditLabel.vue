<template>
<Layout>
  编辑栏
</Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator'
import tagModel from '@/model/tag-model';

@Component
export default class EditLabel extends Vue {
created(){
  const id=this.$route.params.id
  tagModel.fetch()
  const tags=tagModel.data
  const tag=tags.filter(t => t.id===id)[0]
  if (tag){
    console.log(tag);
  }else{
    this.$router.replace('/NotFound')
  }

}
}
</script>

<style lang="scss" scoped>

</style>
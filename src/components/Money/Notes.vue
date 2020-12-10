<template>
  <div class="notes">
    <label>
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
  </div>

</template>

<script lang="ts">
export default {
name: "Notes"
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;

  .name {
    padding-right: 16px;
  }

  input {
    flex-grow: 1;
    border: none;
    height: 64px;
    background: transparent;
    padding-right: 16px;
  }
}

</style>
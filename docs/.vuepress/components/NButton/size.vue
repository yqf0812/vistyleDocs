<template>
  <div class="block">
    <ViNButton size="large">大按钮</ViNButton>
    <ViNButton>中按钮</ViNButton>
    <ViNButton size="small">小按钮</ViNButton>
  </div>
</template>

<script setup></script>

<style scoped>
.block {
  width: 100%;
  /* height: 200px; */
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
:deep(.neu-btn) {
  margin-right: 20px;
}
</style>

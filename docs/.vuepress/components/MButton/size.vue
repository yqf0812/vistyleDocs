<template>
  <div class="block">
    <ViMButton size="large">流光按钮</ViMButton>
    <ViMButton>流光按钮</ViMButton>
    <ViMButton size="small">流光按钮</ViMButton>
  </div>
</template>

<script setup></script>

<style scoped>
.block {
  width: 100%;
  /* height: 200px; */
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
:deep(.marquee-btn) {
  margin-right: 20px;
}
</style>

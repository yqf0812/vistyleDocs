<template>
  <div class="block">
    <ViGButton size="large">大按钮</ViGButton>
    <ViGButton size="medium">中按钮</ViGButton>
    <ViGButton size="small">小按钮</ViGButton>
  </div>
</template>

<script setup></script>

<style scoped>
.block {
  width: 100%;
  /* height: 200px; */
  background: linear-gradient(
    135deg,
    rgb(26, 26, 46) 0%,
    rgb(22, 33, 62) 50%,
    rgb(15, 52, 96) 100%
  );
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
:deep(.glass-btn) {
  margin-right: 20px;
}
</style>

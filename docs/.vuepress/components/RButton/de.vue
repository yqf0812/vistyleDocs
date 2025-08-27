<template>
  <div class="block">
    <ViRButton>复古按钮</ViRButton>
    <ViRButton disabled>禁用</ViRButton>
  </div>
</template>

<script setup></script>

<style scoped>
.block {
  width: 100%;
  /* height: 200px; */
  background: #000;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
:deep(.retro-btn) {
  margin-right: 20px;
}
</style>

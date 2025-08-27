<template>
  <div class="block">
    <ViNButton>白色</ViNButton>
  </div>
  <div class="block bg-dark">
    <ViNButton theme="dark">黑色</ViNButton>
  </div>
  <div class="block bg-red">
    <ViNButton theme="red">红色</ViNButton>
  </div>
  <div class="block bg-blue">
    <ViNButton theme="blue">蓝色</ViNButton>
  </div>
  <div class="block bg-green">
    <ViNButton theme="green">绿色</ViNButton>
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
  margin-bottom: 12px;
}
:deep(.neu-btn) {
  margin-right: 20px;
}
.bg-dark {
  background-color: #2a2e35;
}
.bg-blue {
  background-color: #d6e1ff;
}
.bg-green {
  background-color: #d6f5e5;
}
.bg-red {
  background-color: #ffe5e5;
}
</style>

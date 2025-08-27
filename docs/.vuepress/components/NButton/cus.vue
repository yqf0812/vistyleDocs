<template>
  <div class="block">
    <ViNButton
      theme="custom"
      bgColor="#fff0e0"
      textColor="#b36b15"
      shadowLight="#ffffff"
      shadowDark="#e6c29e"
      >橙色</ViNButton
    >
  </div>
</template>

<script setup></script>

<style scoped>
.block {
  width: 100%;
  /* height: 200px; */
  background-color: #fff0e0;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
:deep(.neu-btn) {
  margin-right: 20px;
}
</style>

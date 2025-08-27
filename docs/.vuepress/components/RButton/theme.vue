<template>
  <div class="block">
    <ViRButton theme="red">red</ViRButton>
    <ViRButton theme="blue">blue</ViRButton>
    <ViRButton theme="green">green</ViRButton>
    <ViRButton
      theme="custom"
      bgColor="#ffd166"
      borderLight="#fff3b0"
      borderDark="#cca633"
      >yellow</ViRButton
    >
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

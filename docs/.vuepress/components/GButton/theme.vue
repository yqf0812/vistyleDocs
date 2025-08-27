<template>
  <div class="block">
    <ViGButton theme="red" @click="handlerClick">红色按钮</ViGButton>
    <ViGButton theme="blue">蓝色按钮</ViGButton>
    <ViGButton theme="green">绿色按钮</ViGButton>
    <ViGButton theme="custom" color="#ff9900">橙色按钮</ViGButton>
    <ViGButton theme="custom" color="rgb(255,192,203)">粉色按钮</ViGButton>
    <ViGButton
      theme="custom"
      bgRgba="rgba(255,192,203,0.3)"
      borderRgba="rgba(255,192,203,0.9)"
      >粉色按钮</ViGButton
    >
  </div>
</template>

<script setup>
const handlerClick = () => {
  alert("点击了红色按钮");
};
</script>

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

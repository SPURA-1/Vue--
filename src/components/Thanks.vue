<template>
  <div id="Thanks">
    <h1 class="xx">谢谢！</h1>
  </div>
</template>

<script>
export default {
  name: "Thanks"
};
</script>

<style scoped>
#Thanks {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3) inset;
  
}
#Thanks::-webkit-scrollbar {
  width: 0px;
}
.xx {
    height: 100%;
    width: 100%;
    font-size: 50px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
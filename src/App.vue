<template>
  <div id="app">
    <transition name="transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  width: 100%;
}
html,
body {
  margin: 0px;
  padding: 0px;
}
.transform-enter,
.transform-leave-to {
  opacity: 0;
  filter: blur(20px);
}
.transform-enter-active,
.transform-leave-active {
  transition: .5s ease-out;
}
</style>

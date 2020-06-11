<template>
  <div class="background">
    <div class="sk-grid">
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
      <div class="sk-grid-cube"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $grey;
  color: $primary;

  display: flex;
  align-items: center;
  justify-content: center;
}
.sk-grid {
  width: 4rem;
  height: 4rem;
  /* Cube positions
   * 1 2 3
   * 4 5 6
   * 7 8 9
   */
}
.sk-grid-cube {
  width: 33.33%;
  height: 33.33%;
  background-color: currentColor;
  float: left;
  animation: sk-grid 1.3s infinite ease-in-out;
}
.sk-grid-cube:nth-child(1) {
  animation-delay: 0.2s;
}
.sk-grid-cube:nth-child(2) {
  animation-delay: 0.3s;
}
.sk-grid-cube:nth-child(3) {
  animation-delay: 0.4s;
}
.sk-grid-cube:nth-child(4) {
  animation-delay: 0.1s;
}
.sk-grid-cube:nth-child(5) {
  animation-delay: 0.2s;
}
.sk-grid-cube:nth-child(6) {
  animation-delay: 0.3s;
}
.sk-grid-cube:nth-child(7) {
  animation-delay: 0s;
}
.sk-grid-cube:nth-child(8) {
  animation-delay: 0.1s;
}
.sk-grid-cube:nth-child(9) {
  animation-delay: 0.2s;
}

@keyframes sk-grid {
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}
</style>

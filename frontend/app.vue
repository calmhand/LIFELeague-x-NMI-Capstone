<template>
  <div id="app-container">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: "termina-regular";
    src: url("./assets/fonts/Termina/TerminaTest-Regular.otf");
  }

  @font-face {
    font-family: "termina-bold";
    src: url("./assets/fonts/Termina/TerminaTest-Bold.otf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app-container {
    min-height: 100vh;
  }

  #video-bg {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      position: fixed;
      inset: 0 0 0 0;
      z-index: -1;
  }

  /* Global Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  filter: blur(5rem);
  transform: scale(1.1, 1.1);
}

</style>
<template>
  <div id="app-container">
    <NuxtPage page-key="static" />
  </div>
</template>

<style>
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

  /* Global Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
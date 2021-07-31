<template>
  <div class="app">
    <Login />
  </div>
</template>

<script>
import Login from "@/views/Login";
export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
    font-family: monster;
    src: url("./assets/fonts/cc-monster-master.ttf");
}
@font-face {
    font-family: monster;
    src: url("./assets/fonts/cc-monster-master.woff");
}
@font-face {
    font-family: poppins;
    src: url("./assets/fonts/poppins-semibold.ttf");
}
@font-face {
    font-family: poppins;
    src: url("./assets/fonts/poppins-semibold.woff");
}
</style>
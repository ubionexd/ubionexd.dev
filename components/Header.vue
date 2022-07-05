<script>
import BackArrow from "vue-material-design-icons/ArrowLeftBoldOutline.vue";

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <header class="element-header">
    <h1>ubionexd {{ name }}</h1>
    <a class="nav">About</a>
    <a class="nav">Blog</a>
    <a class="nav">Projects</a>
    <a class="back"><font-awesome-icon icon="fa-solid fa-left" /> BACK</a>
  </header>
</template>

<style>
.element-header {
  position: fixed;
  z-index: 999;
  background: #424242;
  width: fit-content;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}

.element-header h1,
.element-header a {
  color: #ffffff;
  cursor: pointer;
}

.element-header h1,
.element-header a:hover {
  color: #ffffff;
  cursor: pointer;
}

.nav {
  margin-right: 20px;
}

.back {
  margin-left: 10px;
}
</style>
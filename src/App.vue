<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "../public/style.scss";
@import "../public/font.css";
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body,
html {
  background-color: var(--bg);
  font-family: "IRANSansWeb_Light";
}
input,
button,
textarea {
  font-family: inherit;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.container {
  max-width: 1280px;
  margin-inline: auto;
}
@media screen and (max-width: 768px) {
  .container {
    padding-inline: 16px;
  }
}
</style>

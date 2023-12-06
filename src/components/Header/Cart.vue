<template>
  <div id="cart">
    <img :src="this.icon" alt="" />
    <p class="title">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
<style lang="scss" scoped>
#cart {
  width: 290px;
  height: 170px;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset,
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.2) inset;
  filter: drop-shadow(0px 4px 8px rgba(94, 92, 102, 0.04));
  background: #252740;
  border: 1px solid inherit;
  border-radius: 12px;
  padding: 8px 14px 22px 14px;
  .title {
    font-size: 16px;
    font-weight: 700;
  }
  .description {
    font-size: 13.5px;
    font-weight: 500;
    line-height: 1.8;
  }
}
</style>

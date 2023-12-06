<template>
  <div id="fix">
    <a href="https://www.excoino.com/" class="logo">
      <img src="@/static/Navbar/logo.svg" alt="" />
    </a>
    <a href="https://panel.excoino.com/auth/login">
      <button class="CTA btn" id="CTA">دریافت کد دعوت</button>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
#fix {
  border-radius: 0px 0px 8px 8px;
  background: rgba(26, 27, 55, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 120px;
  position: sticky;
  top: 0;
  z-index: 999;

  .btn {
    display: flex;
    width: 240px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    background: #500fe9;
    color: #faf9fa;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  #fix {
    background-color: rgba(42, 42, 42, 0.6);
    justify-content: center;
    top: 85vh;
    .logo {
      display: none;
    }
    .btn {
      border: 0;
    }
  }
}
</style>

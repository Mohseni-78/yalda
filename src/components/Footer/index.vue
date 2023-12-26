<template>
  <div id="footer">
    <div class="social">
      <a href="https://instagram.com/excoino_com?igshid=NzZhOTFlYzFmZQ==" target="_blank">
        <img src="../../../public/Footer/instagram.svg" alt="" />
      </a>
      <a href="https://t.me/excoino" target="_blank">
        <img src="../../../public/Footer/telegram.svg" alt="" />
      </a>
      <a href="http://aparat.com/excoino/" target="_blank">
        <img src="../../../public/Footer/aparat.svg" alt="" />
      </a>
      <a href="https://twitter.com/excoino" target="_blank">
        <img src="../../../public/Footer/twitter.svg" alt="" />
      </a>
      <a href="https://ir.linkedin.com/company/excoino-com" target="_blank">
        <img src="../../../public/Footer/linkedin.svg" alt="" />
      </a>
    </div>
    <div class="links">
      <a href="https://www.excoino.com/">
        <p>صفحه اصلی</p>
      </a>
      <a href="https://www.excoino.com/terms-of-service/">
        <p>قوانین استفاده</p>
      </a>
      <a href="https://www.excoino.com/privacy-policy/">
        <p>حفظ حریم خصوصی</p>
      </a>
      <a href="https://www.excoino.com/about-us/">
        <p>درباره‌ی ما</p>
      </a>
      <a href="https://www.excoino.com/contact/">
        <p>تماس باما</p>
      </a>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
#footer {
  padding: 16px 0;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border-top: 1px solid #afacbf;
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding-bottom: 16px;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #afacbf;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }
  @media screen and (max-width: 768px) {
    .links {
      font-size: 10px;
      padding-bottom: 100px !important;
    }
  }
}
</style>

<template>
  <div id="how" class="container">
    <span>اما امتیازها چطور محاسبه می‌شه؟</span>
    <p>
      اگه در اکسکوینو ۵۰ دلار واریزی داشته باشی، ۲ امتیاز به ت تعلق می‌گیره. حالا اگه دوستت رو دعوت
      کنی و اون هم ۵۰ دلار واریز کنه، علاوه‌بر اینکه دوستت ۲ امتیاز می‌گیره، خودت هم یک امتیاز نصیبت
      می‌شه.
    </p>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
#how {
  position: relative;
  max-width: 863px;
  min-height: 131px;
  border: 1px solid var(--system-light-primary, #b2b2ff);
  border-radius: 12px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 420px;
  margin-top: 50px;
  span {
    position: absolute;
    top: -12px;
    color: #b2b2ff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    background-color: var(--bg);
    padding-inline: 16px;
  }
  p {
    // padding-inline: 32px;
    padding: 20px 32px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
@media screen and (max-width: 768px) {
  #how {
    max-width: 330px;
    min-height: 131px;
  }
}
</style>

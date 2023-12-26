<template>
  <div id="how" class="container">
    <span>بریم سراغ نحوه محاسبه امتیازها!</span>
    <div>
      <p>
        اگر موجودی کیف پولت رو به‌صورت ریال یا رمزارز معادل ۵۰ دلار افزایش بدی، هر روز ۲ امتیاز به
        دست میاری. حالا اگه دوستت رو دعوت کنی و اون هم ۵۰ دلار واریز کنه، علاوه‌بر اینکه دوستت
        به‌ازای هر روز ۲ امتیاز می‌گیره، خودت هم به‌ازای هر روز یک امتیاز نصیبت می‌شه.
      </p>
      <p>
        راستی حواست باشه حالت برعکس هم وجود داره. یعنی در صورت برداشت ریال یا رمزارز معادل ۵۰ دلار،
        به‌ازای هر روز ۲ امتیاز ازت کم می‌شه و معرف تو هم یک امتیاز منفی می‌گیره.
      </p>
    </div>
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

  margin-top: 80px;
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
    padding: 15px 32px;
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

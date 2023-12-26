<template>
  <div id="countDown" class="">
    <div class="head">
      <p class="title">فقط تا<span class="highlight"> ۱۵ دی</span></p>
      <p class="des">
        یادت باشه برای کسب امتیاز فقط تا ۱۵ دی فرصت داری، چون اسامی برنده‌‌ها ۱۶ دی مشخص می‌شه!
      </p>
    </div>
    <div class="counter">
      <div class="box">
        <span class="time">{{ day | e2p }}</span>
        <span class="name">روز</span>
      </div>
      <div class="box">
        <span class="time">{{ hour | e2p }}</span>
        <span class="name">ساعت</span>
      </div>
      <div class="box">
        <span class="time">{{ minute | e2p }}</span>
        <span class="name">دقیقه</span>
      </div>
      <div class="box">
        <span class="time">{{ second | e2p }}</span>
        <span class="name">ثانیه</span>
      </div>
    </div>
    <div class="end">
      <!-- <p class="first">تنها تا پایان آذر</p>
      <p class="sec">برای شرکت در کمپین فرصت داری!</p> -->
    </div>
    <!-- <img src="@/assets/CountDown/waterMelon.svg" alt="" class="waterMelon" /> -->
    <!-- <img src="@/assets/CountDown/phone.svg" alt="" class="phone" />
    <img src="@/assets/CountDown/redMotor.svg" alt="" class="redMotor" /> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return { day: null, hour: null, minute: null, second: null };
  },
  filters: {
    e2p: function (value) {
      return value?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
    },
  },
  methods: {
    countDownCreated() {
      let countDownDate = new Date("Dec 30, 2023 23:59:00").getTime();
      setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.second = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },
  },
  mounted() {
    this.countDownCreated();
  },
};
</script>
<style lang="scss" scoped>
#countDown {
  position: relative;
  padding-top: 92px;
  text-align: center;
  .head {
    .title {
      color: #fff;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px; /* 87.5% */
      span {
        color: #fab30c;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
      }
    }
    .des {
      color: #fff;
      padding-top: 21px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 44px; /* 157.143% */
    }
  }
  @media screen and (max-width: 768px) {
    .head {
      padding-inline: 16px;
      .title {
        font-size: 24px;
      }
      .des {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-top: 32px;
    .box {
      padding: 8px 12px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      border-radius: 4.483px;
      border: 0.747px solid #fff;
      max-width: 50px;
      min-width: 50px;
      max-height: 63px;
      min-height: 63px;
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      .name {
        color: #fff;
        font-size: 14.942px;
        font-style: normal;
        font-weight: 400;
        line-height: 23.907px;
      }
    }
  }
  .end {
    padding-top: 32px;
    color: #afacbf;
    /* Title/Bold */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 160% */
    .first {
    }
    .sec {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }
  }
  // .waterMelon {
  //   position: absolute;
  //   left: 0;
  // }
  // .redMotor {
  //   position: absolute;
  //   left: 0;
  // }
  // .phone {
  //   position: absolute;
  //   right: 0;
  // }
  // @media screen and (max-width: 768px) {
  //   .phone {
  //     top: 80%;
  //     width: 30%;
  //   }
  //   .redMotor {
  //     width: 30%;
  //     bottom: -30%;
  //   }
  // }
}
</style>

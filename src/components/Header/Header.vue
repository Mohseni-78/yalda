<template>
  <div id="header" class="container">
    <img src="../../../public/Header/coinsLeft.svg" alt="" class="left" />
    <img src="../../../public/Header/coinsRight.svg" alt="" class="right" />

    <!-- moobile -->
    <img src="../../../public/Header/shibaT.svg" alt="" class="shibaT" />
    <img src="../../../public/Header/shibaB.svg" alt="" class="shibaB" />
    <!-- end -->
    <!-- <h1>جشنواره یلدا تا عید</h1> -->
    <p class="headP">جایزه های اکسکوینو، <span>هیجان انگیز تره!</span></p>
    <p>
      از ۱۰ آذر تا ۱۵ دی وقت داری دوستات رو به اکسکوینو دعوت کنی تا دور هم نفری ۲۰۰ هزار شیبا هدیه
      بگیرین و علاوه‌بر اون یه موتور هوندا کلیک هم نصیبت بشه! البته بهتره بدونی که جشنواره اکسکوینو
      فقط به همین جایزه‌ها خلاصه نمی‌شه، یه گوشی سامسونگ Galaxy Z Fold 5 هم منتظرته! اما جریان جایزه
      ویژه عید چیه؟ اکسکوینو قراره تو عید به بهترین کاربر خودش یه ماشین 206 جایزه بده!
    </p>
    <!-- Slider -->
    <carousel-3d
      @after-slide-change="onAfterSlideChange"
      :inverse-scaling="1500"
      :space="800"
      ref="mycarousel"
    >
      <slide :index="0"><img src="../../../public/Slider/motor.svg" alt="" class="motor" /></slide>
      <slide :index="1"><img src="../../../public/Slider/phone.svg" alt="" class="phone" /></slide>
      <slide :index="2"><img src="../../../public/Slider/car.svg" alt="" class="car" /></slide>
    </carousel-3d>
    <div class="dots">
      <span
        v-for="(item, index) in dotsData"
        :key="index"
        :class="{ active: item.active }"
        class="dot-item"
        @click="goToSlide(item)"
      ></span>
    </div>
    <!-- End -->
    <div class="container-box">
      <h2>حالا برای برنده شدن باید چی‌کار کنیم؟</h2>
      <div class="container-cart">
        <template v-for="(item, index) in cartData">
          <Cart
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
          />
          <img src="../../../public/Header/arrowLeft.svg" alt="" v-if="index < 2" class="arrow" />
        </template>
      </div>
    </div>
    <a href="https://panel.excoino.com/auth/login">
      <button class="CTA btn" id="CTA">دعوت از دوستام</button>
    </a>
    <div class="how">
      <h3>
        اگه خودت و دوستات بیشترین واریزی رو در اکسکوینو داشته باشین، یه موتور هوندا به تو که دوستات
        رو دعوت کردی و نفر اول اکسکوینو شدی، تقدیم می‌شه.
      </h3>
      <p>
        بین ۹ نفر بعدی هم که تونستن بیشترین امتیاز رو کسب کنن، قرعه‌کشی می‌کنیم و یه گوشی سامسونگ
        Galaxy Z Fold 5 هدیه می‌دیم.
      </p>
      <!-- <img src="../../../public/Header/How/motor.svg" alt="" class="motor" />
      <img src="../../../public/Header/How/phone.svg" alt="" class="phone" /> -->
      <!--      <img src="../../../public/Header/How/pic.svg" alt="" class="pic"/>-->
    </div>
  </div>
</template>
<script>
import Cart from "@/components/Header/Cart.vue";

export default {
  components: { Cart },
  data() {
    return {
      dotsData: [
        {
          id: 0,
          active: true,
        },
        {
          id: 1,
          active: false,
        },
        {
          id: 2,
          active: false,
        },
      ],
      cartData: [
        {
          title: "۱.احراز هویت",
          description:
            "تو اکسکوینو احراز هویت کن و ۲۰۰ هزار شیبا به‌عنوان هدیه خوش‌آمدگویی از ما بگیر.",
          icon: require("../../../public/Header/Cart/fastVerify.svg"),
        },
        {
          title: "۲.دعوت از دوستان",
          description:
            "روی دکمه «دعوت از دوستام» کلیک کن ، کد دعوت رو بفرست برای دوستات تا اون‌ها هم نفری ۲۰۰ هزار شیبا هدیه بگیرن .",
          icon: require("../../../public/Header/Cart/orders.svg"),
        },
        {
          title: "۳.قرعه کشی",
          description:
            "این‌طوری می‌تونی شانس خودت رو برای برنده شدن موتور هوندا کلیک، گوشی سامسونگ Galaxy Z Fold 5 و جایزه ویژه عید امتحان کنی .",
          icon: require("../../../public/Header/Cart/chat.svg"),
        },
      ],
    };
  },
  methods: {
    onAfterSlideChange(index) {
      // console.log("@onAfterSlideChange Callback Triggered", "Slide Index " + index);
      this.dotsData.forEach((dot) => {
        dot.id === index ? (dot.active = true) : (dot.active = false);
      });
    },
    goToSlide(item) {
      this.dotsData.forEach((dot) => {
        dot.active = false;
        dot.customClass = "opacityLess";
      });
      item.active = true;
      this.$refs.mycarousel.goSlide(item.id);
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  position: relative;
  text-align: center;
  color: var(--label-primary);
  // .motor {
  //   width: 300px;
  // }
  // .phone {
  //   width: 300px;
  // }
  // .car {
  //   width: 300px;
  // }
  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    .dot-item {
      width: 10px;
      height: 10px;
      background-color: #33354d;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .active {
    background-color: #fab30c !important;
  }
  .opacityLess {
    opacity: 80%;
  }

  .carousel-3d-slide {
    background-color: inherit;
    border: 0 !important;
  }

  .left {
    position: absolute;
    left: 0;
    top: -22%;
  }

  .right {
    position: absolute;
    right: 0;
    top: -22%;
  }

  .shibaT {
    display: none;
  }

  .shibaB {
    display: none;
  }
  .headP {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 150% */
    span {
      color: #fab30c;
    }
  }
  h1 {
    padding-top: 36px;
    width: 20%;
    margin-inline: auto;
    font-size: 20px;
    font-weight: 400;
  }

  p {
    padding-top: 16px;
    width: 70%;
    margin-inline: auto;
    line-height: 1.8;
  }

  @media screen and (max-width: 768px) {
    .left {
      display: none;
    }
    .right {
      display: none;
    }
    h1 {
      width: 100%;
      font-size: 22px;
    }
    p {
      width: 100%;
    }
    .shibaT {
      position: absolute;
      display: block;
      top: 5%;
      right: 0;
      padding: 0 16px;
    }
    .shibaB {
      position: absolute;
      top: 25%;
      left: 0;
      display: block;
      padding: 0 16px;
    }
  }

  .container-box {
    padding-top: 88px;

    h2 {
      color: #fab30c;
    }

    .container-cart {
      padding-top: 29px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-align: right;
    }

    @media screen and (max-width: 768px) {
      .container-cart {
        flex-direction: column;
      }
      .arrow {
        transform: rotate(-90deg);
        z-index: 5;
        padding: 25px 0;
      }
    }
  }

  .how {
    position: relative;
    margin-inline: auto;
    margin-top: 150px;
    width: 863px;
    height: 256px;
    background-color: #252740;
    box-shadow: 0px 4px 0px 0px rgba(255, 255, 255, 0.25) inset,
      0px -8px 0px 0px rgba(255, 255, 255, 0.04) inset;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    // padding-inline: 80px;
    padding: 100px 80px;
    // .motor {
    //   position: absolute;
    //   left: 0;
    //   z-index: -1;
    // }
    // .phone {
    //   position: absolute;
    //   right: 0;
    //   z-index: -1;
    // }

    .pic {
      position: absolute;
      top: -50%;
    }

    p {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .how {
      width: 290px;
      font-size: 14px;
      padding-inline: 16px;

      .pic {
        top: -30%;
        width: 90%;
      }

      // .motor {
      //   width: 45%;
      // }
      // .phone {
      //   width: 30%;
      // }
    }
  }

  .btn {
    margin-top: 54px;
    margin-inline: auto;
    display: flex;
    width: 356px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: var(--text-light-chrysler-blue-98, #faf9fa);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 160% */
    background: var(--Temp-Pri, #500fe9);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .btn {
      display: none;
    }
  }
}
</style>

<template>
  <div id="header" class="container">
    <img src="@/static/Header/coinsLeft.svg" alt="" class="left" />
    <img src="@/static/Header/coinsRight.svg" alt="" class="right" />

    <!-- moobile -->
    <img src="@/static/Header/shibaT.svg" alt="" class="shibaT" />
    <img src="@/static/Header/shibaB.svg" alt="" class="shibaB" />
    <!-- end -->
    <h1>جشنواره یلدا تا عید اکسکوینو</h1>
    <p>
      یلدای امسال دوستات رو دعوت کن اکسکوینو تا دور هم نفری ۲۰۰ هزار شیبا هدیه بگیرین و علاوه‌بر اون
      یه موتور هوندا کلیک هم نصیبت بشه! البته بهتره بدونی که جشنواره اکسکوینو فقط به همین جایزه‌ها
      خلاصه نمی‌شه، یه گوشی سامسونگ Galaxy Z Fold 5 هم منتظرته! اما جریان جایزه ویژه عید چیه؟
      اکسکوینو قراره تو عید به بهترین کاربر خودش یه ماشین 206 جایزه بده!
    </p>

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
          <img src="@/static/Header/arrowLeft.svg" alt="" v-if="index < 2" class="arrow" />
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
      <!-- <img src="@/static/Header/How/motor.svg" alt="" class="motor" />
      <img src="@/static/Header/How/phone.svg" alt="" class="phone" /> -->
      <img src="@/static/Header/How/pic.svg" alt="" class="pic" />
    </div>
  </div>
</template>
<script>
import Cart from "@/components/Header/Cart.vue";
export default {
  components: { Cart },
  data() {
    return {
      cartData: [
        {
          title: "۱.احراز حویت",
          description:
            "تو اکسکوینو احراز هویت کن و ۲۰۰ هزار شیبا به‌عنوان هدیه خوش‌آمدگویی از ما بگیر.",
          icon: require("@/static/Header/Cart/fastVerify.svg"),
        },
        {
          title: "۲.دعوت از دوستان",
          description:
            "روی دکمه «دعوت از دوستام» کلیک کن،کد دعوت رو بفرست برای دوستات تا اون‌ها هم نفری ۲۰۰ هزار شیبا هدیه بگیرن .",
          icon: require("@/static/Header/Cart/orders.svg"),
        },
        {
          title: "۳.قرعه کشی",
          description:
            "این‌طوری می‌تونی شانس خودت رو برای برنده شدن موتور هوندا کلیک، گوشی  سامسونگ،  Galaxy Z Fold 5 و جایزه ویژه عید امتحان کنی .",
          icon: require("@/static/Header/Cart/chat.svg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#header {
  position: relative;
  text-align: center;
  color: var(--label-primary);

  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 0;
  }

  .shibaT {
    display: none;
  }
  .shibaB {
    display: none;
  }

  h1 {
    padding-top: 36px;
    width: 20%;
    margin-inline: auto;
  }
  p {
    padding-top: 16px;
    width: 45%;
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
    padding: 150px 80px;
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

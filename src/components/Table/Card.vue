<template>
  <div id="card">
    <div class="rank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        class="svg"
      >
        <path d="M11 0L21.3923 6V18L11 24L0.607696 18V6L11 0Z" fill="#2E2F49" />
      </svg>
      <span class="text">
        {{ rank }}
      </span>
    </div>
    <div class="name">{{ username }}</div>
    <div class="score">{{ score_with_referral | e2p }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: { rank: String, username: String, score_with_referral: String, reset: Boolean },
  filters: {
    e2p: (num) => {
      const e2p = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
      const seperatedNumber = num.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
      const joinedNumber = seperatedNumber.join(",");
      return e2p(joinedNumber);
    },
  },
};
</script>
<style lang="scss" scoped>
#card {
  width: 844px;
  height: 54px;
  border-radius: 8px;
  background: #252740;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  .rank {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #fff;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    position: relative;
    z-index: 1;
    flex: 1;
    .text {
      margin-right: 7px;
    }
    svg {
      position: absolute;
      z-index: -1;
      right: 0;
    }
  }
  .name {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    text-align: right;
    flex: 4.3;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    max-width: 44px;
    max-height: 27.789px;
    border-radius: 8px;
    background: #5959ff;
    color: #fee8b6;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    flex: 3;
  }
}
@media screen and (max-width: 768px) {
  #card {
    width: 328px;
    // .rank {
    //   flex: 1;
    // }
    // .name {
    //   flex: 1;
    // }
    // .score {
    //   flex: 1;
    // }
  }
}
</style>

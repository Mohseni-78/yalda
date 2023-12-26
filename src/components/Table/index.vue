<template>
  <div id="table" class="container">
    <div class="head">
      <span>جدول نفرات برتر </span><img src="../../../public/Table/cup.svg" alt="" />
    </div>
    <!-- table head -->
    <div id="thead">
      <div class="rank">رتبه</div>
      <div class="name">نام کاربر</div>
      <div class="score">امتیاز</div>
    </div>
    <!-- end -->
    <section class="container-cart">
      <Card
        v-for="(item, index) in data"
        :key="index"
        :rank="item.rank"
        :username="item.username"
        :score_with_referral="item.score_with_referral"
      />
    </section>
  </div>
</template>
<script>
import Card from "./Card.vue";

export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      fetch("https://api-marketing.excoino.net/board/get/json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "P-API-KEY": "84fa8361-e610-56f5-2aea-b57564e0834c",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.data = data.slice(0, 10);
        });
    },
  },
  components: { Card },
};
</script>
<style lang="scss" scoped>
#table {
  padding-top: 100px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-bottom: 32px;
    span {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
    }
  }
  .container-cart {
    display: grid;
    gap: 8px;
  }
  #thead {
    width: 844px;
    height: 54px;
    border-radius: 8px;
    background: #1f2037;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    margin-bottom: 24px;
    .rank {
      color: #afacbf;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      flex: 1;
    }
    .name {
      color: #afacbf;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      flex: 1;
    }
    .score {
      color: #afacbf;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      flex: 3;
      text-align: left;
    }
  }
  @media screen and (max-width: 768px) {
    #thead {
      width: 328px;
    }
  }
}
</style>

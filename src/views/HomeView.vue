<template>
  <div>
    <Fix v-if="showSticky" />
    <Navbar />
    <Header />
    <CountDown />
    <How />
    <Table />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Header from "@/components/Header/Header.vue";
import CountDown from "@/components/CountDown";
import Table from "@/components/Table";
import How from "@/components/How";
import Footer from "@/components/Footer";
import Fix from "@/components/Navbar/Fix.vue";

export default {
  components: { Navbar, Header, CountDown, Table, How, Footer, Fix },
  data() {
    return { showSticky: false };
  },
  methods: {
    onScroll(event) {
      scrollY > 0 ? (this.showSticky = true) : (this.showSticky = false);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style scoped lang="scss"></style>

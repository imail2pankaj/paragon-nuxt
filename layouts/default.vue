<template>
  <div class="loadedpage">
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer/index";

export default {
  components: { Header, Footer },
  layout: "main",
};
</script>
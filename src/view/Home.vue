<template>
  <Header />
  <!-- <Carousel /> -->
  <div class="container">
    <Banner />
  </div>
  <div class="container">
    <Filter/>
    <list-product />
  </div>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import ListProduct from '../components/product/ListProduct.vue';
import Footer from '../components/Footer.vue';
import Filter from '../components/product/Filter.vue';
import Banner from '../components/Banner.vue'
export default {
    components: {
        Header,
        Banner,
        ListProduct,
        Footer,
        Filter
    },
};
</script>

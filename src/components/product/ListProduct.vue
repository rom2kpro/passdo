<template>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </div>  
</template>

<script>
import Product from './Product.vue'
export default {
	components:{
    Product
  }
}
</script>
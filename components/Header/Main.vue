<script setup>
import { useProductsStore } from '~/store/products';

const store = useProductsStore;
</script>

<template>
  <header class="header">
    <!-- Other content -->

    <HeaderCart
      :basket-count="store.state.items?.length"
      :sum-count="store.getters.cartTotalPrice"
    />
  </header>
</template>

<style lang="scss">
.header {
  height: 140px;
  position: relative;
}
</style>
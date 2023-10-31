<script setup>
const props = defineProps({
  sumCount: Number || String,
  basketCount: Number || String,
});
const { changeEndProduct } = useChangeEndProduct();
</script>

<template>
  <div class="cart header__cart">
    <div class="cart__inner">
      <img src="img/icons/cart.svg" alt="cart" class="cart__img">

      <div class="cart__info">
        <span class="cart__title">Ваша корзина</span>
        <span class="cart__items">{{ changeEndProduct(basketCount) }}</span>
        <span class="cart__sum">{{ sumCount }} ₽</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header__cart {
  position: absolute;
  right: 0;
  bottom: 20px;
}

.cart {
  &__inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__img {
    width: 32px;
    height: 32px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include font-14-regular;
  }

  &__items {
    @include font-12-regular;
    color: $dark-gray;
  }

  &__sum {
    @include font-12-regular;
    color: $black2;
  }
}
</style>
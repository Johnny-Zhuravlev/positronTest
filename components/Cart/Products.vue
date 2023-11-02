<script setup>
import { useProductsStore } from '~/store/products';

const store = useProductsStore;
const props = defineProps({
  products: Array
});

const cartItemPrice = (product) => {
  return Number(product.price) * product.quantity
}

const decreaseProduct = (i, product) => {
  if (product.quantity > 1) {
    store.dispatch('decrement', i)
  } else {
    store.dispatch('decrement', i)
    deleteProduct(i);
  }
}
const increaseProduct = (i) => {
  store.dispatch('increment', i)
}

const deleteProduct = (i) => {
  store.dispatch('remove', i)
}
</script>

<template>
  <div>
    <ul class="products cart-content__products">
      <li v-for="(product, i) in products" :key="product.id" class="product products__item">
        <img :src="product.img" alt="image" class="product__img">

        <div class="product__info">
          <span class="product__label">
            {{ product.label }}
          </span>
          <span class="product__description">
            {{ product.desc }}
          </span>
          <span class="product__code">
            {{ product.code }}
          </span>
        </div>

        <div class="controls product__controls">
          <div class="controls__item" @click="decreaseProduct(i, product)">
            <img src="/img/icons/minus.svg" alt="decrease">
          </div>
          <span class="controls__item">{{ product.quantity }}</span>
          <div  @click="increaseProduct(i)" class="controls__item">
            <img src="/img/icons/plus.svg" alt="increase">
          </div>

          <span v-if="product.quantity > 1" class="price-per-item">
            {{ product.price }} ₽/шт.
          </span>
        </div>

        <div class="product__price">
          {{ cartItemPrice(product) }} ₽
        </div>

        <UIClose @click="deleteProduct(i)" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.cart-content__products {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.products {
  &__item {
    padding: 0 53px 20px 15px;
    border-bottom: 1px solid $light-gray;
  }
}

.product {
  display: flex;
  align-items: center;
  position: relative;

  &__img {
    width: 100px;
    height: 100px;
    margin-right: 31px;
    border-radius: 2px;
  }

  &__info {
    max-width: 263px;
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin: 0 0 6px;
    font-weight: 600;
  }

  &__description {
    margin: 0 0 7px;
    @include font-12-regular;
  }

  &__code {
    @include font-14-regular;
    color: $dark-gray;
  }

  &__controls {
    display: flex;
    @include font-14-regular;
    margin: 0 auto;
    position: relative;
  }

  &__price {
    font-family: 'Roboto', sans-serif;
    @include font-18-regular;
    font-weight: 500;
  }

  .close {
    position: absolute;
    top: 0;
    right: 6px;
  }
}

.controls {
  display: flex;
  gap: 4px;

  &__item {
    width: 32px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $light-grayish-blue;

    &:first-child {
      border-radius: 4px 0 0 4px;
      cursor: pointer;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
      cursor: pointer;
    }
  }
}

.price-per-item {
  width: 100%;
  @include font-12-regular;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: -24px;
  transform: translateX(-50%);
}
</style>
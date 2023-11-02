<script setup>
import { ref, computed } from 'vue';
import { useProductsStore } from '~/store/products';

const store = useProductsStore;
const { changeEndProduct } = useChangeEndProduct();

const isSetting = ref(false);
let loadingState = ref(true);
const loading = computed(() => {
  setTimeout(() => {
    loadingState.value = false
  }, 200)

  return loadingState.value;
})

const clearCart = () => {
  store.state.items = [];
  store.state.basketCount = 0;
  store.state.productSum = 0;
}

const order = async () => {
  await axios.post('https://www.someURL.api/order', {
    body: JSON.stringify(store.state.items),
    total_sum: store.state.cartSum,
    setting: isSetting.value
  })
  .then((res) => {
    // do something
  })
  .catch((e) => {
    console.log(e);
  })
}

onMounted(() => {store.dispatch('getAllProducts')})
</script>

<template>
  <section class="cart-content-wrapper">
    <div v-if="store.state.items?.length" class="cart-content">
      <div class="cols cart-content__cols">
        <div class="col col_left">
          <div class="col__head cart-content__head">
            <h2 class="title cart-content__title">Ваша корзина</h2>
            <div class="goods-counter">
              {{ changeEndProduct(store.state.items?.length) }}
            </div>
            <span class="cart-clear" @click="clearCart">Очистить корзину</span>
          </div>

          <CartProducts :products="store.state.items" />
        </div>
        <div class="col col_right">
          <CartOrder
            :sum-count="store.getters.cartTotalPrice"
            :is-setting="isSetting"
            @order="order"
          />
        </div>
      </div>

      <CartSetting @change="isSetting = !isSetting" />
    </div>

    <Preloader v-else-if="loading" />

    <div v-else class="cart-content cart_empty">
      <h2 class="title">В корзине ничего нет</h2>
      <p class="description">Добавьте товары, чтобы порадовать себя</p>
    </div>

    <div v-if="!loading" class="carousel-block">
      <h2 class="title">Просмотренные товары</h2>

      <CartSliderCarousel />
    </div>
  </section>
</template>

<style lang="scss">
.cart-content {
  &__cols {
    display: flex;
    gap: 55px;
  }

  &__title {
    font-size: 2.75rem;
    line-height: 3.313rem;
  }

  &__head {
    display: flex;
    align-items: flex-end;
    margin: 0 0 50px;
  }
}

.col {
  width: 100%;

  &_left {
    width: 100%;
    max-width: 800px;
  }
  &_right {
    max-width: 425px;
  }
}

.goods-counter {
  margin: 0 auto 0 22px;
  @include font-18-regular;
  color: $dark-gray;
}

.cart-clear {
  @include font-14-regular;
  color: $dark-gray;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background: $dark-gray;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.cart_empty {
  padding: 100px;
  text-align: center;

  .title {
    font-size: 52px;
    line-height: 150%;
  }

  .description {
    font-size: 20px;
    line-height: 28px;
  }
}

.carousel-block {
  margin: 95px 0 116px;

  .title {
    margin: 0 0 -36px;
    font-size: 30px;
    line-height: 120%;
  }
}
</style>
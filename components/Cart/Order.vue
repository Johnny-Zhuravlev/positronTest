<script setup>
import { computed } from 'vue';
import { useProductsStore } from '~/store/products';

const props = defineProps({
  sumCount: Number || String,
  isSetting: Boolean,
})
const emits = defineEmits(['order'])

const store = useProductsStore;
const totalItems = computed(() => {
  let total = 0;
  store.state.items.forEach((item) =>
    total += item.quantity
  )

  return total;
})
</script>

<template>
  <div class="order-wrapper">
    <div class="order">
      <h5 class="order__title">Итого</h5>
      <div class="order__row">
        <span class="label">Сумма заказа</span>
        <span class="order__sum">{{ store.getters.cartTotalPrice }}</span>
      </div>
      <div class="order__row">
        <span class="label">Количество</span>
        <span class="order__count">{{ totalItems }} шт</span>
      </div>
      <div class="order__row">
        <span class="label">Установка</span>
        <span v-if="isSetting" class="order__setting">Да</span>
        <span v-else class="order__setting">Нет</span>
      </div>
      <div class="order__row order__total">
        <span class="label">Стоимость товаров</span>
        <span class="order__cost">{{ sumCount }}</span>
      </div>
      <div class="order__buttons">
        <UIBtn class="btn" text="Оформить заказ" @click="emits('order')" />
        <UIBtn class="btn btn_transparent" text="Купить в 1 клик" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-wrapper {
  margin: 88px 0 0;
  padding: 35px 30px;
  overflow: hidden;
  background: $light-grayish-blue;
  border-radius: 5px;
}

.order {
  &__title {
    margin: 0 0 31px;
    font-size: 24px;
    line-height: 120.5%;
    font-weight: 500;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      margin: 0 0 18px;
    }
  }

  &__sum,
  &__count,
  &__setting,
  &__cost {
    font-family: 'Roboto', sans-serif;
  }

  &__cost {
    font-size: 24px;
    line-height: 130%;
  }

  &__total {
    padding: 16px 0 0;
    border-top: 1px solid $gray;
    .label {
      @include font-18-regular;
      font-weight: 600;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
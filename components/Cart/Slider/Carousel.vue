<script>
import { onMounted } from 'vue';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import { useProductsStore } from '~/store/products';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const store = useProductsStore;
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide was moved');
      };

      onMounted(() => {store.dispatch('getSlides')})

      return {
        store,
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, A11y, EffectFade],
      };
    },
  };
</script>

<template>
  <swiper
    :slides-per-view="4"
    :space-between="20"
    navigation
    :pagination="{ type: 'fraction', clickable: true }"
    :modules="modules"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      v-for="slide of store.state.slides" :key="slide.id" :virtualIndex="slide.id"
    >
      <div class="card">
        <div class="card__inner">
          <div class="card__top">
            <img class="card__img" :src="slide.img" :alt="slide.code">
            <div class="card__title">{{ slide.name }}</div>
            <div class="card__desc">{{ slide.desc }}</div>
          </div>
          <div class="card__bottom">
            <div class="card__prices">
              <div class="card__price price_roubles">
                {{ slide.min_price }} ₽ - {{ slide.max_price }} ₽
              </div>
              <div class="card__price price_euros">
                {{ slide.min_price_euro }} € - {{ slide.max_price_euro }} €
              </div>
            </div>

            <UIBtn class="btn card__btn" text="Подробнее" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.card {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 563px;
    padding: 25px;
    overflow: hidden;
    background: $light-grayish-blue;
    border-radius: 5px;
    cursor: grab;
  }

  &__img {
    width: 100%;
    height: auto;
  }

  &__title {
    margin: 5px 0 10px;
    @include font-22-regular;
    font-weight: 700;
  }

  &__desc {
    @include font-14-regular;
  }

  &__prices {
    margin: 0 0 20px;
  }

  &__btn {
    width: 100%;
    font-family: "Lato", sans-serif;
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
  }
}

.price_roubles {
  margin: 0 0 3px;
  @include font-22-regular;
  font-weight: 700;
}
.price_euros {
  color: $dark-gray;
}

.swiper:deep(.swiper-wrapper) {
  padding: 97px 0 0;
}

// navigation
.swiper:deep(.swiper-button-prev),
.swiper:deep(.swiper-button-next) {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  z-index: 3;
}

.swiper:deep(.swiper-button-next) {
  right: 0;
}
.swiper:deep(.swiper-button-prev) {
  // opacity: 1;
  left: unset;
  right: 129px;
}

.swiper:deep(.swiper-button-prev::after),
.swiper:deep(.swiper-button-next::after) {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: url('/img/icons/chevron-left.svg') 0 0/cover no-repeat;
}
.swiper:deep(.swiper-button-next::after) {
  background: url('/img/icons/chevron-right.svg') 0 0/cover no-repeat;
}

// pagination
.swiper:deep(.swiper-pagination) {
  width: 44px;
  height: fit-content;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3px;
  color: $dark-gray;
  line-height: 30px;
  position: absolute;
  top: 8px;
  left: unset;
  right: 68px;
  z-index: 3;
}
.swiper:deep(.swiper-pagination-current) {
  font-size: 24px;
  line-height: 150%;
  font-weight: 500;
  color: $black;
}
</style>
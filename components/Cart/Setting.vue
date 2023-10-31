<script setup>
const emits = defineEmits(['change']);
</script>

<template>
  <div class="setting-wrapper">
    <div class="setting">
      <input
        class="checkbox setting__checkbox"
        type="checkbox"
        @change="emits('change')"
      >

      <div class="setting__icon">
        <img src="img/icons/setting.svg" alt="setting">
      </div>

      <div class="setting__info">
        <span class="setting__title">Установка</span>
        <span class="setting__desc">
          Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.setting-wrapper {
  max-width: 800px;
  margin: 44px 0 95px;
  padding: 25px;
  background: $light-grayish-blue;
  border-radius: 5px;
}

.setting {
  display: flex;
  align-items: center;
  gap: 20px;

  &__checkbox {
    width: 20px;
    height: 20px;
    margin: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  &__icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    border-radius: 4px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__title {
    font-weight: 600;
  }

  &__desc {
    @include font-14-regular;
    color: $dark-gray;
  }
}
</style>
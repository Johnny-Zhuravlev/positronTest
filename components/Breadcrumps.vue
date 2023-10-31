<template>
  <div class="breadcrumps">
    <div class="breadcrumps__inner">
      <a href="/" class="breacrumps__link">Главная</a>
      <span class="marker breadcrumps__marker"></span>
      <span class="breacrumps__link" :class="{current_link: true}">Корзина</span>
    </div>
  </div>
</template>

<style lang="scss">
.breadcrumps {
  &__inner {
    display: flex;
    align-items: center;
    padding: 31px 0 60px;
  }

  &__link {
    @include font-14-regular;
  }
}

.current_link {
  color: $dark-gray;
}

.marker {
  width: 0;
  height: 0;
  margin: 0 10px;
  border-top: 4px solid transparent;
  border-left: 5px solid $dark-blue;
  border-bottom: 4px solid transparent;
}
</style>
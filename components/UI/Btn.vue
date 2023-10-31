<script setup>
const props = defineProps({
  text: String,
})
</script>

<template>
  <button :class="$attrs.class">
    {{ text }}
  </button>
</template>

<style lang="scss">
.btn {
  padding: 14px;
  @include font-18-regular;
  color: $white;
  background: $blue;
  border-radius: 4px;
}

.btn_transparent {
  color: $blue;
  background: transparent;
  border: 1px solid $blue;
}
</style>
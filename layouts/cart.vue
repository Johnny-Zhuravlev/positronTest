<template>
  <div class="container">
    <HeaderMain />
    <Breadcrumps />
    <slot />
  </div>
</template>

<style>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
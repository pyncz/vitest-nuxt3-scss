<template>
  <div>
    yo
  </div>
</template>

<style scoped lang="scss">
// some scss
@mixin yo {
  background: red;
}
div {
  @include yo;
}
</style>

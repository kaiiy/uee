<template>
  <main
    :style="{
      height: size * 12 + 'px',
      width: size * 12 + 'px',
      borderRadius: size / 100 + 'px',
    }"
    class="mt-4 mb-5"
  >
    <slot> </slot>
  </main>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  position: relative;
  border: 1px solid black;
}
</style>
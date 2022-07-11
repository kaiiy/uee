<template>
  <v-btn
    outlined
    :style="{ transform: `translate(${top * 100}%, ${left * 100}%)` }"
    :height="unitLength"
    :width="unitLength"
    class="btn"
    @click="click"
  >
    <v-icon :size="unitLength * 0.7">mdi-run</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    unitLength: {
      type: Number,
      required: true,
      default: 0,
    },
    top: {
      type: Number,
      required: true,
      default: 0,
    },
    left: {
      type: Number,
      required: true,
      default: 0,
    },
    click: {
      type: Function,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  left: 0%;
  top: 0%;
  border-radius: 100%;
}
</style>
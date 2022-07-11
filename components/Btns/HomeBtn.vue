<template>
  <v-btn
    to="/"
    outlined
    :style="{ transform: `translate(${top * 100}%, ${left * 100}%)` }"
    :height="unitLength"
    :width="unitLength"
    class="btn ma-0"
  >
    <v-icon :size="unitLength * 0.7">mdi-rotate-3d-variant</v-icon>
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
  },
}
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  left: 0%;
  top: 0%;
  border-radius: 100%;
  // transform: translate(0%, 0%);
}
</style>
<template>
  <!-- <v-btn
    to="/"
    outlined
    :style="{ transform: `translate(${top * 100}%, ${left * 100}%)` }"
    :height="unitLength"
    :width="unitLength"
    class="btn ma-0"
  >
    <v-icon :size="unitLength * 0.7">mdi-rotate-3d-variant</v-icon>
  </v-btn> -->
  <div
    :style="{
      height: unitLength + 'px',
      width: unitLength + 'px',
      transform: `translate(${top * 100}%, ${left * 100}%)`,
    }"
    class="object"
  >
    <div
      :style="{
        height: unitLength + 'px',
        width: unitLength / 2 + 'px',
        fontSize: unitLength * 0.7 + 'px',
        lineHeight: unitLength + 'px',
      }"
      class="num"
    ></div>
    <div
      :style="{
        height: unitLength + 'px',
        width: unitLength / 2 + 'px',
        fontSize: unitLength * 0.7 + 'px',
        lineHeight: unitLength + 'px',
      }"
      class="num"
    >
      0
    </div>
  </div>
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
  data: () => ({
    showMemoDialog: false,
  }),
}
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 100%;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}

.object {
  position: absolute;
  display: flex;
  left: -1px;
  top: -1px;

  box-sizing: border-box;

  border-width: 1px;
  border-color: black;
  border-style: none solid solid;
  border-radius: 10%;

  .num {
    // border: 1px solid black;
    text-align: center;
  }
}
</style>
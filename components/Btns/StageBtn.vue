<template>
  <!-- <v-btn
    outlined
    color="black"
    :width="size"
    :height="size"
    :to="link"
    :class="['stage-btn mx-4', { hidden: !show }]"
    nuxt
    ><span :style="{ fontSize: size / 4 + 'px' }" class="font">{{
      stageNum
    }}</span></v-btn
  > -->
  <div
    :style="{
      height: size + 'px',
      width: size + 'px',
      borderRadius: size / 100 + 'px',
    }"
    :class="['stage-btn mx-4', { hidden: !show }]"
  >
    <v-btn
      fab
      outlined
      :height="(size / 12) * 10"
      :width="(size / 12) * 10"
      :to="link"
      class="btnlink"
    >
      <v-icon :size="size * 0.7">mdi-rotate-3d-variant</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: Number,
      required: true,
      default: 0,
    },
    stageNum: {
      type: Number,
      required: true,
      default: 0,
    },
    link: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
// フォント
.font {
  font-family: 'Noto Sans JP', sans-serif !important;
}

// ステージボタン
.stage-btn {
  position: relative;
  border: 1px solid black;
}

.btnlink {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.stageNum {
  font-weight: 100;
}

.hidden {
  visibility: hidden;
}
</style>
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
    <v-btn
      outlined
      :height="unitLength * 0.8"
      :width="unitLength * 0.8"
      :min-height="unitLength * 0.8"
      :min-width="unitLength * 0.8"
      class="btn px-0"
      @click="showMemoDialog = true"
    >
      <v-icon :size="unitLength * 0.8 * 0.7">mdi-table</v-icon>
    </v-btn>

    <v-dialog v-model="showMemoDialog" width="500">
      <v-card>
        <v-card-title>ボタン数</v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text nuxt @click="showMemoDialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  left: -1px;
  top: -1px;

  box-sizing: border-box;

  border-width: 1px;
  border-color: black;
  border-style: solid solid dashed;
  border-radius: 10%;
}
</style>
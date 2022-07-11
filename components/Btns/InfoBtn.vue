<template>
  <div>
    <v-btn
      outlined
      :height="unitLength"
      :width="unitLength"
      :style="{ transform: `translate(${top * 100}%, ${left * 100}%)` }"
      class="btn"
      @click="showMemoDialog = true"
    >
      <v-icon :size="unitLength * 0.7">mdi-text</v-icon>
    </v-btn>

    <v-dialog v-model="showMemoDialog" width="500">
      <v-card>
        <v-card-title>情報</v-card-title>
        <v-card-text>
          <div v-for="(info, index) in infoList" :key="info.id">
            <div v-show="showInfoList[index]">
              <span>{{ info.text[0] }}</span>
              <v-icon
                v-if="!(info.icon.length === 0)"
                v-text="info.icon"
              ></v-icon>
              <span>{{ info.text[1] }}</span>
            </div>
          </div>
        </v-card-text>

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
import info from '~/assets/info.json'

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
    infoLen: info.textWrapper.length,
    infoList: info.textWrapper,
  }),
  computed: {
    sp() {
      return this.$store.getters['progress/getCurrentStage']
    },
    showInfoList() {
      const textNumList = info[`info${this.sp}`].textNum
      const infoList = textNumList
        .map((textNumStr) => {
          const splitedNum =
            textNumStr.includes('-') &&
            textNumStr.split('-').map((num) => Number(num))
          if (splitedNum)
            return Array(splitedNum[1] - splitedNum[0] + 1)
              .fill(0)
              .map((_, index) => index + splitedNum[0] - 1)
          return Number(textNumStr) - 1
        })
        .flat()
      const showList = Array(this.infoLen)
        .fill(0)
        .map((_, index) => infoList.includes(index))
      return showList
    },
  },
}

// todo
// infoList いい感じにする
// mountedとかで呼んでv-forとv-show=falseあたりでいい感じに
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100%;
}
</style>
<template>
  <v-row>
    <v-spacer></v-spacer>

    <v-col cols="12">
      <v-divider class="mt-4"></v-divider>

      <v-row justify="center" align="center">
        <v-spacer></v-spacer>
        <v-col cols="12">
          <div class="title text-h1 black--text mb-4 mt-12">うええ</div>
          <div class="author text-h6 black--text mb-12">制作: かい</div>

          <v-card outlined class="mb-12">
            <v-card-title class="justify-center">注意事項</v-card-title>
            <v-card-text class="text-center"
              >リロードをするとデータがなくなり最初からとなります。</v-card-text
            >
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-divider></v-divider>

      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="8">
          <div class="stages mt-12">
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="1"
              link="pages/page1"
              :show="showStageList[0]"
            />
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="2"
              link="pages/page2"
              :show="showStageList[1]"
            />
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="3"
              link="pages/page3"
              :show="showStageList[2]"
            />
          </div>
          <div class="stages mt-8">
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="4"
              link="pages/page1"
              :show="showStageList[3]"
            />
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="5"
              link="pages/page1"
              :show="showStageList[4]"
            />
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="6"
              link="pages/page1"
              :show="showStageList[5]"
            />
          </div>
          <v-divider class="my-4"></v-divider>
          <div>テスト用</div>
          <div class="stages mt-8">
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="4"
              link="pages/test"
              :show="true"
            />
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="5"
              link="pages/page1"
              :show="false"
            />
            <BtnsStageBtn
              :size="stageBtn.size"
              :stage-num="6"
              link="pages/page1"
              :show="false"
            />
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>



<script>
const showStageTiming = [0, 1, 2, 3, 4, 5]

export default {
  data() {
    return {
      stageBtn: {
        size: 0,
      },
    }
  },
  computed: {
    showStageList() {
      const currentStage = this.$store.getters['progress/getCurrentStage']
      return Array(6)
        .fill()
        .map((_, i) => showStageTiming[i] <= currentStage)
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const windowWidth = window.innerWidth
      const canvasWidth = (windowWidth / 12) * 8

      //   ステージボタンのサイズ
      this.stageBtn.size = canvasWidth / 10
    },
  },
}
</script>

<style lang="scss" scoped>
// デバッグ用
.add-border {
  border: 1px solid black;
}

// フォント
.font {
  font-family: 'Noto Sans JP', sans-serif !important;
}

// タイトル表示
.title {
  font-weight: 100;
  font-family: 'Noto Sans JP', sans-serif !important;
  text-align: center;
}
.author {
  font-weight: 300;
  font-family: 'Noto Sans JP', sans-serif !important;
  text-align: center;
}

// ステージボタン
.stages {
  display: flex;
  justify-content: center;
}
</style>

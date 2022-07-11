<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col>
      <TheMainCanvas :size="unitLength">
        <div class="grid12">
          <div
            v-for="i in 144"
            :key="i"
            :style="{
              width: unitLength * 0.997 + 'px',
              height: unitLength * 0.997 + 'px',
              border: `${unitLength / 30}px solid lightgrey`,
            }"
            class="grid-cell"
          ></div>
        </div>

        <BtnsClearBtn
          :unit-length="unitLength"
          :left="1"
          :top="2"
          :click="clear"
        />
        <BtnsHomeBtn :unit-length="unitLength" :left="6" :top="7" />
        <BtnsInfoBtn :unit-length="unitLength" :left="7" :top="9" />
      </TheMainCanvas>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    unitLength: 0,
  }),
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
      const mainWidth = (windowWidth / 12) * 6

      this.unitLength = mainWidth / 12
    },
    clear() {
      this.$store.commit('progress/setNextStage', 'beforeStage3Clear')
    },
  },
}
</script>

<style lang="scss" scoped>
.grid12 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-wrap: wrap;

  .grid-cell {
    box-sizing: border-box;
  }
}
</style>
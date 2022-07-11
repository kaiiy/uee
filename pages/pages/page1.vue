<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col>
      <TheMainCanvas :size="unitLength">
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
      this.$store.commit('progress/setNextStage', 'beforeStage2Clear')
    },
  },
}
</script>
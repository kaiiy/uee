const spList = {
  beforeStage1Clear: 0,
  beforeStage2Clear: 1,
  beforeStage3Clear: 2
}

export const state = () => ({
  currentStage: 0
})

export const getters = {
  getCurrentStage(state) {
    return state.currentStage
  }
}

export const mutations = {
  setNextStage(state, updateStage) {
    state.currentStage = spList[updateStage]
  }
}

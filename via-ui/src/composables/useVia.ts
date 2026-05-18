import { ref } from 'vue'
import type { ViaState } from '@/composables/viaTypes'
import { viaData } from '@/services/viaData'

export function useVia() {
  // state is a ref, so use state.value in script, Vue auto-unwraps in templates
  const state = ref<ViaState>(viaData.getInitialState())

  const selectTrain = (trainId: number) => {
    state.value = viaData.handleTrainSelection(trainId, state.value)
  }

  const selectStop = (stopIndex: number) => {
    state.value = viaData.handleStopSelection(stopIndex, state.value)
  }

  return {
    state,
    selectTrain,
    selectStop,
  }
}

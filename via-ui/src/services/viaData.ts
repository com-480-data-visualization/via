// Example interface for the viaData logic module
// This is just a contract for whoever implements the logic

import type { ViaState } from '@/composables/viaTypes'

export interface ViaDataModule {
  getInitialState(): ViaState
  handleTrainSelection(trainId: number, prev: ViaState): ViaState
  handleStopSelection(stopIdx: number, prev: ViaState): ViaState
  // Add more methods as needed for your app's actions
}

// Example stub (to be implemented by logic owner)
export const viaData: ViaDataModule = {
    getInitialState() {
        //Placeholder initial state, to be replaced with real logic
        let train1 = {
        id: 1,
        service: 'IC 5',
        destination: 'Zürich HB',
        departure: '08:12',
        stop: { name: 'Neuchâtel', time: '09:02' },
        departureCity: { name: 'Lausanne', lat: 46.5197, lon: 6.6323 },
        }
        let train2 = {
        id: 2,
        service: 'IR 6',
        destination: 'Bern',
        departure: '08:45',
        stop: { name: 'Fribourg', time: '09:30' },
        departureCity: { name: 'Neuchâtel', lat: 46.9896, lon: 6.9293 },
        }

        let train3 = {
        id: 1,
        service: 'RE 7',
        destination: 'Geneva',
        departure: '09:10',
        stop: null,
        departureCity: { name: 'Fribourg', lat: 46.8065, lon: 7.1619 },
        }

        let train4 = {
            id: 2,
            service: 'S-Bahn 8',
            destination: 'Lausanne',
            departure: '09:30',
            stop: null,
            departureCity: { name: 'Fribourg', lat: 46.8065, lon: 7.1619 },
        }

        return {
        trainsTaken: [train1, train2],
        nextStarts: [train3, train4],
        possibleStops: [],
        hour: 9,
        minute: 2,
        }
    },
    handleTrainSelection(trainId, prev) {
        // Compute new state (for now it's placeholder)
        let stop1 = { name: 'Yverdon-les-Bains', time: '09:45' }
        let stop2 = { name: 'Morges', time: '10:00' }
        return { trainsTaken: prev.trainsTaken, nextStarts: prev.nextStarts, possibleStops: [stop1, stop2], hour: prev.hour, minute: prev.minute }
    },
    handleStopSelection(stopIdx, prev) {
        // Compute new state (for now it's placeholder)
        return { trainsTaken: prev.trainsTaken, nextStarts: prev.nextStarts, possibleStops: prev.possibleStops, hour: prev.hour, minute: prev.minute }
    },
}

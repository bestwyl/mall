import {ADD_COUNT , ADD_CAR} from './mutationsTypes'

export default {
  [ADD_COUNT](state , payload) {
    payload.count += 1
  },
  [ADD_CAR](state , payload) {
    payload.count = 1
    payload.checked = true
    state.carList.push(payload)
  }
}
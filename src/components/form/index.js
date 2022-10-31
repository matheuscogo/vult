// import {
//   makeAllObservable,
//   observable,
//   action,
//   computed,
//   override,
//   makeObservable,
// } from 'mobx'
// import { mapValues, cloneDeep, isEmpty, isObject, isArray, get } from 'lodash'

// class FormStore {
//   constructor({ initialData }) {
//     this.increaseTimer = this.increaseTimer.bind(this)
//     this.clicado = this.clicado.bind(this)
//     this.init = this.init.bind(this)

//     this.init(initialData)

//     makeObservable(this, {
//       secondsPassed: observable,
//       increaseTimer: action,
//       clicado: action,
//       init: action,
//       setInitialStates: action,
//     })
//   }

//   secondsPassed = 0

//   async init(initialData) {
//     await this.setInitialStates(initialData)
//   }

//   setInitialStates = (initialData = {}) => {
//     this.initialData = mapValues(initialData, (state) => state)

//     const states = mapValues(initialData, (state, stateName) => {
//       return { state, stateName }
//     })

//     this.initialFormStates = cloneDeep(states)
//     this.originalStates = cloneDeep(states)
//   }

//   increaseTimer() {
//     this.secondsPassed += 1
//   }

//   clicado() {
//     alert('foi clicado')
//   }

//   changeStates() {}

//   changeState() {}

//   getDatagrid() {}

//   submit(create, update, remove) {}
// }

// export default FormStore

// import {
//   makeObservable,
//   observable,
//   action,
//   computed,
//   override,
//   toJS,
// } from 'mobx'
// import { mapValues, cloneDeep, head } from 'lodash'
// import { isFunction, map, isEmpty } from 'lodash'

// class DatagridStore {
//   constructor({ endpoint, initialData }) {
//     this.init = this.init.bind(this)
//     this.fetchData = this.fetchData.bind(this)
//     this.setColumns = this.setColumns.bind(this)

//     this.endpoint = endpoint

//     Promise.all([this.init(initialData)])

//     makeObservable(this, {
//       init: action,
//       setInitialStates: action,
//       services: observable,
//       loading: observable,
//       datagrid: observable,
//     })
//   }

//   services = {}
//   initialData = {}
//   datagrid = {
//     rows: [],
//     columns: [],
//     loading: false,
//   }
//   endpoint = () => {}

//   async init(initialData) {
//     Promise.all([this.setDatagrid(initialData)])
//   }

//   setInitialStates = (initialData = {}) => {
//     initialData = mapValues(initialData, (state) => state)

//     const states = mapValues(initialData, (state) => {
//       return state
//     })
//     this.formStates = cloneDeep(states)
//   }

//   setColumns = async (initialData) => {
//     if (!isEmpty(initialData)) {
//       this.datagrid.columns = map(initialData, (value, key) => {
//         return {
//           field: value.field,
//           headerName: value.headerName,
//           editable: false,
//         }
//       })
//     }
//   }

//   setDatagrid = async (initialData) => {
//     if (isEmpty(this.datagrid.columns)) {
//       Promise.all([this.setColumns(initialData)])

//       if (!isEmpty(this.datagrid.columns)) {
//         // console.warn('existem colunas')
//         Promise.all([this.fetchData()])
//       }
//     }
//   }

//   fetchData = async () => {
//     if (isFunction(this.endpoint)) {
//       if (isEmpty(this.datagrid.rows)) {
//         console.warn('linhas vazias')
//         this.loading = true
//         console.warn('this.loading', this.loading)
//         Promise.all([this.endpoint()])
//           .then((response) => {
//             this.datagrid.rows = head(response)
//             console.warn('response', response)
//             console.warn('this.datagrid.rows', this.datagrid.rows)
//             this.loading = false
//           })
//           .catch((e) => {
//             throw e
//           })
//           .finally(() => {
//             this.loading = false
//           })
//         console.warn('this.loading', this.loading)
//       }
//     }
//   }

//   treatRowAction = async () => {}

//   refreshData = async () => {
//     if (isFunction(this.endpoint)) {
//       const response = await this.endpoint()
//       this.datagrid.rows = response
//     }
//   }
// }

// export default DatagridStore

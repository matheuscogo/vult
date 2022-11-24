import { makeObservable, observable, action } from 'mobx'
import { mapValues, cloneDeep } from 'lodash'
import { isFunction, map, isEmpty, isNumber } from 'lodash'

class FormStore {
  constructor({ endpoint, initialData }) {
    this.init = this.init.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.setForm = this.setForm.bind(this)

    this.endpoint = endpoint

    Promise.all([this.init(initialData)])

    makeObservable(this, {
      init: action,
      setInitialStates: action,
      services: observable,
      loading: observable,
      id: observable,
    })
  }

  services = {}
  initialData = {}
  id = null
  endpoint = () => {}

  async init(initialData) {
    Promise.all([this.setForm(initialData)])
  }

  setInitialStates = (initialData = {}) => {
    initialData = mapValues(initialData, (state) => state)

    const states = mapValues(initialData, (state) => {
      return state
    })
    this.formStates = cloneDeep(states)
  }

  setColumns = async (initialData) => {
    if (!isEmpty(initialData)) {
      this.datagrid.columns = map(initialData, (value, key) => {
        return {
          field: value.field,
          headerName: value.headerName,
          editable: isEmpty(value.editable) ? false : true,
          width: isNumber(value.width) ? value.width : 150,
          renderCell: isFunction(value.renderCell) ? value.renderCell : null,
          hide: value.hide,
          value: value.value,
        }
      })
    }
  }

  setDatagrid = async (initialData) => {
    if (isEmpty(this.datagrid.columns)) {
      Promise.all([this.setColumns(initialData)])

      if (!isEmpty(this.datagrid.columns)) {
        this.loading = false
        // Promise.all([this.fetchData()])
      }
    }
  }

  fetchData = async () => {
    if (isFunction(this.endpoint)) {
      if (isEmpty(this.datagrid.rows)) {
        this.loading = true
        this.endpoint()
          .then((response) => {
            this.datagrid.rows = response
            this.loading = false
          })
          .catch((e) => {
            throw e
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  }

  treatRowAction = async () => {}

  refreshData = async () => {
    if (isFunction(this.endpoint)) {
      const response = await this.endpoint()
      this.datagrid.rows = response
    }
  }
}

export default FormStore

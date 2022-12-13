import { makeObservable, observable, action } from 'mobx'
import { mapValues, cloneDeep } from 'lodash'
import { isFunction, map, isEmpty, isNumber, isBoolean } from 'lodash'

class DatagridStore {
  constructor({ endpoint, initialData }) {
    this.init = this.init.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.setColumns = this.setColumns.bind(this)

    this.endpoint = endpoint

    Promise.all([this.init(initialData)])

    makeObservable(this, {
      init: action,
      setInitialStates: action,
      services: observable,
      loading: observable,
      datagrid: observable,
    })
  }

  services = {}
  initialData = {}
  datagrid = {
    rows: [],
    columns: [],
    loading: false,
  }
  endpoint = () => {}

  async init(initialData) {
    Promise.all([this.setDatagrid(initialData)])
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
          editable: isBoolean(value.editable) ? value.editable : value.editable,
          width: isNumber(value.width) ? value.width : 150,
          renderCell: isFunction(value.renderCell) ? value.renderCell : null,
          hide: value.hide,
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

export default DatagridStore

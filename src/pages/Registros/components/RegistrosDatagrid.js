import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getRegistros } from '../../../services/Registros'

export default function RegistrosDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const refresh = () => {
    setLoading(true)
    getRegistros()
      .then((result) => {
        setRows(result)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
        setRows([])
        setLoading(false)
      })
  }

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  if (isEmpty(rows)) {
    getRegistros()
      .then((result) => {
        setRows(result)
        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
        setRows([])
        setLoading(false)
      })
  }

  return (
    <DefaultDatagrid
      title={'Registro'}
      columns={columns}
      showAdd={false}
      refresh={refresh}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 1050 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

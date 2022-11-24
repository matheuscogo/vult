import React, { useState } from 'react'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getAvisos } from '../../../services/Avisos'
import { isEmpty } from 'lodash'

export default function AvisosDatagrid(props) {
  const refresh = () => {
    setLoading(true)
    getAvisos()
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

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const [rowActions] = useState({})

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  if (isEmpty(rows)) {
    getAvisos()
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
      title="Aviso"
      refresh={refresh}
      columns={columns}
      showAdd={false}
      rowActions={rowActions}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 812 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

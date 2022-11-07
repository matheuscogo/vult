import React, { useState } from 'react'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getMatrizes } from '../../../services/Matrizes'
import { isEmpty } from 'lodash'

export default function MatrizesDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const [rowActions] = useState({})

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  if (isEmpty(rows)) {
    getMatrizes()
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
      columns={columns}
      rowActions={rowActions}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 830 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getPlanos } from '../../../services/Planos'

export default function PlanosDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const refresh = () => {
    setLoading(true)
    getPlanos()
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

  const add = () => {
    alert('adicionar')
  }

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  if (isEmpty(rows)) {
    getPlanos()
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
      title={'Plano'}
      columns={columns}
      add={add}
      refresh={refresh}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 920 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

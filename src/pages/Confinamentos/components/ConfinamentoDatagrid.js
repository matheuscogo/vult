import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getConfinamentos } from '../../../services/Confinamentos'

export default function ConfinamentosDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const refresh = () => {
    setLoading(true)
    getConfinamentos()
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
    getConfinamentos()
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
      title={'Confinamento'}
      columns={columns}
      add={add}
      refresh={refresh}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 890 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

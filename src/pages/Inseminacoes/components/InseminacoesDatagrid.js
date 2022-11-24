import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getInseminacoes } from '../../../services/Inseminacoes'
import { HOME } from '../../../navigation/CONSTANTS'
import { useNavigate } from 'react-router-dom'

export default function InseminacoesDatagrid(props) {
  const history = useNavigate

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  if (isEmpty(rows)) {
    getInseminacoes()
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

  const refresh = () => {
    setLoading(true)
    getInseminacoes()
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
    history('form' || HOME)
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

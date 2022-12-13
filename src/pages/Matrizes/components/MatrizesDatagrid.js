import React, { useState, useEffect } from 'react'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getMatrizes } from '../../../services/Matrizes'
import { useNavigate } from 'react-router-dom'
import { HOME } from '../../../navigation/CONSTANTS'
export default function MatrizesDatagrid(props) {
  const history = useNavigate()

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const [rowActions] = useState({})

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  useEffect(() => {
    query()
  }, [])

  const query = async () => {
    setLoading(true)
    const result = await getMatrizes()
    setRows(result)
    setLoading(false)
  }

  const refresh = () => {
    setLoading(true)
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

  const add = () => {
    history('form' || HOME)
  }

  return (
    <DefaultDatagrid
      title="Matriz"
      refresh={refresh}
      add={add}
      columns={columns}
      rowActions={rowActions}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 750 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

import React, { useState, useEffect } from 'react'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getPlanos } from '../../../services/Planos'
import { HOME } from '../../../navigation/CONSTANTS'
import { useNavigate } from 'react-router-dom'

export default function PlanosDatagrid(props) {
  const history = useNavigate()

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
    history('form' || HOME)
  }

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  useEffect(() => {
    query()
  }, [])

  const query = async () => {
    setLoading(true)
    const result = await getPlanos()
    setRows(result)
    setLoading(false)
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

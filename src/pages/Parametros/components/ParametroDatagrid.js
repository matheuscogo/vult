import React, { useEffect, useState } from 'react'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import { getParametros, updateParametros } from '../../../services/Parametros'

export default function ParametrosDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const { store } = props

  const {
    datagrid: { columns },
  } = store

  useEffect(() => {
    query()
  }, [])

  const query = async () => {
    setLoading(true)
    const result = await getParametros()
    let response = []
    response.push(result)
    setRows(response)
    setLoading(false)
  }

  const refresh = async () => {
    setLoading(true)
    const result = await getParametros()
    let response = []
    response.push(result)
    setRows(response)
    setLoading(false)
  }

  const onCellEditCommit = async (cellData) => {
    let result = await getParametros()

    if (cellData.field === 'quantidadePorcao') {
      result.quantidadePorcao = Number(cellData.value)
    }

    if (cellData.field === 'tempoPorcao') {
      result.tempoPorcao = Number(cellData.value)
    }

    if (cellData.field === 'intervaloPorcoes') {
      result.intervaloPorcoes = Number(cellData.value)
    }

    if (cellData.field === 'tempoProximaMatriz') {
      result.tempoProximaMatriz = Number(cellData.value)
    }

    if (cellData.field === 'tempoSemBrinco') {
      result.tempoSemBrinco = Number(cellData.value)
    }

    console.warn('result', result)

    await updateParametros(result)
    await refresh()
  }

  return (
    <DefaultDatagrid
      title={'Parametros'}
      showAdd={false}
      onCellEditCommit={onCellEditCommit}
      columns={columns}
      refresh={refresh}
      rows={rows}
      pageSize={20}
      loading={loading}
      style={{ minHeight: '100vh', minWidth: 1300 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

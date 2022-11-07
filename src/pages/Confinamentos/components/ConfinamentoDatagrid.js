import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { Grid } from '@mui/material'
import {
  getConfinamentos,
  deleteConfinamento,
} from '../../../services/Confinamento'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import { ADD_CONFINAMENTO } from '../../../navigation/CONSTANTS'

export default function ConfinamentoDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const { refresh } = props

  useEffect(() => {
    setLoading(true)
    getConfinamentos()
      .then((response) => {
        setRows(get(response, 'data.data'))
      })
      .catch()
      .finally(setLoading(false))
  }, [refresh])

  const width = '820'

  useEffect(() => {
    setLoading(true)
    getConfinamentos()
      .then((response) => {
        setRows(response.data.data)
      })
      .catch()
      .finally(setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [rows])

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'matrizDescription',
      headerName: 'Matriz',
      width: width / 5,
      editable: true,
    },
    {
      field: 'planoDescription',
      headerName: 'Plano',
      width: width / 5,
      editable: true,
    },
    {
      field: 'dataConfinamento',
      headerName: 'Data de entrada confinamento',
      width: width / 5,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Ações',
      sortable: false,
      width: width / 5 + 20,
      renderCell: (params) => {
        const infoClick = (e) => {
          e.stopPropagation()

          const api = params.api
          const thisRow = {}

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            )

          return alert(JSON.stringify(thisRow, null, 4))
        }

        const editClick = (e) => {
          e.stopPropagation()

          const api = params.api
          const thisRow = {}

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            )

          return alert(JSON.stringify(thisRow, null, 4))
        }

        const deleteClick = (e) => {
          e.stopPropagation()

          const api = params.api
          const thisRow = {}

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            )
          deleteConfinamento(get(thisRow, 'id'))
            .then((response) => {
              setLoading(true)
              getConfinamentos()
                .then((response) => {
                  setRows(get(response, 'data.data'))
                })
                .catch()
                .finally(setLoading(false))
            })
            .catch((e) => alert(e))
        }

        return (
          <Grid container>
            <Grid item xs={4}>
              <IconButton onClick={infoClick}>
                <InfoIcon color="primary" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={editClick}>
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={deleteClick}>
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
          </Grid>
        )
      },
    },
  ]

  return (
    <DefaultDatagrid
      rows={rows}
      columns={columns}
      loading={loading}
      add={{ title: 'Cadastrar Confinamento', to: ADD_CONFINAMENTO }}
      pageSize={20}
      style={{ minHeight: '100vh', minWidth: 100 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

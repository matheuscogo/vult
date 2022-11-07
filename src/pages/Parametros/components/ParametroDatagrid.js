import React, { useEffect, useState } from 'react'
import { isBoolean } from 'lodash'
import { Box, Grid, Fab } from '@mui/material'
import { getParametros } from '../../../services/Parametros'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import IconButton from '@material-ui/core/IconButton'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import { ADD_PARAMETRO } from '../../../navigation/CONSTANTS'
import { Typography } from '@mui/material'

export default function ParametroDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  const { refresh } = props

  // useEffect(() => {
  //   setLoading(true);
  //   getParametros()
  //     .then((response) => {
  //       setRows(get(response, 'data.data'));
  //     })
  //     .catch()
  //     .finally(setLoading(false));
  // }, [refresh]);

  const width = '820'

  // useEffect(() => {
  //   setLoading(true);
  //   getParametros()
  //     .then((response) => {
  //       setRows(get(response, 'data.data'));
  //     })
  //     .catch()
  //     .finally(setLoading(false));
  // }, []);

  useEffect(() => {
    setLoading(false)
  }, [rows])

  const columns = [
    { field: 'id', headerName: 'ID', width: width / 5 },
    {
      field: 'parameter',
      headerName: 'Parâmero',
      width: width / 5,
      editable: true,
    },
    {
      field: 'value',
      headerName: 'Valor',
      width: width / 5,
      editable: true,
      renderCell: (params) => {
        if (isBoolean(params.value)) {
          return params.value ? (
            <div>
              <CheckCircleIcon color="green" />
            </div>
          ) : (
            <div>
              <CancelIcon color="red" />
            </div>
          )
        }

        return <div>{params.value}</div>
      },
    },
    {
      field: 'action',
      headerName: 'Ações',
      sortable: false,
      width: width / 5 + 20,
      renderCell: (params) => {
        const enableClick = (e) => {
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

        return (
          <Grid container>
            <Grid item xs={4}>
              <IconButton onClick={enableClick}>
                <ChangeCircleIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        )
      },
    },
  ]

  useEffect(() => {
    setLoading(true)
    setRows([
      {
        id: 1,
        parameter: 'teste',
        value: '100',
      },
    ])
    setLoading(false)
  }, [])

  return (
    <DefaultDatagrid
      rows={rows}
      columns={columns}
      loading={loading}
      add={{ title: 'Cadastrar Parametros', to: ADD_PARAMETRO }}
      pageSize={20}
      style={{ minHeight: '100vh', minWidth: 100 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  )
}

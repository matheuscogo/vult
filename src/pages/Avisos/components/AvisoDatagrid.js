import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { Grid } from '@mui/material'
import { getAvisos, separarMatriz } from '../../../services/Aviso'
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid'
import IconButton from '@material-ui/core/IconButton'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import Confirm from '../../../containers/Confirm'

export default function AvisoDatagrid(props) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [disableSeparar, setDisableSeparar] = useState(false)
  const [open, setOpen] = useState(false)
  const [row, setRow] = useState({})

  const { refresh } = props

  useEffect(() => {
    setLoading(true)
    getAvisos()
      .then((response) => {
        setRows(response.data.data)
      })
      .catch()
      .finally(setLoading(false))
  }, [refresh])

  const width = '820'

  useEffect(() => {
    setLoading(true)
    getAvisos()
      .then((response) => {
        setRows(get(response, 'data.data'))
      })
      .catch()
      .finally(setLoading(false))
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: width / 5 },
    {
      field: 'matrizDescription',
      headerName: 'Matriz confinada',
      width: width / 5,
      editable: true,
    },
    {
      field: 'dataAviso',
      headerName: 'Data do Aviso',
      width: width / 5,
      editable: true,
    },
    {
      field: 'separar',
      hide: () => true,
      editable: true,
    },
    {
      field: 'separarDescription',
      headerName: 'Separar',
      width: width / 5,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Ações',
      sortable: false,
      width: width / 5 + 20,
      renderCell: (params) => {
        const api = params.api
        const thisRow = {}

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          )

        const infoClick = (e) => {
          e.stopPropagation()
          return alert(JSON.stringify(thisRow, null, 4))
        }

        const editClick = (e) => {
          e.stopPropagation()
          return alert(JSON.stringify(thisRow, null, 4))
        }

        const separeteClick = (e) => {
          setRow(thisRow)
          setOpen(true)
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
              <IconButton onClick={separeteClick}>
                <SyncAltIcon color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        )
      },
    },
  ]

  const sendData = (data) => {
    separarMatriz(data)
      .then((response) => {
        setLoading(true)
        getAvisos()
          .then((response) => {
            setRows(get(response, 'data.data'))
          })
          .catch()
          .finally(setOpen(false), setLoading(false))
      })
      .catch((e) => alert(e))
  }

  return (
    <>
      <Confirm
        open={open}
        title="Deseja realizar esta ação?"
        text="Ao confirmar essa ação, a matriz será separada"
        buttonConfirm={{
          children: 'Confirmar',
          tooltip: 'Separar matriz',
          onClick: () => {
            const data = {
              id: get(row, 'id'),
              separar: true,
            }
            sendData(data)
          },
        }}
        buttonCancel={{
          children: 'Fechar',
          onClick: () => setOpen(false),
        }}
      />
      <DefaultDatagrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={20}
        style={{ minHeight: '100vh', minWidth: 100 }}
        rowsPerPageOptions={[0]}
        className="DataGrid"
      />
    </>
  )
}

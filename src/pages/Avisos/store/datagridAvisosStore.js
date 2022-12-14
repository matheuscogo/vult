import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import {
  deleteAviso,
  getAvisos,
  separateMatriz,
} from '../../../services/Avisos'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Grid from '@mui/material/Grid'
import { IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SplitIcon from '@mui/icons-material/CallSplit'
import { isBoolean, get } from 'lodash'
import Moment from 'moment'

export default class DatagridAvisosStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getAvisos,
      initialData: {
        id: {
          field: 'id',
          headerName: 'ID',
          hide: true,
        },
        aviso: {
          field: 'aviso',
          headerName: 'Aviso',
          width: 300,
          renderCell: ({ value }) => <Typography>{value}</Typography>,
        },
        dataAviso: {
          field: 'dataAviso',
          headerName: 'Data do Aviso',
          width: 230,
          renderCell: ({ value }) => {
            Moment.locale('pt-br')
            const data = Moment(value).format('DD/MM/YYYY')
            const hora = Moment(value).format('HH:mm:ss')
            return (
              <Typography>
                {data} as {hora}{' '}
              </Typography>
            )
          },
        },
        separate: {
          field: 'separate',
          headerName: 'Separar',
          width: 70,
          renderCell: (params) => {
            if (isBoolean(params.value)) {
              return params.value ? (
                <div>
                  <CheckCircleIcon style={{ color: 'green' }} />
                </div>
              ) : (
                <div>
                  <CancelIcon style={{ color: 'red' }} />
                </div>
              )
            }
            return <div>{params.value}</div>
          },
        },
        ativo: {
          field: 'active',
          headerName: 'Ativo',
          width: 70,
          renderCell: (params) => {
            if (isBoolean(params.value)) {
              return params.value ? (
                <div>
                  <CheckCircleIcon style={{ color: 'green' }} />
                </div>
              ) : (
                <div>
                  <CancelIcon style={{ color: 'red' }} />
                </div>
              )
            }
            return <div>{params.value}</div>
          },
        },
        actions: {
          field: 'actions',
          headerName: 'Ações',
          renderCell: (params) => {
            const separateClick = (e) => {
              e.stopPropagation()
              const api = params.api
              const thisRow = {}
              api
                .getAllColumns()
                .filter((c) => c.field !== '__check__' && !!c)
                .forEach(
                  (c) =>
                    (thisRow[c.field] = params.getValue(params.id, c.field))
                )

              if (window.confirm('Deseja separar matriz?')) {
                separateMatriz({ id: get(params, 'row.id', 0), separate: true })
                this.refreshData()
              }
            }

            const deleteClick = (e) => {
              e.stopPropagation()
              const api = params.api
              const thisRow = {}
              api
                .getAllColumns()
                .filter((c) => c.field !== '__check__' && !!c)
                .forEach(
                  (c) =>
                    (thisRow[c.field] = params.getValue(params.id, c.field))
                )

              if (window.confirm('Deseja excluir esse aviso?')) {
                deleteAviso(get(params, 'row.id', 0))
                  .then(({ message }) => {
                    alert(message)
                  })
              }
            }

            const disabled = get(params, 'row.tipo', 0) !== 2
            const canSeparate = get(params, 'row.separate', false)

            return (
              <Grid container>
                <Grid item xs={6}>
                  <IconButton
                    onClick={separateClick}
                    disabled={disabled || canSeparate}
                  >
                    <SplitIcon
                      color={disabled || canSeparate ? 'grey' : 'primary'}
                    />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  <IconButton onClick={deleteClick}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Grid>
              </Grid>
            )
          },
        },
      },
    })
  }
}

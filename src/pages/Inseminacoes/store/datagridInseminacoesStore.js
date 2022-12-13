import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import {
  getInseminacoes,
  deleteInseminacao,
} from '../../../services/Inseminacoes'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Grid from '@mui/material/Grid'
import { IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { isBoolean, get } from 'lodash'
import Moment from 'moment'

export default class DatagridInseminacoesStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getInseminacoes,
      initialData: {
        id: {
          field: 'id',
          headerName: 'ID',
          hide: true,
        },
        matriz: {
          field: 'matriz',
          headerName: 'Matriz',
          width: 230,
          renderCell: ({ value }) => (
            <Typography>Matriz nº {value.description}</Typography>
          ),
        },
        plano: {
          field: 'plano',
          headerName: 'Plano',
          width: 250,
          renderCell: ({ value }) => (
            <Typography>{value.description}</Typography>
          ),
        },
        dataInseminacao: {
          field: 'dataInseminacao',
          headerName: 'Data da Inseminação',
          renderCell: ({ value }) => {
            Moment.locale('pt-br')
            return (
              <Typography> {Moment(value).format('DD/MM/YYYY')} </Typography>
            )
          },
          width: 200,
        },
        dataConfinamento: {
          field: 'confinamento',
          headerName: 'Data do Confinamento',
          renderCell: ({ value }) => {
            Moment.locale('pt-br')
            return (
              <Typography>
                {Moment(value.description).format('DD/MM/YYYY')}
              </Typography>
            )
          },
          width: 200,
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
            const deleteClick = async (e) => {
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

              if (window.confirm('Deletar inseminacão?')) {
                const { message } = await deleteInseminacao(
                  get(params, 'row.id', 0)
                )
                alert(message)
              }
            }
            return (
              <Grid container>
                <Grid item xs={4}>
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

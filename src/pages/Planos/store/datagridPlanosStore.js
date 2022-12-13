import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { getPlanos, deletePlano } from '../../../services/Planos'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import Grid from '@mui/material/Grid'
import { IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { isBoolean, get } from 'lodash'

export default class DatagridPlanosStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getPlanos,
      initialData: {
        id: {
          field: 'id',
          headerName: 'ID',
          hide: true,
        },
        nome: {
          field: 'nome',
          headerName: 'Nome',
          width: 160,
        },
        descricao: {
          field: 'descricao',
          headerName: 'Descrição',
          width: 250,
        },
        tipo: {
          field: 'tipo',
          headerName: 'Tipo',
          renderCell: ({ value }) => (
            <Typography>{value.description}</Typography>
          ),
        },
        quantidadeDias: {
          field: 'quantidadeDias',
          headerName: 'Quantidade Dias',
          renderCell: ({ value }) => <Typography>{value} dias</Typography>,
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

              if (
                window.confirm(
                  'Deletar plano ' + get(params, 'row.nome', '') + '?'
                )
              ) {
                const { message } = await deletePlano(get(params, 'row.id', 0))
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

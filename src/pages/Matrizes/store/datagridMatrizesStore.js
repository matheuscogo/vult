import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { deleteMatriz, getMatrizes } from '../../../services/Matrizes'
import { IconButton, Typography, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { get } from 'lodash'

export default class DatagridMatrizesStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getMatrizes,
      initialData: {
        id: {
          field: 'id',
          headerName: 'ID',
          hide: true,
        },
        rfid: {
          field: 'rfid',
          headerName: 'RFID',
          width: 250,
        },
        numero: {
          field: 'numero',
          headerName: 'Número da Matriz',
          width: 200,
          renderCell: ({ value }) => <Typography>Nº {value}</Typography>,
        },
        ciclos: {
          field: 'ciclos',
          headerName: 'Quantidade de ciclos',
          renderCell: ({ value }) => <Typography>{value} ciclos</Typography>,
        },
        actions: {
          field: 'actions',
          headerName: 'Ações',
          renderCell: (params) => {
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

              if (
                window.confirm(
                  'Deletar matriz nº ' + get(params, 'row.numero', '')
                )
              ) {
                deleteMatriz(get(params, 'row.id', 0))
                  .then(({message}) => {
                    alert(message)
                  })
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

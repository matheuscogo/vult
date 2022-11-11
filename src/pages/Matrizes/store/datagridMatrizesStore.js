import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { getMatrizes } from '../../../services/Matrizes'
import Grid from '@mui/material/Grid'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'

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
        },
        ciclos: {
          field: 'ciclos',
          headerName: 'Quantidade de ciclos',
        },
        actions: {
          field: 'actions',
          headerName: 'Ações',
          renderCell: (params) => {
            const infoClick = (e) => {
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
                  (c) =>
                    (thisRow[c.field] = params.getValue(params.id, c.field))
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
                  (c) =>
                    (thisRow[c.field] = params.getValue(params.id, c.field))
                )
              return alert(JSON.stringify(thisRow, null, 4))
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
      },
    })
  }
}

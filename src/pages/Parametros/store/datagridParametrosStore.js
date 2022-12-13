import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { getParametros } from '../../../services/Parametros'
import { Typography } from '@mui/material'

export default class DatagridParametrosStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getParametros,
      initialData: {
        id: {
          field: 'id',
          headerName: 'ID',
          hide: true,
        },
        tempoPorcao: {
          field: 'tempoPorcao',
          headerName: 'Tempo de cada porção',
          width: 230,
          editable: true,
          renderCell: ({ value }) => <Typography>{value} segundos</Typography>,
        },
        quantidadePorcao: {
          field: 'quantidadePorcao',
          headerName: 'Quantidade por cada porção',
          width: 250,
          editable: true,
          renderCell: ({ value }) => <Typography>{value} gramas</Typography>,
        },
        intervaloPorcoes: {
          field: 'intervaloPorcoes',
          headerName: 'Intervalo entre porções',
          renderCell: ({ value }) => <Typography>{value} segundos</Typography>,
          width: 200,
          editable: true,
        },
        tempoProximaMatriz: {
          field: 'tempoProximaMatriz',
          headerName: 'Tempo para entrada da proxima matriz',
          renderCell: ({ value }) => <Typography>{value} segundos</Typography>,
          editable: true,
          width: 300,
        },
        tempoSemBrinco: {
          field: 'tempoSemBrinco',
          headerName: 'Tempo até lançar o aviso de matriz sem brinco',
          renderCell: ({ value }) => <Typography>{value} segundos</Typography>,
          editable: true,
          width: 300,
        },
      },
    })
  }
}

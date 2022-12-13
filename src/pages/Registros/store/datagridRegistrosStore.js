import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { getRegistros } from '../../../services/Registros'
import { Typography } from '@mui/material'
import Moment from 'moment'

export default class FormRegistrosStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getRegistros,
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
        dataEntrada: {
          field: 'dataEntrada',
          headerName: 'Data de Entrada',
          width: 200,
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
        dataSaida: {
          field: 'dataSaida',
          headerName: 'Data de Saida',
          width: 200,
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
        tempo: {
          field: 'tempo',
          headerName: 'Tempo no alimentador',
          width: 200,
          renderCell: ({ value }) => {
            Moment.locale('pt-br')
            const minutos = Moment(value).format('m [minutos] ss [segundos]')
            return <Typography>{minutos}</Typography>
          },
        },
        quantidade: {
          field: 'quantidade',
          headerName: 'Quantidade',
          renderCell: ({ value }) => <Typography>{value} gramas</Typography>,
        },
      },
    })
  }
}

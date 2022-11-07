import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { getMatrizes } from '../../../services/Matrizes'

export default class DatagridMatrizesStore extends DatagridStore {
  constructor() {
    super({
      endpoint: getMatrizes,
      initialData: {
        id: {
          field: 'id',
          headerName: 'ID',
        },
        rfid: {
          field: 'rfid',
          headerName: 'RFID',
        },
        numero: {
          field: 'numero',
          headerName: 'Número da Matriz',
        },
        ciclos: {
          field: 'ciclos',
          headerName: 'Ciclos',
        },
      },
    })
  }
}

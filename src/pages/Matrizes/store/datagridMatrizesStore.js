import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
import { GET_ALL_MATRIZES  } from '../../../services/CONSTANTS'

export default class DatagridMatrizesStore extends DatagridStore {
  constructor(){
    super({
      endpoint: GET_ALL_MATRIZES,
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
      }
    })
  }
};
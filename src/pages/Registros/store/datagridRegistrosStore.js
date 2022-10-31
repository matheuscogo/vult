// import { get, set, makeObservable, observable, action, computed, override } from 'mobx'
// import DatagridStore from '../../../components/datagrid/src/store/DatagridStore'
// import { getRegistros } from '../../../services/Registros'

// export default class DatagridRegistrosStore extends DatagridStore {
//   constructor(){
//     super({
//         initialData: {
//           id: {
//             field: 'id',
//             headerName: 'ID',
//             value: '',
//           },
//           matriz: {
//             field: 'matrizId',
//             headerName: 'Matriz',
//             value: '',
//           },
//           dataEntrada: {
//             field: 'dataEntrada',
//             headerName: 'Data Entrada',
//             value: '',
//           },
//           dataSaida: {
//             field: 'dataSaida',
//             headerName: 'Data Saida',
//             value: '',
//           },
//           horaEntrada: {
//             field: 'horaEntrada',
//             headerName: 'Hora Entrada',
//             value: '',
//           },
//           horaSaida: {
//             field: 'horaSaida',
//             headerName: 'Hora Saida',
//             value: '',
//           },
//           tempo: {
//             field: 'tempo',
//             headerName: 'Tempo',
//             value: '',
//           },
//           quantidade: {
//             field: 'quantidade',
//             headerName: 'Quantidade',
//             value: '',
//           }
//         }
//       }
//     )

//     this.services = {
//       get: getRegistros,
//     }

//   }
// };

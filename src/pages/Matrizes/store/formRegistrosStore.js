import FormStore from '../../../components/form'

export default class FormRegistrosStore extends FormStore {
  constructor(){
    super({
        initialData: {
          id: {
            field: 'id', 
            headerName: 'ID',
            value: '',
          },
          matriz: {
            field: 'matrizId',
            headerName: 'Matriz',
            value: '',
          },
          dataEntrada: {
            field: 'dataEntrada',
            headerName: 'Data Entrada',
            value: '',
          },
          dataSaida: {
            field: 'dataSaida',
            headerName: 'Data Saida',
            value: '',
          },
          horaEntrada: {
            field: 'horaEntrada',
            headerName: 'Hora Entrada',
            value: '',
          },
          horaSaida: {
            field: 'horaSaida',
            headerName: 'Hora Saida',
            value: '',
          },
          tempo: {
            field: 'tempo',
            headerName: 'Tempo',
            value: '',
          },
          quantidade: {
            field: 'quantidade',
            headerName: 'Quantidade',
            value: '',
          }
        }
      }
    )
  }
};
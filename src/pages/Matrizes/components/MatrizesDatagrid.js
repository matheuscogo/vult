import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import {Box, Grid, Fab} from '@mui/material'
import { getMatrizes, deleteMatriz } from '../../../services/Matrizes';
import DefaultDatagrid from '../../../components/datagrid/src/containers/DatagridContainer/DefaultDatagrid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { ADD_MATRIZ } from '../../../navigation/CONSTANTS'

export default function MatrizesDatagrid(props) {
  // const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    refresh,
    store,
  } = props

  const {
    datagrid,
  } = store

  const {
    columns,
    rows,
  } = datagrid

  console.warn('store', store)

  //   useEffect(() => {
  //     setLoading(true);
  //     getMatrizes()
  //       .then((response) => {
  //         setRows(get(response, 'data.data'));
  //       })
  //       .catch()
  //       .finally(setLoading(false));
  //   }, [refresh]);

  const width = '820';

  // useEffect(() => {
  //   setLoading(true);
  //   getMatrizes()
  //     .then((response) => {
  //       setRows(get(response, 'data.data'));
  //     })
  //     .catch()
  //     .finally(setLoading(false));
  // }, []);

  // useEffect(() => {
  //   setLoading(false);
  // }, [rows]);

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: width / 5 },
  //   {
  //     field: 'rfid',
  //     headerName: 'RFID',
  //     width: width / 5,
  //     editable: true,
  //   },
  //   {
  //     field: 'numero',
  //     headerName: 'Número da Matriz',
  //     width: width / 5,
  //     editable: true,
  //   },
  //   {
  //     field: 'ciclos',
  //     headerName: 'Ciclos',
  //     type: 'number',
  //     width: width / 5 - 10,
  //     editable: true,
  //   },
  // ]
    // {
    //   field: 'action',
    //   headerName: 'Ações',
    //   sortable: false,
    //   width: width / 5 + 20,
    //   renderCell: (params) => {
    //     const infoClick = (e) => {
    //       e.stopPropagation();

    //       const api = params.api;
    //       const thisRow = {};

    //       api
    //         .getAllColumns()
    //         .filter((c) => c.field !== '__check__' && !!c)
    //         .forEach(
    //           (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
    //         );

    //       return alert(JSON.stringify(thisRow, null, 4));
    //     };

    //     const editClick = (e) => {
    //       e.stopPropagation();

    //       const api = params.api;
    //       const thisRow = {};

    //       api
    //         .getAllColumns()
    //         .filter((c) => c.field !== '__check__' && !!c)
    //         .forEach(
    //           (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
    //         );

    //       return alert(JSON.stringify(thisRow, null, 4));
    //     };

    //     const deleteClick = (e) => {
    //       e.stopPropagation();

    //       const api = params.api;
    //       const thisRow = {};

    //       api
    //         .getAllColumns()
    //         .filter((c) => c.field !== '__check__' && !!c)
    //         .forEach(
    //           (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
    //         );
    //       deleteMatriz(get(thisRow, 'id'))
    //         .then(response => {
    //           setLoading(true)
    //           getMatrizes()
    //             .then((response) => {
    //               setRows(get(response, 'data.data'));
    //             })
    //             .catch()
    //             .finally(setLoading(false));
    //         })
    //         .catch((e) => alert(e));

    //     };

    //     return (
    //       <Grid container>
    //         <Grid item xs={4}>
    //           <IconButton onClick={infoClick}>
    //             <InfoIcon color="primary" />
    //           </IconButton>
    //         </Grid>
    //         <Grid item xs={4}>
    //           <IconButton onClick={editClick}>
    //             <EditIcon />
    //           </IconButton>
    //         </Grid>
    //         <Grid item xs={4}>
    //           <IconButton onClick={deleteClick}>
    //             <DeleteIcon color="error" />
    //           </IconButton>
    //         </Grid>
    //       </Grid>
    //     );
    //   },
    // },
  // ];

  // console.warn('columns', get(store, 'columns', []))
  // console.warn('columns', store.get(columns))
  // console.warn('rows', rows)

  return (
    <DefaultDatagrid
      store={store}
      columns={columns}
      loading={loading}
      add={{title: "Cadastrar Matriz", to: ADD_MATRIZ }}
      pageSize={20}
      style={{ minHeight: '100vh', minWidth: 830 }}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  );
}

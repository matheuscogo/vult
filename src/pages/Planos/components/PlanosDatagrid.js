import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { getPlanos, deletePlano } from '../../../services/Planos';

export default function PlanosDatagrid(props) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    refresh
  } = props

  console.warn(props)

    useEffect(() => {
      setLoading(true);
      getPlanos()
        .then((response) => {
          setRows(get(response, 'data.data'));
        })
        .catch()
        .finally(setLoading(false));
    }, [refresh]);

  const width = '820';

  useEffect(() => {
    setLoading(true);
    getPlanos()
      .then((response) => {
        setRows(get(response, 'data.data'));
      })
      .catch()
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [rows]);

  const columns = [
    { field: 'id', headerName: 'ID', width: width / 5 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: width / 5,
      editable: true,
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      width: width / 5 + 100,
      editable: true,
    },
    {
      field: 'tipo',
      headerName: 'tipo',
      width: width / 5 - 10,
      editable: true,
      hide: () => true,
    },
    {
      field: 'quantidadeDias',
      headerName: 'Quantidade Dias',
      width: width / 5 - 10,
      editable: true,
    },
    {
      field: 'ativo',
      headerName: 'Ativo',
      width: width / 5 - 10,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Ações',
      sortable: false,
      width: width / 5 + 20,
      renderCell: (params) => {
        const infoClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        const editClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return alert(JSON.stringify(thisRow, null, 4));
        };

        const deleteClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          deletePlano(get(thisRow, 'id'))
            .then((response) => {
              setLoading(true);
              getPlanos()
                .then((response) => {
                  setRows(get(response, 'data.data'));
                })
                .catch()
                .finally(setLoading(false));
            })
            .catch((e) => alert(e));

        };

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
        );
      },
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      pageSize={20}
      style={{width: 1240, height: 500}}
      rowsPerPageOptions={[0]}
      className="DataGrid"
    />
  );
}

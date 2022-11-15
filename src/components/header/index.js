import React from 'react'
import LinkRoute from '../../components/router'
import {
  AVISOS,
  CONFINAMENTOS,
  HOME,
  INSEMINACOES,
  MATRIZES,
  PARAMETROS,
  PLANOS,
  REGISTROS,
  // eslint-disable-next-line import/extensions
} from '../../navigation/CONSTANTS'
import { Typography, Grid, Box, Divider } from '@mui/material'

const Header = () => {
  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" component="h2">
            Vult Scire
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <LinkRoute to={HOME}>Pagina Inicial</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={MATRIZES}>Matrizes</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={PLANOS}>Planos</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={CONFINAMENTOS}>Confinamentos</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={INSEMINACOES}>Inseminações</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={PARAMETROS}>Parametros</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={AVISOS}>Avisos</LinkRoute>
        </Grid>
        <Grid item>
          <LinkRoute to={REGISTROS}>Registros</LinkRoute>
        </Grid>
      </Grid>
      <Divider style={{ margin: 16 }}></Divider>
    </Box>
  )
}

export default Header

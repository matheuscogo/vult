import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Grid, Fab } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

import styles from './styles'

const DefaultDatagrid = (props) => {
  const { rows, columns } = props

  console.warn('columns', columns)

  return (
    <Box>
      <Grid
        container
        direction="rows"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item style={{ margin: 10, marginRight: 100 }}>
          <Fab variant="extended">
            <AddCircleIcon sx={{ mr: 1 }} />
            Cadastrar
          </Fab>
        </Grid>
        <Grid item style={{ margin: 10, marginLeft: 100 }}>
          <Fab variant="extended" style={{ padding: 25, float: 'right' }}>
            <ReplayCircleFilledIcon sx={{ mr: 1 }} />
            Atualizar listagem
          </Fab>
        </Grid>
      </Grid>
      <DataGrid rows={rows} columns={columns} {...props} />
    </Box>
  )
}

DefaultDatagrid.propTypes = {
  add: PropTypes.object,
}

DefaultDatagrid.defaultProps = {
  add: {},
}

export default withStyles(styles)(DefaultDatagrid)

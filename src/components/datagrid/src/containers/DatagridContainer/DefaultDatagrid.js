import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Grid, Fab } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

import styles from './styles'

const DefaultDatagrid = (props) => {
  const { rows, columns, refresh, add, title, showAdd } = props

  return (
    <Box>
      <Grid
        container
        direction="rows"
        alignItems="center"
        justifyContent="center"
        spacing={24}
      >
        {showAdd ? (
          <Grid item style={{ margin: 10 }}>
            <Fab variant="extended" onClick={() => add()}>
              <AddCircleIcon sx={{ mr: 1 }} />
              Cadastrar {title}
            </Fab>
          </Grid>
        ) : null}
        <Grid item style={{ margin: 10 }}>
          <Fab
            variant="extended"
            style={{ padding: 25, float: 'right' }}
            onClick={() => refresh()}
          >
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
  add: PropTypes.func,
}

DefaultDatagrid.defaultProps = {
  add: () => {},
  onCellEditCommit: () => {},
  showAdd: true,
}

export default withStyles(styles)(DefaultDatagrid)

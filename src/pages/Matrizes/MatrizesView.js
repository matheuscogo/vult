import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import MatrizesDatagrid from './components/MatrizesDatagrid'
import datagridMatrizesStore from './store/datagridMatrizesStore'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'

const MatrizesView = inject('datagridMatrizesStore')(
  observer((props) => {
    const { title, datagridMatrizesStore: store } = props

    return (
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item>
            <MatrizesDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

MatrizesView.propTypes = {
  title: PropTypes.string,
  datagridMatrizesStore: PropTypes.any.isRequired,
}

MatrizesView.defaultProps = {
  title: '',
}

export default provider(datagridMatrizesStore)(MatrizesView)

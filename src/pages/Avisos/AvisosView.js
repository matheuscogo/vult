import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import AvisosDatagrid from './components/AvisosDatagrid'
import datagridAvisosStore from './store/datagridAvisosStore'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'

const AvisosView = inject('datagridAvisosStore')(
  observer((props) => {
    const { title, datagridAvisosStore: store } = props

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
            <AvisosDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

AvisosView.propTypes = {
  title: PropTypes.string,
  datagridAvisosStore: PropTypes.any.isRequired,
}

AvisosView.defaultProps = {
  title: '',
}

export default provider(datagridAvisosStore)(AvisosView)

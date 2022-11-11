import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import InseminacoesDatagrid from './components/InseminacoesDatagrid'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import datagridInseminacoesStore from './store/datagridInseminacoesStore'

const InseminacoesView = inject('datagridInseminacoesStore')(
  observer((props) => {
    const { title, datagridInseminacoesStore: store } = props
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
            <InseminacoesDatagrid store={store} />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

InseminacoesView.propTypes = {
  title: PropTypes.string.isRequired,
}

InseminacoesView.defaultProps = {
  title: '',
}

export default provider(datagridInseminacoesStore)(InseminacoesView)

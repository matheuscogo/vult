import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import FormMatriz from './components/FormMatriz'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import formMatrizStore from './store/formMatrizStore'

const CadastrarMatrizView = inject('formMatrizStore')(
  observer((props) => {
    const { title } = props

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
            <FormMatriz />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

CadastrarMatrizView.propTypes = {
  title: PropTypes.string.isRequired,
}

CadastrarMatrizView.defaultProps = {
  title: '',
}

export default provider(formMatrizStore)(CadastrarMatrizView)

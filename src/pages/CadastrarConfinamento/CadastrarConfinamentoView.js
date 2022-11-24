import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import FormConfinamento from './components/FormConfinamento'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import formConfinamentoStore from './store/formConfinamentoStore'

const CadastrarConfinamentoView = inject('formConfinamentoStore')(
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
            <FormConfinamento />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

CadastrarConfinamentoView.propTypes = {
  title: PropTypes.string.isRequired,
}

CadastrarConfinamentoView.defaultProps = {
  title: '',
}

export default provider(formConfinamentoStore)(CadastrarConfinamentoView)

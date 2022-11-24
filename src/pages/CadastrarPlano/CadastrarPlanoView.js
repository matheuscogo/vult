import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import FormPlano from './components/FormPlano'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import formPlanoStore from './store/formPlanoStore'

const CadastrarPlanoView = inject('formPlanoStore')(
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
            <FormPlano />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

CadastrarPlanoView.propTypes = {
  title: PropTypes.string.isRequired,
}

CadastrarPlanoView.defaultProps = {
  title: '',
}

export default provider(formPlanoStore)(CadastrarPlanoView)

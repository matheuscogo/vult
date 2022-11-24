import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Box } from '@mui/material'
import FormInseminacao from './components/FormInseminacao'
import { provider } from '../../components/store/provider'
import { observer, inject } from 'mobx-react'
import formInseminacaoStore from './store/formInseminacaoStore'

const CadastrarInseminacaoView = inject('formInseminacaoStore')(
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
            <FormInseminacao />
          </Grid>
        </Grid>
      </Box>
    )
  })
)

CadastrarInseminacaoView.propTypes = {
  title: PropTypes.string.isRequired,
}

CadastrarInseminacaoView.defaultProps = {
  title: '',
}

export default provider(formInseminacaoStore)(CadastrarInseminacaoView)

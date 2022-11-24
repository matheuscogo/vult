import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { insertMatriz } from '../../../services/Matrizes'
import Fab from '@mui/material/Fab'
import Check from '@mui/icons-material/Check'
import ArrowBack from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'

const theme = createTheme()

export default function FormMatriz() {
  const history = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    if (
      !isEmpty(data.get('numero')) &&
      !isEmpty(data.get('rfid')) &&
      !isEmpty(data.get('ciclos'))
    ) {
      const { success, message } = await insertMatriz(
        JSON.stringify({
          rfid: data.get('rfid'),
          numero: data.get('numero'),
          ciclos: parseInt(data.get('ciclos')),
        })
      )

      alert(success ? message : 'Erro: ' + message)
    }
  }

  const goBackward = () => {
    history(-1)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="rfid"
                  required
                  fullWidth
                  id="rfid"
                  label="RFID"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="numero"
                  label="Número"
                  name="numero"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  required
                  id="ciclos"
                  name="ciclos"
                  label="Ciclos"
                  type="number"
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 1 }}>
              <Grid container spacing={14}>
                <Grid item xs={6} sm={6}>
                  <Fab
                    variant="extended"
                    style={{ float: 'left' }}
                    fullWidth
                    onClick={() => goBackward()}
                  >
                    <ArrowBack sx={{ mr: 1 }} />
                    Voltar
                  </Fab>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Fab
                    variant="extended"
                    style={{ float: 'right' }}
                    type="submit"
                    fullWidth
                  >
                    <Check sx={{ mr: 1 }} />
                    Cadastrar
                  </Fab>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from './Base'

export function Home(props) {
    const history = useHistory()

    return (
        <Base>
        <Box className='StudentHomePortal'>
        <Container>
     <Typography variant="h1" gutterBottom>
        Welcome to Student Portal
        <Typography variant="h2" gutterBottom>This Site is completely Created for the Student Portal Using React Curd Method</Typography>
        <Typography variant="h4" gutterBottom component="h1">User Can Read, Create, Edit, Delete a Student Profile</Typography>
        <Button variant='contained' onClick={() => history.push("/users")} color="secondary">Student Portal</Button>
      </Typography>

      </Container>
      </Box>
        </Base>
    )
}

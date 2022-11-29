import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Box, Button, Typography } from '@mui/material'
const NotFound = () => {
  //   return (
  //     <div class="mainbox">
  //       <div class="err">404</div>
  //       <div class="msg">
  //         Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
  //         existed in the first place?
  //         <p>
  //           Let's go{' '}
  //           <NavLink to="." end>
  //             Home
  //           </NavLink>{' '}
  //           and try from there.
  //         </p>
  //       </div>
  //     </div>
  //   )
  // }
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '60vh',
        backgroundColor: '#494949',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine?
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        Never existed in the first place?Let's go Home and try from there.
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/')
        }}
      >
        Back Home
      </Button>
    </Box>
  )
}

export default NotFound

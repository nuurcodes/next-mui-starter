import { FC } from 'react'
import { Box } from '@mui/material'

export const Main: FC = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box role='navigation'>Header</Box>
      <Box role='main' flexGrow={1}>
        {children}
      </Box>
      <Box role='contentinfo'>Footer</Box>
    </Box>
  )
}

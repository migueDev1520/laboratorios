import React  from "react"

import { Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';


export const Header: React.FC = ()  => {
  return (
    <header>
         <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: '#1976d2',
            display: 'flex',     
            alignItems: 'center',
            gap: 1.5             
          }}
          >
        <GitHubIcon sx={{ fontSize: 40 }} />
        GitHub Organization Members
      </Typography>
  </header>
  )
}
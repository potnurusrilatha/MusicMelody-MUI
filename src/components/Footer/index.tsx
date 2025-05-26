import { Box, Typography } from "@mui/material"


const Footer = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: { xs: '20vh', sm: '15vh', md: '10vh' },
            backgroundColor: 'primary.main',
            padding: 2,
            marginTop: 4,
        }} 
        >
      <Typography 
      variant="body2"
      color="text.primary"
      align="center"
      sx={{
        marginTop: 4,
        padding: 4,
        color: 'primary.contrastText',
        fontFamily: "Matemasie",
        fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
      }}>© {new Date().getFullYear()} Music Melody. All rights reserved.</Typography>
      
    <Box
    sx= {{
        height: '1.5px',
        backgroundColor: 'primary.contrastText',
        width: '100%',
        margin: "1rem 0",
    }}
    />
    </Box>
  )
}

export default Footer

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
            color: 'primary.contrastText',
            overflow: 'visible',
            position: 'relative',
        // zigzag 
        clipPath: {
          xs: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 90% 85%, 85% 100%, 80% 85%, 75% 100%, 70% 85%, 65% 100%, 60% 85%, 55% 100%, 50% 85%, 45% 100%, 40% 85%, 35% 100%, 30% 85%, 25% 100%, 20% 85%, 15% 100%, 10% 85%, 5% 100%, 0 85%)',
          sm: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0 90%)',
          md: 'polygon(0 0, 100% 0, 100% 92%, 95% 100%, 90% 92%, 85% 100%, 80% 92%, 75% 100%, 70% 92%, 65% 100%, 60% 92%, 55% 100%, 50% 92%, 45% 100%, 40% 92%, 35% 100%, 30% 92%, 25% 100%, 20% 92%, 15% 100%, 10% 92%, 5% 100%, 0 92%)',
        },
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

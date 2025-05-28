import { Typography, Box } from '@mui/material'


const Header = () => {
  return (
    <Box 
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: '30vh', sm: '40vh', md: '50vh' },
        backgroundColor: 'primary.dark',
        padding: 2,
        marginBottom: 4,
          position: 'relative',
        // zigzag 
        clipPath: {
          xs: 'polygon(0 0, 100% 0, 100% 85%, 95% 100%, 90% 85%, 85% 100%, 80% 85%, 75% 100%, 70% 85%, 65% 100%, 60% 85%, 55% 100%, 50% 85%, 45% 100%, 40% 85%, 35% 100%, 30% 85%, 25% 100%, 20% 85%, 15% 100%, 10% 85%, 5% 100%, 0 85%)',
          sm: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0 90%)',
          md: 'polygon(0 0, 100% 0, 100% 92%, 95% 100%, 90% 92%, 85% 100%, 80% 92%, 75% 100%, 70% 92%, 65% 100%, 60% 92%, 55% 100%, 50% 92%, 45% 100%, 40% 92%, 35% 100%, 30% 92%, 25% 100%, 20% 92%, 15% 100%, 10% 92%, 5% 100%, 0 92%)',
        },
    }}>
    <Typography
     variant='h1'
     textAlign={'center'}
     color='primary.contrastText'
     gutterBottom
    sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
        fontFamily: "Matemasie",
        fontWeight: 'bold',
    }}
    >
    Music Melody
    </Typography>
    <Typography 
        variant='h3'
        textAlign={'center'}
       
        gutterBottom
        sx={{ 
            fontSize:{xs: '1rem', sm: '1.5rem', md: '2rem'},
        color: 'seconadark.dark',
        fontFamily: "Matemasie",
        }}
        >Stream. Organize. Feel the Beat.

    </Typography>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
        }} />
    </Box>
  )
}

export default Header


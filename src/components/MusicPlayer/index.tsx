import { Box, Typography, Card, CardContent, Stack } from "@mui/material";

interface MusicPlayerProps {
  tracks: { name: string; id: string }[];
}

const MusicPlayer = ({ tracks }: MusicPlayerProps) => {
  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🎵 Top Tracks
      </Typography>

      <Stack spacing={2}>
        {tracks.map((track, index) => (
          <Card key={index} elevation={3}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                {track.name}
              </Typography>
              <iframe
                src={`https://open.spotify.com/embed/track/${track.id}`}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default MusicPlayer;

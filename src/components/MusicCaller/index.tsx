import { useEffect, useState } from "react";
import Artist from "../Artist";
import MusicPlayer from "../MusicPlayer";
import { Container, Box, Paper, TextField, Typography, Button, CircularProgress, Alert } from "@mui/material";
import { artistType } from "@/utils/music";

const MusicCaller = () => {
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState<artistType | null>(null);
  const [tracks, setTracks] = useState<{ name: string; id: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArtist = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${inputValue}`);
      const data = await res.json();
      const artistData = data.artists.items[0];

      if (!artistData) {
        setError("Artist not found.");
        setArtist(null);
        setTracks([]);
        return;
      }

      const artistInfo: artistType = {
        name: artistData.name,
        image: artistData.images[0]?.url || "",
        genre: artistData.genres || [],
        followers: artistData.followers.total,
        id: artistData.id,
        bio: ["Spotify artist"], // placeholder
        albums: { links: ["https://open.spotify.com/artist/" + artistData.id] },
      };

      setArtist(artistInfo);
      localStorage.setItem("artist", JSON.stringify(artistInfo));
      fetchTracks(artistData.id);
    } catch {
      setError("Failed to fetch artist.");
    } finally {
      setLoading(false);
    }
  };

  const fetchTracks = async (id: string) => {
    try {
      const res = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${id}/top-tracks`);
      const data = await res.json();
      const trackList = data.tracks.map((track: any) => ({
        name: track.name,
        id: track.id,
      }));
      setTracks(trackList);
    } catch {
      setError("Failed to fetch tracks.");
    }
  };

  useEffect(() => {
    const savedArtist = localStorage.getItem("artist");
    if (savedArtist) {
      const parsed = JSON.parse(savedArtist);
      setArtist(parsed);
      fetchTracks(parsed.id);
    }
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={12}>
        <Box sx={{ p: 2, textAlign: "center", backgroundColor: "lightblue" }}>
          <Typography variant="h3" gutterBottom>
            Music Finder
          </Typography>

          <TextField
            label="Enter Artist Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchArtist()}
            fullWidth
            sx={{ mb: 2 }}
          />
        <Button variant="contained" onClick={fetchArtist}
            sx={{
            backgroundColor: "#673ab7",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#512da8",
          },
        }}
        >
          Search
        </Button>

          {loading && <CircularProgress sx={{ mt: 3 }} />}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          {artist && inputValue.trim() !== ''&&(
            <>
              <Artist {...artist} />
              {tracks.length > 0 && <MusicPlayer tracks={tracks} />}
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default MusicCaller;

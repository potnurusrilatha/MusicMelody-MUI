import { artistType } from "@/utils/music";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Artist = ({ name, image, genre, followers, albums, id, bio }: artistType) => {
  const formattedFollowers = followers.toLocaleString();
  const formattedLinks = albums?.links?.join(", ") || "No music found.";
  const formattedBio = bio?.join(" ") || "No bio available.";
 const formattedGenres = (genre || []).map(
     (g) => g.charAt(0).toUpperCase() + g.slice(1)).join(", ");

  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", backgroundColor: "lightblue" }}>
      <CardMedia component="img" height="300" image={image} alt={name} />
      <CardContent>
        <Typography variant="h5" gutterBottom>{name}</Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Genres: {formattedGenres}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Followers: {formattedFollowers}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Albums: {formattedLinks}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Bio: {formattedBio}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ID: {id}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Artist;

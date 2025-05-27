export type artistType = {
    name: string;
    image: string;
    genre: string[];
    followers: number;
    bio: string[];
    id: string;
    albums: {
    links: string[]; // ✅ links is inside albums
  };

}

export type albumType = {
    links: string[];
};

interface IPlatforms {
  platform: {
    id: number;
    slug: string;
    name: string;
    image_background: string;
  };
  released_at: string;
}

interface IParent_platforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface IRating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface IGenres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  imgae_background: string;
}

export interface IGamesResult {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: IRating[];
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  platforms: IPlatforms[];
  parent_platforms: IParent_platforms[];
  genres: IGenres[];
  short_screenshots: [
    {
      id: number;
      image: string;
    }
  ];
}

export interface IGames {
  count: number;
  next: string;
  previous: string;
  results: IGamesResult[];
}

interface IRatings {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface IParentPlatforms {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

interface IGenres {
  id: number;
  name: string;
  slug: string;
}

interface IDevelopers {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  metacritic: string;
  released: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  ratings: IRatings[];
  playtime: string;
  parent_platforms: IParentPlatforms[];
  genres: IGenres[];
  developers: IDevelopers[];
}

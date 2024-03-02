interface IGames {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface IGenresResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: IGames[];
}

export interface IGenres {
  count: number;
  next: null;
  previous: null;
  results: IGenresResult[];
}

interface IGames {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface IDevelopersResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: IGames[];
}

export interface IDevelopers {
  count: number;
  results: IDevelopersResult[];
}

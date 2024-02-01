interface IGames {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface IResponseResult {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: IGames[];
}

export interface IResponse {
  count: number;
  next: null;
  previous: null;
  results: IResponseResult[];
}

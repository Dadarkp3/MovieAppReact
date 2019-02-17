export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genre_ids: number[];
  genre: IGenre[];
  vote_average: number;
}

export interface IMovieList {
  page: string;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}

export interface IGenre {
  id: number;
  name: string;
}

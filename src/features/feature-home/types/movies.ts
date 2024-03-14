export interface ResultsDataType {
  id: number;
  backdrop_path: string;
  title: string;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
}

export interface MoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: ResultsDataType[];
}

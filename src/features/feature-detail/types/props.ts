import { CastMember } from './cast';
import { MovieDetailType } from './movie';

export interface MovieDetailComponentProps {
  movie: MovieDetailType | undefined;
  cast?: CastMember[] | undefined;
}

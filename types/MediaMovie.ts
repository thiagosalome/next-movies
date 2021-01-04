/* eslint-disable camelcase */
type MediaMovie = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: null | object,
  budget: number,
  genres: {
    id: number,
    name: string
  }[],
  homepage: string | null,
  id: number;
  original_language: string,
  original_title: string,
  overview: string | number,
  popularity: number,
  poster_path: string | null,
  production_companies: {
    name: string;
    id: number,
    logo_path: string | null,
    origin_country: string
  }[],
  production_countries: {
    iso_3166_1: string,
    name: string
  }[],
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    iso_639_1: string,
    name: string,
  }[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  images: {
    backdrops: {
      aspect_ratio: number,
      file_path: string,
      height: number,
      iso_639_1: string | null,
      vote_average: number,
      vote_count: number,
      width: number,
    }[],
    posters: {
      aspect_ratio: number,
      file_path: string,
      height: number,
      iso_639_1: string | null,
      vote_average: number,
      vote_count: number,
      width: number,
    }[],
  },
  credits: {
    cast: {
      adult: boolean,
      gender: number | null,
      id: number,
      known_for_department: string,
      name: string,
      original_name: string,
      popularity: number,
      profile_path: string | null,
      character: string,
      credit_id: string,
      order: number,
    }[],
    crew: {
      adult: boolean,
      gender: number | null,
      id: number,
      known_for_department: string,
      name: string,
      original_name: string,
      popularity: number,
      profile_path: string | null,
      credit_id: string,
      department: string,
      job: string,
    }[]
  }
}

export default MediaMovie

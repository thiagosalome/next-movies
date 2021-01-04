/* eslint-disable camelcase */
type Media = {
  backdrop_path: string,
  created_by: {
    id: number,
    credit_id: string,
    name: string,
    gender: number,
    profile_path: string | null
  }[],
  episode_run_time: number[],
  first_air_date: string,
  genres: {
    id: number,
    name: string
  }[],
  homepage: number,
  in_production: boolean,
  languages: string[],
  last_air_date: string,
  last_episode_to_air: {
    air_date: string,
    episode_number: number,
    id: number,
    name: string;
    overview: string;
    production_code: string;
    season_number: number,
    still_path: string,
    vote_average: number,
    vote_count: number
  },
  name: string,
  next_episode_to_air: null,
  networks: {
    name: string,
    id: number,
    logo_path: string,
    origin_country: string
  }[]
  number_of_episodes: number,
  number_of_seasons: number,
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: {
    id: number,
    logo_path: null,
    name: string;
    origin_country: string
  }[],
  production_countries: {
    iso_3166_1: string,
    name: string
  }[],
  seasons: {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number
  }[],
  spoken_languages: {
    english_name: string,
    iso_639_1: string,
    name: string
  }[],
  status: string,
  tagline: string,
  type: string,
  vote_average: number,
  vote_count: number,
  images: {
    backdrops: {
      aspect_ratio: number,
      file_path: string,
      height: number
      iso_639_1: null
      vote_average: number
      vote_count: number
      width: number
    }[],
    posters: {
      aspect_ratio: number,
      file_path: string,
      height: number
      iso_639_1: null
      vote_average: number
      vote_count: number
      width: number
    }[],
  },
  credits: {
    cast: {
      adult: boolean,
      character: string,
      credit_id: string,
      gender: number,
      id: number,
      known_for_department: string,
      name: string,
      order: number,
      original_name: string,
      popularity: number,
      profile_path: string,
    }[],
    crew: {
      adult: boolean,
      credit_id: string,
      department: string,
      gender: number,
      id: number,
      job: string,
      known_for_department: string,
      name: string,
      original_name: string,
      popularity: number,
      profile_path: string,
    }[]
  }
}

export default Media

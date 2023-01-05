import Banner from "../components/Banner";
import tmdb from "../lib/tmdb";
import { Movie } from "../typings";

interface MovieLists {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

async function getMovieLists() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(tmdb.fetchNetflixOriginals).then((res) => res.json()),
    fetch(tmdb.fetchTrending).then((res) => res.json()),
    fetch(tmdb.fetchTopRated).then((res) => res.json()),
    fetch(tmdb.fetchActionMovies).then((res) => res.json()),
    fetch(tmdb.fetchComedyMovies).then((res) => res.json()),
    fetch(tmdb.fetchHorrorMovies).then((res) => res.json()),
    fetch(tmdb.fetchRomanceMovies).then((res) => res.json()),
    fetch(tmdb.fetchDocumentaries).then((res) => res.json()),
  ]);

  // TODO: handle errors
  // if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  // throw new Error("Failed to fetch data");
  // }

  return {
    netflixOriginals: netflixOriginals.results,
    trendingNow: trendingNow.results,
    topRated: topRated.results,
    actionMovies: actionMovies.results,
    comedyMovies: comedyMovies.results,
    horrorMovies: horrorMovies.results,
    romanceMovies: romanceMovies.results,
    documentaries: documentaries.results,
  };
}

export default async function Home() {
  const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  }: MovieLists = await getMovieLists();

  return (
    <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
      <Banner netflixOriginals={netflixOriginals} />
      <section></section>
    </main>
  );
}

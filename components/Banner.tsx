"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../lib/constants";
import { Movie } from "../typings";

type Props = {
  netflixOriginals: Movie[];
};

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12'>
      {/* Banner image */}
      <div className=' absolute top-0 left-0 -z-10 h-[95vh] w-screen max-w-full'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title || movie?.original_title || ""}
          fill={true}
          className='object-cover'
        />
      </div>

      {/* Title and description */}
      <div>
        <h1 className='pb-2 text-2xl md:text-4xl lg:text-7xl'>
          {movie?.title || movie?.original_title}
        </h1>
        <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
          {movie?.overview}
        </p>
      </div>

      {/* Buttons */}
      <div className='flex space-x-3'>
        <button className='bannerButton bg-white text-black'>
          <PlayIcon className='h-4 w-4 text-black md:h-7 md:w-7' />
          Play
        </button>
        <button className='bannerButton bg-[gray]/70'>
          <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
          More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;

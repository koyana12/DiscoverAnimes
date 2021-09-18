import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import DisplayComponent from "./DisplayComponent";
export default function App() {
  const { register, handleSubmit } = useForm();
  const [topAnime, setTopAnime] = useState([]);
  const [AnimeCharacters, setAnimeCharacters] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState([]);
  const [result, setResult] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [animeRank, setAnimeRank] = useState(1);

  const onSubmit = (data) => onSubmitHandler(data);

  function onSubmitHandler(data) {
    setResult(data);
    console.log(data.fav_anime_search);
    data.fav_anime_search
      ? fetchAnime(data.fav_anime_search, 2)
      : fetchAnime(data.fav_anime, 1);
    setIsSubmitted(true);
  }

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 15));
  };

  const fetchAnime = async (query, limit) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=${limit}`
    ).then((res) => res.json());
    // console.log(temp.results[0].mal_id, "kk");
    setAnimeRank(temp.results[0].mal_id);
    setAnimeList(temp.results);
  };

  const getAnimeCharacters = async (id) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/anime/${id}/characters_staff`
    ).then((res) => res.json());
    // yahan pe
    console.log("Anime name 🤩 ", temp.characters[0]);
    setAnimeCharacters(temp.characters);
    console.log("main character 😎", temp.characters[0].name);
    // setAnimeCharacters(temp.characters[0].name);
  };

  useEffect(() => {
    getTopAnime();
    getAnimeCharacters(animeRank);
  }, [animeRank]);

  // console.log("Top 5 Anime 😍", topAnime[0]);
  /*
  how did you do so much :O ?
  Time paasss
  what are you planning next?
  Showing Character Data for the selected Anime (1st or 2nd entry?) 1st 
  */

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Headers />
      <select {...register("fav_anime")}>
        <option value="">Select the Top Animes 😍</option>
        <option value="Haikyuu">Haikyuu! ⛹️‍♂️ </option>
        {topAnime.map((anime) => {
          return (
            <>
              <option value={anime.title}>{anime.title}</option>
              <img src={anime.image_url} />
            </>
          );
        })}
      </select>
      <h5>Or</h5>
      <input
        {...register(
          "fav_anime_search",
          { required: false },
          { pattern: /[A-Za-z]/ }
        )}
        placeholder="Enter the name of your Favourite Anime 😎"
      />
      <input
        {...register("Name", { required: true }, { pattern: /[A-Za-z]/ })}
        placeholder="Whats Your Name"
      />

      {/* <input
        {...register("age", { required: false, min: 1, max: 25 })}
        placeholder="Age"
      />

      <select {...register("gender")}>
        <option value="">Select your gender...</option>
        <option value="f">Female</option>
        <option value="m">Male</option>
        <option value="o">Other</option>
      </select> */}

      <input type="submit" />
      {/* {console.log(animeList.length > 0)} */}
      {isSubmitted === true && animeList.length > 0 && (
        <DisplayComponent
          data={result}
          animeData={animeList}
          AnimeCharacters={AnimeCharacters}
        />
      )}
    </form>
  );
}

/* 

*/

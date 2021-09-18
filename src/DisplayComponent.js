import React from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";
import CharacterCard from "./CharacterCard";

const greetingMessage = ` , here's what we have found for you:`;
function DisplayComponent(data) {
  const text = `Hey ${data.data.Name}` + greetingMessage;
  return (
    <StyledDiv>
      <h1>{text}</h1>
      {/* {console.log("Display Component")} <ReactJson src={data} theme="google" /> */}
      <AnimeCard data={data.animeData[0]} />
      {/* {console.log("CHARACTER DATa", data.AnimeCharacters)} */}
      <CharacterCardStyled>
        <CharacterCard data={data.AnimeCharacters[0]} />
        <CharacterCard data={data.AnimeCharacters[1]} />
        <CharacterCard data={data.AnimeCharacters[2]} />
        <CharacterCard data={data.AnimeCharacters[3]} />
      </CharacterCardStyled>
    </StyledDiv>
  );
}

// this below code is not giving error but i guess i made a mistake in referring
/* {data.AnimeCharacters.map((item, index) => {
          console.log(index, item);
          return <CharacterCard key={index}>{item}</CharacterCard>;
        })} */

//  {data.AnimeCharacters.map((character) => {
//           <CharacterCard data={character} />;
//           console.log(character, "inside map");
//         })}

// {topAnime.map((anime) => {
//   return (
//     <>
//       <option value={anime.title}>{anime.title}</option>
//       <img src={anime.image_url} />
//     </>
//   );

const StyledDiv = styled.div`
  color: pink;
  border-radius: 5;
`;

const CharacterCardStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export default DisplayComponent;

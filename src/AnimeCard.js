import React from "react";
import styled from "styled-components";
function AnimeCard({ data }) {
  return (
    <article className="anime-card">
      <a href={data.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={data.image_url} alt="Anime" />
        </figure>
        <StyledH3>{data.title}</StyledH3>
      </a>
      <SpanWrapper>
        <span>
          {`Rating : `}
          {data.rated === "R" ? (
            <StyledText primary>{data.rated}</StyledText>
          ) : (
            <StyledText>{data.rated}</StyledText>
          )}
        </span>
        <span>
          {`Ariring 📺 : `}
          {/* {data.airing ? <span> Yes</span> : <span> No</span>} */}
          {data.airing ? (
            <StyledText>Yes</StyledText>
          ) : (
            <StyledText primary>No</StyledText>
          )}
        </span>
      </SpanWrapper>
      <section>
        <h1>{data.synopsis}</h1>
      </section>
    </article>
  );
}

const SpanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
  font-size: 20px;
  font-weight: bold;
`;

const StyledText = styled.span`
  color: ${(props) => (props.primary ? "red" : "green")};
`;

const StyledH3 = styled.h3`
  font-size: 20px;
  color: white;
`;

export default AnimeCard;

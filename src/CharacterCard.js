import React from "react";

function CharacterCard({ data }) {
  console.log(data, "here ");
  return (
    <article className="character-card">
      <h1>{data.role} Character</h1>
      <a href={data.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={data.image_url} alt="Character" />
        </figure>
        <h3>{data.name}</h3>
      </a>
      {/*  */}
      <section>
        <h1>{data.synopsis}</h1>
      </section>
      {console.log(data)}
    </article>
  );
}

export default CharacterCard;

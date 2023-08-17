import React from "react";
import s from "../styles/Book.module.css";
import photo1 from "../assets/img/ugly_duckling.jpg";
import photo2 from "../assets/img/The_snow_queen.jpg";
import photo3 from "../assets/img/thumbelina.jpg";

const Book = () => {
  return (
    <div>
      <h1 className={s.city}>Fairy tales of Hans Christian Andersen</h1>
      <p className={s.description}>
        Hans Christian Andersen, was born April 2, 1805, Odense, near
        Copenhagen, Denmark—died August 4, 1875, Copenhagen, Danish master of
        the literary fairy tale whose stories achieved wide renown. He is also
        the author of plays, novels, poems, travel books, and several
        autobiographies. While many of those works are almost unknown outside
        Denmark, his fairy tales are among the most frequently translated works
        in all of literary history. Andersen, who was born to poor parents,
        fought the rigid class structure of his time throughout his life. The
        first significant help came from Jonas Collin, one of the directors of
        the Royal Theatre in Copenhagen, to which Andersen had gone as a youth
        in the vain hope of winning fame as an actor. Collin raised money to
        send him to school. His most famous fairy tales include "The Emperor's
        New Clothes", "The Nightingale", "The Red Shoes", "The Princess and the Pea", "The Snow
        Queen", "The Ugly Duckling", "The Little Match Girl", and "Thumbelina".
      </p>
      <div className={s.photo}>
        <img src={photo1} alt="Фото 1" />
        <img src={photo2} alt="Фото 2" />
        <img src={photo3} alt="Фото 3" />
      </div>
    </div>
  );
};

export default Book;

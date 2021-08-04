import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  async function getData() {
    const respon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log(respon);
    setName(respon.data.name);
    setMoves(respon.data.moves.length);
  }

  useEffect(() => {
    // alert("hi");
    getData();
  });
  return (
    <>
      <div>Pokemon</div>

      <h1> You choose {num} value </h1>
      <h1> You choose {name} value </h1>
      <h1> You choose {moves} value </h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
};

export default Pokemon;

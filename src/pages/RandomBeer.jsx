import axios from "axios";
import { useEffect, useState } from "react";


function RandomBeer() {
  const [beerData, setBeerData] = useState({});


  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        setBeerData(res.data);
      });
  }, [setBeerData]);
  return (
    <div>
      <img src={require("../assets/new-beer.png")} alt="newBeer" />
      <h1>Here is your random beer: {beerData.name}</h1>
      <img height="100px" src={beerData.image_url} />
      <h2>{beerData.tagline}</h2>
      <h3>{beerData.first_brewed}</h3>
      <h3>{beerData.attenuation_level}</h3>
      <h3>{beerData.description}</h3>
      <h4>{beerData.contributed_by}</h4>
    </div>
  );
}
export default RandomBeer;
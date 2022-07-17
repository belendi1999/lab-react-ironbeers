import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetails() {
  const [beerData, setBeerData] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        console.log(res.data)
        setBeerData(res.data);
      });
  }, [setBeerData]);
  return (
    <div>
      <img src={require("../assets/new-beer.png")} alt="newBeer" />
      <h1>Here is your {beerData.name}</h1>
      <img height="100px" src={beerData.image_url} />
      <h2>{beerData.tagline}</h2>
      <h3>{beerData.first_brewed}</h3>
      <h3>{beerData.attenuation_level}</h3>
      <h3>{beerData.description}</h3>
      <h4>{beerData.contributed_by}</h4>
    </div>
  );
}
export default BeerDetails;

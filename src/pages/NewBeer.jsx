import {useState} from "react"
import axios from "axios"

function NewBeer() {
    const [name, setName] = useState()
    const [tagline, setTagline] = useState()
    const [description, setDescription] = useState()
    const [first_brewed, setFirstBrewed] = useState()
    const [brewers_tips, setBrewersTips] = useState()
    const [attenuation_level, setAttenuationLevel] = useState()
    const [contributed_by, setContributedBy] = useState()


  const handleNameInput = e => setName(e.target.value);
  
  const handleTaglineInput = e => setTagline(e.target.value);

  const handleDescriptionInput = e => setDescription(e.target.value);

  const handleFirstBrewedInput = e => setFirstBrewed(e.target.value);

  const handleBrewersTipsInput = e => setBrewersTips(e.target.value);

  const handleAttenuationLevelInput = e => setAttenuationLevel(e.target.value);

  const handleContributedByInput = e => setContributedBy(e.target.value);
    
    const handleSubmit = (e) => {        
        e.preventDefault();
        const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
     
        console.log("Submitted: ", newBeer);

        axios({
            method: "post",
            url: "https://ih-beers-api2.herokuapp.com/beers/new",
            data: newBeer,
            headers: { "Content-Type": "application/json" },
          }).then(function (response) {
              //handle success
              console.log(response);
            }).catch(function (response) {
              //handle error
              console.log(response);
            });


      }



  return (
    <div>
      <img src={require("../assets/new-beer.png")} alt="newBeer" />
      <h1>do u want a new beer?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameInput}/>
          
        </label>
        <label>
          Tagline:
          <input type="text" value={tagline} onChange={handleTaglineInput} />
          
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionInput} />
          
        </label>
        <label>
          first_brewed:
          <input type="text" value={first_brewed} onChange={handleFirstBrewedInput} />
          
        </label>
        <label>
          brewers_tips:
          <input type="text" value={brewers_tips} onChange={handleBrewersTipsInput} />
          
        </label>
        <label>
          attenuation_level:
          <input type="number" value={attenuation_level} onChange={handleAttenuationLevelInput} />
          
        </label>
        <label>
          contributed_by:
          <input type="text" value={contributed_by} onChange={handleContributedByInput} />
          
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default NewBeer;

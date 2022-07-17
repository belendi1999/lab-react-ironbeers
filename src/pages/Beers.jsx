import axios from "axios"
import {useState , useEffect} from "react"
import {Link} from 'react-router-dom';
function Beers(){
    const [beersList, setBeersList] = useState([])
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(res => {
            console.log(res.data)
            setBeersList(res.data)
            
        })
    }, [setBeersList])
    
    return(
        <div>
               <img src={require("../assets/beers.png")} alt="Beer" />
            <h1>here u have all beeersss</h1>
            {beersList.map((beer) => (
                <div key={beer._id}>
                <h3>{beer.name}</h3>
                <Link to={`/beer/${beer._id}`} > <img height='100px' src={beer.image_url}/> </Link>
                <h4>{beer.tagline}</h4>
                <h5>{beer.contributed_by}</h5>



                </div>
            ))}
            
        </div>
    )
    }
    export default Beers; 
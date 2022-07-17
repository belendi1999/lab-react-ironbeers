import { Link, NavLink } from "react-router-dom";

function Home(){
return(
    <div>
        <h1>This is my home page</h1>
        <div>
        <h1> <Link to='/beers'>All Beers</Link></h1>
        <h1> <Link to='/new-beer'>New Beer</Link></h1>
        <h1> <Link to='/random-beer'>Random Beer</Link></h1>
        </div>
    </div>
)
}
export default Home; 
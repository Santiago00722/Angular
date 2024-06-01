import { MoviesGrid} from "../componentes/MoviesGrid";
import { Search } from "../componentes/Search";

export function LandingPages(){
    return(
        <div>
            <Search />
            <MoviesGrid />            
        </div>
    )
}
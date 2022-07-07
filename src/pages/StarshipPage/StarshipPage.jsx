import { useEffect } from "react";
import { useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const [starships, setStarships] =useState([])

  useEffect(()=> {
    const fetchStarships = async () => {
    const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <div>
      <div className="icon-container">
        {starships.map(starshipTitle =>
          <Link 
            key={starshipTitle.index} 
            to={'/starship'} 
            state={{ starshipTitle }}
          >
            <div className="class-div">
              {starshipTitle.name ?
        <>
          <h3>{starshipTitle.name}</h3>
        </>
        :
        <>
          <h3>Loading Starships</h3>
        </>
      }
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default StarshipPage;

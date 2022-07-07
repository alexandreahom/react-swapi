import { useEffect } from "react";
import { useState } from "react";
import { getAllStarships } from "../../services/sw-api";

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
            <div className="class-div" key={starshipTitle.index}>
              {starshipTitle.name}
            </div>
        )}
      </div>
    </div>
  )
}

export default StarshipPage;

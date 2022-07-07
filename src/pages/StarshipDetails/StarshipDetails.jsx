import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starshipTitle.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starshipTitle.url])

  return ( 
    <>
      <div className="details-page">
        {starshipDetails.name ?
        <>
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <Link to='/' state={{}} className='button'>
            RETURN
          </Link>
        </>
        :
        <>
          <h3>Loading Starship Details</h3>
        </>
      }
      </div>
    </>
  )
}

export default StarshipDetails;
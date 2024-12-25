import RestaurantCard from './RestaurantCard';
import reslist from '../utils/mockdata';
import { useState } from 'react';
const Body = () => {
  //React super powered variable called 'Local  State Variable'
  const [Restaurantlist, setRestaurantlist] = useState(reslist);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Add filter such that the list has to be filtered based on the rating of the restaurant
            const filteredlist = Restaurantlist.filter((res) => res.rating > 4);
            console.log('Top-rated restaurants' + Restaurantlist);
            setRestaurantlist(filteredlist);
          }}
        >
          Top-rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {Restaurantlist.map((restaurantId) => (
          <RestaurantCard key={restaurantId} resData={restaurantId} />
        ))}
      </div>
    </div>
  );
};
export default Body;

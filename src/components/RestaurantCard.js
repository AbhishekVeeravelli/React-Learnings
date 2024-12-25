import { CDN_URL } from '../utils/contsants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisine,
    rating,
    costForTwoString,
    deliverytime,
  } = resData;
  return (
    <div className="rest-card" style={{ backgroundColor: 'f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{costForTwoString / 100}</h4>
      <h4>{deliverytime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;

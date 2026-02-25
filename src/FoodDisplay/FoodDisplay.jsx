import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../Context/StoreContext';
import Fooditem from '../components/FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='food_display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    console.log(category,item.category)
                    if ( category==='All' || category === item.category) {
                        return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

                    }








                })}
            </div>
        </div>
    );
};

export default FoodDisplay;


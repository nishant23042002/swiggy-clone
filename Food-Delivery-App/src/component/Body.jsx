import RestaurantCard from "./RestaurantCard";
import Cuisine from "./Cuisine";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function Body() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetch('http://localhost:3001/api/swiggy')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                const restaurantList = data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setRestaurants(restaurantList);
                setLoading(false);
                // console.log(restaurantList);
            })
    }, [])
    if (loading) {
        return (
            <>
                <div className="w-[60%] m-auto">
                    <Skeleton count={20}/>
                </div>
            </>
        );
    }

    return (
        <main>
            <div className="mx-46 p-3">

                <Cuisine /> 

                <div className="border-t-2 border-t-gray-100">
                    <div className="mt-12">
                        <RestaurantCard restaurants={restaurants} />
                    </div>
                    
                </div>
            </div>


        </main>
    );
}

export default Body
import RestaurantCard from "./RestaurantCard";
import Cuisine from "./Cuisine";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { LuSearch } from "react-icons/lu";


function Body() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3001/api/swiggy')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                const restaurantList = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setRestaurants(restaurantList);
                setLoading(false);
                console.log(restaurantList);
            })
    }, [])
    if (loading) {
        return (
            <>
                <div className="w-[60%] m-auto">
                    <Skeleton count={20} />
                </div>
            </>
        );
    }

    const filteredRestaurants = restaurants.filter(res => {
        const nameMatch = res?.info?.name?.toLowerCase().includes(search.toLowerCase());
        const cuisineMatch = res?.info?.cuisines?.some(cuisine =>
            cuisine.toLowerCase().includes(search.toLowerCase())
        );
        return nameMatch || cuisineMatch;
    });

    // console.log(restaurants.map(res => res?.info.cuisines.toLowerCase().includes(search)));

    return (
        <>
            <main>
                <div className="mx-46 p-3">

                    <Cuisine />

                    <div className="border-t-2 border-t-gray-100">
                        <div className="mt-12">
                            <div className="flex justify-between items-center w-[45%] m-auto border-1 border-gray-300 p-3 rounded-sm my-6 ">
                                <input value={search}
                                    onChange={(e) => setSearch(e.target.value)} className="w-full outline-none font-bold" type="search" placeholder="Search for Restaurants" />
                                <LuSearch color="gray" size={"20px"} />
                            </div>
                            
                            <RestaurantCard restaurants={filteredRestaurants} />

                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Body
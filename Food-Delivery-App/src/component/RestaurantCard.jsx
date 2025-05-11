import { useState } from "react";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

function RestaurantCard({ restaurants }) {
    const [topRestaurant, setTopRestaurant] = useState(false);
    const [fastDelivery, setFastDelivery] = useState(false);
    const [isVeg, setVeg] = useState(false);
    const [offers, setOffers] = useState(false);


    function topRatedRestaurants() {
        let filtered = restaurants;
        if (topRestaurant) {
            filtered = filtered.filter(res => res.info.avgRating >= "4.5")
        }
        if (fastDelivery) {
            filtered = filtered.filter(fast => fast.info.sla?.deliveryTime < "30")
        }
        if(isVeg){
            filtered = filtered.filter(veg => veg.info.veg)
        }
        if(offers){
            filtered = filtered.filter(offers => offers.info.aggregatedDiscountInfoV3.header === "50% OFF")
        }
        return filtered;
    }

    function toggleTopRestaurants() {
        setTopRestaurant(!topRestaurant)
    }

    function toggleFastDelivery() {
        setFastDelivery(!fastDelivery)
    }

    function toggleVegRestaurants(){
        setVeg(!isVeg)
    }

    function toggleOfferRestaurants(){
        setOffers(!offers)
    }
    return (
        <>
            <div>
                <div>
                    <h1 className="text-xl font-extrabold tracking-normal">Top restaurant chains in Dwarka</h1>
                </div>
                <div className="flex gap-3 py-4">
                    <div>
                        <button className="flex items-center gap-2 p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer">Filter <span><img width="12" height="14" src="https://img.icons8.com/small/16/sorting-options.png" alt="sorting-options" /></span></button>
                    </div>
                    <div>
                        <button className={fastDelivery ? "p-1.5 px-3 border-1 rounded-3xl font-semibold text-sm text-gray-600 cursor-pointer bg-gray-200" : "p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer"} onClick={toggleFastDelivery}>Fast Delivery</button>
                    </div>
                    <div>
                        <button className={topRestaurant ? "p-1.5 px-3 border-1 rounded-3xl font-semibold text-sm text-gray-600 cursor-pointer bg-gray-200" : "p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer"} onClick={toggleTopRestaurants}>Rating 4.5+</button>
                    </div>
                    <div>
                        <button className={isVeg ? "p-1.5 px-3 border-1 rounded-3xl font-semibold text-sm text-gray-600 cursor-pointer bg-gray-200" : "p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer"} onClick={toggleVegRestaurants}>Pure Veg</button>
                    </div>
                    <div>
                        <button className={offers ? "p-1.5 px-3 border-1 rounded-3xl font-semibold text-sm text-gray-600 cursor-pointer bg-gray-200" : "p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer"} onClick={toggleOfferRestaurants}>Offers</button>
                    </div>
                    <div>
                        <button className="p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer">Rs. 300-Rs. 600</button>
                    </div>
                    <div>
                        <button className="p-1.5 px-3 border-1 rounded-3xl border-gray-300 font-semibold text-sm text-gray-600 cursor-pointer">Less than Rs. 300</button>
                    </div>
                </div>
                <div className="flex gap-8 flex-wrap py-6">
                
                    {
                        topRatedRestaurants().map((restaurant, index) => {
                            return (
                                <Link key={index} to={`/restaurant/${restaurant.info.id}`} state={{ info: restaurant.info }}>
                                    <div className="w-[350px] rounded-2xl overflow-hidden cursor-pointer hover:scale-95 duration-300">
                                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.info.cloudinaryImageId}`} alt={restaurant.info.name} className="w-full h-57 object-cover rounded-2xl"/>
                                        <div className="p-3">
                                            <h2 className="font-bold text-lg">{restaurant.info.name}</h2>
                                            <div className="text-sm font-medium text-gray-700">
                                                <span className="font-semibold flex items-center gap-0.5"><MdStars color="green" size="20px" />{restaurant.info.avgRating}   •   {restaurant.info.sla?.deliveryTime} mins</span>
                                            </div>
                                            <p className="text-sm text-gray-500">{restaurant.info.cuisines?.join(' | ')}</p>
                                            <p className="text-sm text-gray-400">{restaurant.info.areaName}</p>
                                        </div>
                                    </div>                               
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;
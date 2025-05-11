import { useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton'
import { useLocation, useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import {useDispatch} from 'react-redux'
import { addItem } from "../utils/cartSlice";


function RestaurantDetails() {
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [menuItems, setMenuItems] = useState();
    const location = useLocation();
    const restaurantInfo = location.state?.info;
    const [search, setSearch] = useState("");
    const [filterRes, setFilterRes] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                // const restaurantList1 = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                //     ?.card?.card?.itemCards || []
                // console.log(restaurantList1);
                const restaurantList2 = data?.data?.cards
                    ?.find(card => card.groupedCard)
                    ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
                console.log(restaurantList2);
                const allItems = restaurantList2.flatMap(card => card.card?.card?.itemCards || [])
                console.log(allItems)
                setLoading(false);
                setMenuItems(allItems);
                setFilterRes(allItems);
            })
    }, [params.id])

    function handleSearch(search){
        setSearch(search);
        const filtered = menuItems.filter(item => item.card.info.name.toLowerCase().includes(search))
        setFilterRes(filtered);
    }

    function handleaddItem(item){
        dispatch(addItem(item));
    }


    if (loading) {
        return (
            <>
                <Skeleton count={10} />
            </>
        )
    }
    return (
        <>
            <div>
                <div>
                    <div className="flex items-center justify-center my-4">
                        <div className="py-5 w-[40%] border-2">
                            <h1 className="text-2xl font-bold">{restaurantInfo?.name}</h1>
                        </div>

                    </div>

                    <div className="flex items-center justify-center mb-16">
                        <div className="w-[40%] rounded-2xl">
                            <div className="p-5 w-full border-1 border-gray-200 rounded-2xl shadow-xl/40">
                                <div className="flex gap-2 items-center justify-start mb-2">
                                    <span><MdStars color="green" /></span>
                                    <span className="font-bold">{restaurantInfo?.avgRatingString}</span>
                                    <span className="font-bold">({restaurantInfo?.totalRatingsString})</span>
                                    <p className="font-bold">• {restaurantInfo?.costForTwo}</p>
                                </div>
                                <div>
                                    <h1 className="my-2 text-orange-600 font-bold underline">{restaurantInfo?.cuisines.join(",")}</h1>
                                    <h1 className="font-bold">{restaurantInfo?.sla.slaString}</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center mb-4">
                        <div className="w-[40%] rounded-2xl p-5">
                            <div className="flex gap-4 items-center justify-center">
                                <span><MdOutlineRestaurantMenu color="green" /></span>
                                <h1 className="text-gray-500 font-bold">MENU</h1>
                                <span><MdOutlineRestaurantMenu color="red" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-4">
                        <div className="w-[40%] rounded-2xl p-3 bg-gray-200">
                            <div className="flex justify-between items-center">
                                <input onChange={(e) => handleSearch(e.target.value)} value={search} className="w-full outline-none text-gray-500 font-semibold" type="search" placeholder="Search for dishes" />
                                <LuSearch color="gray" size={"20px"} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="flex gap-4 w-[40%] rounded-2xl p-5">
                            <div>


                            </div>
                        </div>
                    </div>

                </div>
                {
                    filterRes.map((resDetails, index) => {
                        return (
                            <div key={index} className="flex justify-center items-center">
                                <div className="flex w-[40%] h-auto border-b-2 border-gray-300 justify-between py-7">
                                    <div className="w-[80%] flex flex-col flex-wrap">
                                        <h1 className="font-bold">{resDetails.card.info.name}</h1>
                                        <p className="font-semibold">₹ {resDetails.card.info.price / 100 || resDetails.card.info.defaultPrice / 100 || resDetails.card.info.finalPrice / 100}</p>
                                        <div className="py-2 flex gap-1 items-center">
                                            <span>{resDetails.card.info.ratings.aggregatedRating.rating < 4 ? <span className="flex justify-center text-amber-300 font-bold items-center gap-2"><MdStars color="yellow" size="15px" /> {resDetails.card.info.ratings.aggregatedRating.rating}</span> : <span className="flex gap-1.5 justify-center text-green-700 font-bold items-center text-sm"><MdStars color="green" size="15px" />{resDetails.card.info.ratings.aggregatedRating.rating}</span>}</span><span className="text-[12px] font-semibold text-gray-600">({resDetails.card.info.ratings.aggregatedRating.ratingCountV2 || 1})</span>
                                        </div>

                                        <p className="text-gray-500 text-sm font-semibold">{resDetails.card.info.description}</p>
                                    </div>
                                    <div>
                                        <div className="w-30 h-auto mb-2">
                                            <img className="rounded-md text-center font-bold" src={`https://media-assets.swiggy.com/swiggy/image/upload/q_auto,w_508,h_500,c_fill/${resDetails.card.info.imageId}`} alt={resDetails.card.info.name} />
                                        </div>
                                        <button onClick={() => handleaddItem(resDetails)} className="p-2 w-full rounded-md border-1 border-gray-300 bg-white  text-green-700 font-extrabold cursor-pointer">ADD</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RestaurantDetails
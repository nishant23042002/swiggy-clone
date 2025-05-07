import { useRef } from "react";
import RestaurantCard from "./RestaurantCard";
import { GrFormNextLink } from 'react-icons/gr'
import { GrFormPreviousLink } from 'react-icons/gr'
import { useState } from "react";
import { useEffect } from "react";


const items = [
    {
        alt: "restaurants curated for biryani",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        alt: "restaurant curated for cake",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png"
    },
    {
        alt: "restaurant curated for cutlet",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cutlet.png"
    },
    {
        alt: "restaurants curated for tea",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png"
    },
    {
        alt: "restaurant curated for chhole bhatoore",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole bhature.png"
    },
    {
        alt: "restaurants curated for coffee",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png"
    },
    {
        alt: "restaurant curated for chinese",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png"
    },
    {
        alt: "restaurants curated for veg",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png"
    },
    {
        alt: "restaurants curated for khichdi",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png"
    },
    {
        alt: "restaurant curated for dessert",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png"
    },
    {
        alt: "restaurant curated for lassi",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png"
    },
    {
        alt: "restaurant curated for poori",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png"
    },
    {
        alt: "restaurants curated for south indian",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png"
    },
    {
        alt: "restaurant curated for noodles",
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png"
    }
]


function Body() {
    const [restaurants, setRestaurants] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);
    const scrollRef = useRef();
    const scroll = (direction) => {
        setButtonClicked(direction)
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
        scrollRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
        });
    };
    
    useEffect(() => {
        fetch('http://localhost:3001/api/swiggy')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                const restaurantList = data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setRestaurants(restaurantList);
            })
    },[])
    return (
        <main>
            <div className="mx-46 p-3">
                <div className="flex justify-between mb-3">
                    <h1 className="text-xl font-extrabold">What's on your mind?</h1>
                    <div className="flex gap-3">
                        <button onClick={() => scroll("left")} className={`cursor-pointer rounded-full p-1 transition-colors ${buttonClicked === "left" ? "bg-gray-200" : "bg-gray-300"}`}>
                            <GrFormPreviousLink size={"25px"} color={`${buttonClicked === "left" ? "gray" : "black"}`} />
                        </button>
                        <button onClick={() => scroll("right")} className={`cursor-pointer rounded-full p-1 transition-colors ${buttonClicked === "right" ? "bg-gray-200" : "bg-gray-300"}`}>
                            <GrFormNextLink size={"25px"} color={`${buttonClicked === "right" ? "gray" : "black"}`} />
                        </button>
                    </div>
                </div>

                <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth gap-6 no-scrollbar mb-12">
                    {
                        items.map((item, idx) => (
                            <div key={idx} className="flex-none w-[144px] h-[180px] rounded-lg cursor-pointer">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded" />
                            </div>
                        ))
                    }
                </div>

                <div className="border-t-2 border-t-gray-100">
                    <div className="mt-12">
                        <RestaurantCard restaurants={restaurants}/>
                    </div>

                </div>
            </div>

        </main>
    );
}

export default Body
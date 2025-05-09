import { items } from "../utils/cuisineItems"
import { useState, useRef } from "react";
import { GrFormNextLink } from 'react-icons/gr'
import { GrFormPreviousLink } from 'react-icons/gr'

function Cuisine() {
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
    return (
        <>
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
        </>
    )
}

export default Cuisine


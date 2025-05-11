import { LuSearch } from "react-icons/lu";
import Cuisine from './Cuisine.jsx'

function Search() {

    return (
        <>
            <div className="w-full h-screen">
                <div>
                    <div className="flex justify-between items-center w-[45%] m-auto border-1 border-gray-300 p-3 rounded-sm my-12 ">
                        <input className="w-full outline-none font-bold" type="search" placeholder="Search for Restaurants" />
                        <LuSearch color="gray" size={"20px"} />
                    </div>
                </div>

                <div className="w-[60%] m-auto">
                    <Cuisine />
                </div>

                <div>
    
                </div>
            </div>
        </>
    )
}

export default Search
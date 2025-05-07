import { LuSearch } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

function Header() {
    return (
        <>
            <header className="sticky top-0 shadow-xl/8 z-50 bg-white">
                <div className="flex items-center p-4 justify-evenly">
                    <div className="flex items-center gap-12">
                        <img className="cursor-pointer hover:scale-125 duration-500" src="https://cdn-1.webcatalog.io/catalog/swiggy-dineout/swiggy-dineout-icon-unplated.png?v=1744088959607" height="47" width="47" alt="swiggy" />
                        <span className="cursor-pointer font-bold text-sm underline underline-offset-8 decoration-2 tracking-tighter hover:text-orange-600 duration-75">Other</span>
                    </div>
                    <ul className="flex gap-12 cursor-pointer">
                        <li className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75"><span><svg className="ppAwf" viewBox="0 0 20 20" height="20" width="20" fill="none"><rect x="2.46094" y="7.98145" width="15.0784" height="10.7765" rx="1.52523" stroke="#02060C" strokeOpacity="0.75" fill="none" strokeWidth="1.8" strokeLinejoin="round"></rect><path d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z" fill="#02060C" fillOpacity="0.75"></path></svg></span>Swiggy Corporate</li>
                        <li className="font-semibold  flex items-center gap-3 hover:text-orange-600 duration-75"><span><LuSearch size={20}/></span>Search</li>
                        <li className="font-semibold  flex items-center gap-3 hover:text-orange-600 duration-75"><span><BiSolidOffer size={20}/></span>Offers</li>
                        <li className="font-semibold  flex items-center gap-3 hover:text-orange-600 duration-75"><span><FiHelpCircle size={20}/></span>Help</li>
                        <li className="font-semibold  flex items-center gap-3 hover:text-orange-600 duration-75"><span><IoPersonOutline size={20}/></span>Sign In</li>
                        <li className="font-semibold  flex items-center gap-3 hover:text-orange-600 duration-75"><span><IoCartOutline size={20}/></span> Cart</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
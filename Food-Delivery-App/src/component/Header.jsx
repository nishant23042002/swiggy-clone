import { LuSearch } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import {Link} from 'react-router-dom'


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
                        <Link className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75" to='/'><span><IoMdHome size={20}/></span> Home</Link>
                        <Link className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75" to='/search'><span><LuSearch size={20}/></span> Search</Link>
                        <Link className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75" to="/offers"><span><BiSolidOffer size={20}/></span> Offers</Link>
                        <Link className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75" to='/help'> <span><FiHelpCircle size={20}/></span>Help</Link>
                        <Link className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75" to='/signin'><span><IoPersonOutline size={20}/></span> SignIn</Link>
                        <Link className="font-semibold text-md flex items-center gap-3 hover:text-orange-600 duration-75" to='/cart'><span><IoCartOutline size={20}/></span> Cart</Link>
                    </ul>
                    
                </div>
            </header>
        </>
    )
}

export default Header
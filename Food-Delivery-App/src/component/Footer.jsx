import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <>
            <footer className="p-6 w-full bg-gray-100">
                <div className="flex gap-3 justify-center">
                    <div>
                        <div className="flex items-center gap-3 mb-3 mr-27">
                            <img src="https://cdn-1.webcatalog.io/catalog/swiggy-dineout/swiggy-dineout-icon-unplated.png?v=1744088959607" height="47" width="47" alt="swiggy" />
                            <h1 className="font-extrabold text-orange-600 text-2xl">Swiggy</h1>
                        </div>
                        <p className="text-gray-500 font-semibold text-sm">© 2025  Swiggy Limited</p>
                    </div>
                    

                    <div className="mx-10">
                        <ul className="text-gray-500 font-semibold cursor-pointer">
                            <h1 className="font-semibold text-xl mb-2 text-black">Company</h1>
                            <li className="my-3">About Us</li>
                            <li className="my-3">Swiggy Corporate</li>
                            <li className="my-3">Careers</li>
                            <li className="my-3">Team</li>
                            <li className="my-3">Swiggy One</li>
                            <li className="my-3">Swiggy <br />Instamart</li>
                            <li className="my-3">Swiggy <br />Dineout</li>
                            <li className="my-3">Minis</li>
                            <li>Pyng</li>
                        </ul>
                    </div>

                    <div className="mx-10">
                        <ul className="text-gray-500 font-semibold mb-24 cursor-pointer">
                            <h1 className="font-semibold text-xl mb-2 text-black">Contact Us</h1>
                            <li className="my-3">Help & <br />Support</li>
                            <li className="my-3">Partner with <br />us</li>
                            <li className="my-3">Ride with us</li>
                        </ul>

                        <ul className="text-gray-500 font-semibold cursor-pointer">
                            <h1 className="font-semibold text-xl mb-2 text-black">Legal</h1>
                            <li className="my-3">Terms & <br />Conditions</li>
                            <li className="my-3">Cookie Policy</li>
                            <li className="my-3">Privacy Policy</li>
                            <li>Investor <br />Relations</li>
                        </ul>
                    </div>

                    <div className="mx-10">
                        <ul className="text-gray-500 font-semibold cursor-pointer">
                            <h1 className="font-semibold text-xl mb-2 text-black">Avaiable in :</h1>
                            <li className="my-3">Bangalore</li>
                            <li className="my-3">Gurgaon</li>
                            <li className="my-3">Delhi</li>
                            <li className="my-3">Hyderabad</li>
                            <li className="my-3">Mumbai</li>
                            <li className="my-3">Pune</li>
                        </ul>
                    </div>

                    <div className="mx-10">
                        <ul className="text-gray-500 font-semibold mb-34 cursor-pointer">
                            <h1 className="font-semibold text-xl mb-2 text-black">Life at Swiggy</h1>
                            <li className="my-3">Explore with Swiggy</li>
                            <li className="my-3">Swiggy News</li>
                            <li className="my-3">Snackables</li>
                        </ul>


                        <div>
                            <h1 className="font-semibold text-xl mb-3 text-black">Social Links</h1>
                            <ul className="flex gap-4 cursor-pointer">
                                <li><a href="#"><FaLinkedin /></a></li>
                                <li><a href="#"><FaInstagram /></a></li>
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaPinterest /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
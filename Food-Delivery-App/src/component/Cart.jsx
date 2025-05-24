import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { MdStars } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

function Cart() {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch()

    function handleaddItem(item) {
        dispatch(addItem(item));
    }
    function handleremoveItem(item) {
        dispatch(removeItem(item))
    }

    function handleClearCart() {
        dispatch(clearCart())
    }

    const cartItemQuantity = (itemId) => {
        const found = cartItems.find(item => item.card.info.id === itemId);
        return found ? found.quantity : 0;
    }

    return (
        <div className="w-full h-screen">
            <div className="flex items-center justify-center my-6">
                <button className="p-3 border-1 border-gray-300 rounded-xl font-bold text-red-600 cursor-pointer hover:bg-red-400 hover:text-white duration-300" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {
                cartItems.map((resDetails) => {
                    return (
                        <div className="flex justify-center items-center">
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
                                    <div className="relative flex items-center">
                                        {
                                            cartItemQuantity(resDetails.card.info.id) === 0 ? "" : (<div className="flex items-center justify-between w-full border border-gray-300 rounded-full overflow-hidden py-[6px]">
                                                <button onClick={() => handleremoveItem(resDetails)} className="bg-white text-green-700 px-3 py-1 text-lg font-bold cursor-pointer"><FaMinus /></button>
                                                <span className="px-3 py-1 text-sm font-bold text-green-700">{cartItemQuantity(resDetails.card.info.id)}</span>
                                                <button onClick={() => handleaddItem(resDetails)} className="bg-white text-green-700 px-3 py-1 text-lg font-bold cursor-pointer"><TiPlus /></button>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
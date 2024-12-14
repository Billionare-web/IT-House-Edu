import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Treyding() {
  return (
    <div className="px-24">
        <h1 className="mt-20">Treyding Kursi:</h1>
        <div className="flex mt-5 justify-between transition-all duration-500">
            <div className="border-2 rounded-xl px-32 pt-24 hover:pt-16 transition-all duration-500">
                <img src={'https://ithouseonline.uz/assets/brands/nurinvest.svg'} alt="" />
            </div>
            <div className="border-2 rounded-xl px-16 py-10">
                <h1 className="font-semibold"><span className="text-gray-400 hover:text-green-600">"Nur invest”</span> - bu halol aksiyalar bilan savdo qiluvchi <br />treyding kompaniyasi va treyding bo’yicha ta’lim beruvchi <br />kompaniya xisoblanadi. Biz savdoni <span className="text-gray-400 hover:text-green-600">Islom</span> moliyasiga <br />asoslangan xolda olib boramiz, ish jarayonimizdagi barcha <br />harakatlar “Islom taraqqiyot banki qoshida ochilgan AAOIFI <br />shariatlar standarti” asosida olib boriladi. Bundan tashqari <br /><span className="text-gray-400 hover:text-green-600">“Nur invest”</span> kompaniyasi “Halol aksiyalar savdosiga <br />asoslangan treyding” bo’yicha insonlarga ta’lim berish bilan <br />shug’ullanadi, ta’lim formati onlayn va oflayn tarzda olib <br />boriladi.</h1>
                <Link to={'https://tel:+998917882121'} className="flex items-center gap-5 bg-gray-400 rounded-lg py-2 mt-3 px-5 w-48 font-semibold hover:bg-green-800">Malumot olish<FaLink className="text-2xl" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Treyding
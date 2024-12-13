import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

function Footer() {
  return (
    <div className='bg-secondary mt-28 py-10 px-14'>
        <div className="flex gap-20">
        <h1 className='font-semibold'>IT'deki tüm kaliteli kurslar. IT'yi bizimle öğrenmek artık daha kolay, hemen başlayın.</h1>
        <div className="flex gap-32">
        <div className="column">
            <h1 className='font-semibold text-3xl'>Sayfalar</h1>
            <ul className='mt-7 font-semibold leading-8'>
                <li>Anasayfa</li>
                <li>Kurslar</li>
                <li>Treyding</li>
                <li>İletişim</li>
            </ul>
        </div>
        <div className="column">
            <h1 className='font-semibold text-3xl'>İletişim</h1>
            <ul className='mt-7 font-semibold leading-8'>
                <li className='flex gap-3 items-center'><FiPhoneCall className='text-xl' /> +998900352727</li>
                <li className='flex gap-3 items-center'><FaRegEnvelope className='text-xl' /> ithouseedu@gmail.com</li>
                <li className='flex gap-3 items-center leading-5'><SlLocationPin className='text-xl' /> Toshkent shahri Uchtepa tumani <br />OAZIS markazi 2-qavat</li>
            </ul>
        </div>
        </div>
        </div>
        <hr className='text-gray-300 my-10 w-ful h-1' />
        <h1 className='font-semibold'>© 2024. Tüm hakları saklıdır</h1>
    </div>
  )
}

export default Footer
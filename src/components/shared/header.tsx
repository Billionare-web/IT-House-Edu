import { IoSearchOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <div className='flex py-3 z-10 fixed px-16 -top-1 w-full backdrop-blur-2xl bg-background/70'>
      <div className="flex justify-between gap-80">
      <div className='flex items-center gap-12'>
        <div className="flex gap-2 items-center">
          <Link to={'/'} className="flex items-center gap-2">
          <img className='w-11 mt-2' src="https://ithouseonline.uz/logo.svg" alt="ithouseonline.uz/logo.svg" />
          <h1 className='font-bold text-2xl text-foreground'>IT HOUSE</h1>
          </Link>
        </div>
      <ul className='flex gap-3 items-center font-bold'>
        <li className='text-blue-600'>Bosh sahifa</li>
        <li className='hover:text-blue-600 transition'>Kurslar</li>
        <li className='hover:text-blue-600 transition'>Treyding</li>
        <li className='hover:text-blue-600 transition'>Aloqa</li>
      </ul>
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-secondary rounded-lg p-2"><LuLanguages /></div>
        <div className="bg-secondary rounded-lg p-2"><IoSearchOutline /></div>
        <div className="bg-secondary rounded-lg p-2"><FiBell /></div>
        <div className="bg-secondary rounded-lg p-2"><SlBasket /></div>
        <div><ModeToggle /></div>
        <Button className='bg-red-500 text-white py-3 px-9 rounded-3xl'>Kirish</Button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Header
import { IoSearchOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import America from "../../imgs/america.png";
import Uzbekistan from "../../imgs/Uzbekistan.png";
import Russia from "../../imgs/Russia.png";
import Turkiya from "../../imgs/Turkiya.png";

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
        <Link to={'/tr'} className='text-blue-600'>Bosh sahifa</Link>
        <Link to={'/tr/courses'} className='hover:text-blue-600 transition'>Kurslar</Link>
        <Link to={'/tr/treyding'} className='hover:text-blue-600 transition'>Treyding</Link>
        <Link to={'/tr/contacts'} className='hover:text-blue-600 transition'>Aloqa</Link>
      </ul>
      </div>
      <div className="flex gap-2 items-center">
        <Link to={'/'} className="rounded-lg p-2"><IoSearchOutline /></Link>
<DropdownMenu>
  <DropdownMenuTrigger><LuLanguages /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem><Link className="flex items-center gap-2" to={"/en"}><img className="w-5 h-3" src={America} alt="" />English</Link></DropdownMenuItem>
    <DropdownMenuItem><Link className="flex items-center gap-2" to={"/uz"}><img className="w-5 h-3" src={Uzbekistan} alt="" />O'zbekcha</Link></DropdownMenuItem>
    <DropdownMenuItem><Link className="flex items-center gap-2" to={"/ru"}><img className="w-5 h-3" src={Russia} alt="" />Русский</Link></DropdownMenuItem>
    <DropdownMenuItem><Link className="flex items-center gap-2" to={"/tr"}><img className="w-5 h-3" src={Turkiya} alt="" />Türkçe</Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        <Link to={'https://ithouseonline.uz/tr/sign-in?redirect_url=http%3A%2F%2Fithouseonline.uz%2Ftr%2Fprofile%2Fnotifications'} className="rounded-lg p-2"><FiBell /></Link>
        <Link to={'/'} className="rounded-lg p-2"><SlBasket /></Link>
        <div><ModeToggle /></div>
        <hr className="h-full w-1 bg-black" />
        <Button className='bg-[#E11D48] text-white py-6 px-9 rounded-3xl'>Kirish</Button>
      </div>
      </div>
    </div>
    <hr className="mx-32" />
    </div>
  )
}

export default Header
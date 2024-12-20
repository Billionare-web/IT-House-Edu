import { LuLanguages } from "react-icons/lu";
import { ModeToggle } from "../mode-toggle";
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
    <div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl px-16'>
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
        <div className='flex items-center gap-3'>
          <div className="flex gap-2 items-center">
            <Link to={'/uz'} className="flex items-center gap-2">
            <img className='w-[50px]' src="https://ithouseonline.uz/logo.svg" alt="ithouseonline.uz/logo.svg" />
            <h1 className='font-bold text-[27px] text-foreground'>IT HOUSE</h1>
            </Link>
          </div>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-7 w-[1px]"></div>
        <ul className='flex gap-3 items-center font-bold'>
          <Link to={'/uz'} className='font-medium transition-all hover:text-blue-500 hover:underline text-blue-500'>Bosh sahifa</Link>
          <Link to={'/uz/courses'} className='font-medium transition-all hover:text-blue-500 hover:underline'>Kurslar</Link>
          <Link to={'/uz/treyding'} className='font-medium transition-all hover:text-blue-500 hover:underline'>Treyding</Link>
          <Link to={'/uz/contacts'} className='font-medium transition-all hover:text-blue-500 hover:underline'>Aloqa</Link>
        </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div className="search-box">
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 btn-search" aria-label="search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search "><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
          </div>
  <DropdownMenu>
    <DropdownMenuTrigger><LuLanguages /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem><Link className="flex items-center gap-2" to={"/en"}><img className="w-5 h-3" src={America} alt="" />English</Link></DropdownMenuItem>
      <DropdownMenuItem><Link className="flex items-center gap-2" to={"/uz"}><img className="w-5 h-3" src={Uzbekistan} alt="" />O'zbekcha</Link></DropdownMenuItem>
      <DropdownMenuItem><Link className="flex items-center gap-2" to={"/ru"}><img className="w-5 h-3" src={Russia} alt="" />Русский</Link></DropdownMenuItem>
      <DropdownMenuItem><Link className="flex items-center gap-2" to={"/tr"}><img className="w-5 h-3" src={Turkiya} alt="" />Türkçe</Link></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
          <Link to={'https://ithouseonline.uz/uz/sign-in?redirect_url=http%3A%2F%2Fithouseonline.uz%2Fuz%2Fprofile%2Fnotifications'} aria-label="notification-btn" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell "><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg></Link>
          <Link to={'/uz/shopping/cart'} aria-label="shopping-cart" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart "><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></Link>
          <div><ModeToggle /></div>
          <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-10 w-[1px] my-3"></div>
          <Link to={'https://ithouseonline.uz/uz/sign-in?redirect_url=http%3A%2F%2Fithouseonline.uz%2Fuz%2Fprofile%2Fnotifications'} className='bg-[#E11D48] text-white py-3 px-9 rounded-3xl'>Kirish</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
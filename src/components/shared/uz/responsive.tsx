import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ModeToggle } from "../mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";
import America from "../../imgs/america.png";
import Uzbekistan from "../../imgs/Uzbekistan.png";
import Russia from "../../imgs/Russia.png";
import Turkiya from "../../imgs/Turkiya.png";

function Responsive() {
  return (
    <div>
      <div className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl px-6">
        <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-2" href="/">
              <img
                alt="logo"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className=" h-[50px] max-sm:w-8"
                src="/logo.svg"
              />
              <h1 className="font-space-grotesk text-3xl font-bold max-sm:text-[18px]">
                IT HOUSE
              </h1>
            </a>
            <div className="hidden items-center gap-3 border-l pl-2 md:flex">
              <a
                className="font-medium transition-all hover:text-blue-500 hover:underline text-blue-500"
                href="/uz"
              >
                Bosh sahifa
              </a>
              <a
                className="font-medium transition-all hover:text-blue-500 hover:underline"
                href="/uz/courses"
              >
                Kurslar
              </a>
              <a
                className="font-medium transition-all hover:text-blue-500 hover:underline"
                href="/uz/treyding"
              >
                Treyding
              </a>
              <Link
                className="font-medium transition-all hover:text-blue-500 hover:underline"
                to="/uz/contacts"
              >
                Aloqa
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 md:border-r md:pr-3">
              <div className="hidden gap-1 md:flex">
                <div className="search-box">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 btn-search"
                    aria-label="search-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-search "
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <LuLanguages />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link className="flex items-center gap-2" to={"/en"}>
                        <img className="w-5 h-3" src={America} alt="" />
                        English
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link className="flex items-center gap-2" to={"/uz"}>
                        <img className="w-5 h-3" src={Uzbekistan} alt="" />
                        O'zbekcha
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link className="flex items-center gap-2" to={"/ru"}>
                        <img className="w-5 h-3" src={Russia} alt="" />
                        Русский
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link className="flex items-center gap-2" to={"/tr"}>
                        <img className="w-5 h-3" src={Turkiya} alt="" />
                        Türkçe
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  to={"/uz/signin"}
                  aria-label="notification-btn"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-bell "
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                </Link>
                <Link
                  to={"/uz/shopping/cart"}
                  aria-label="shopping-cart"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-cart "
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </Link>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 md:hidden"
                aria-label="mobile-hamburger-menu"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rj2vebta:"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-align-center "
                >
                  <line x1="21" x2="3" y1="6" y2="6"></line>
                  <line x1="17" x2="7" y1="12" y2="12"></line>
                  <line x1="19" x2="5" y1="18" y2="18"></line>
                </svg>
              </button>
              <div>
                <ModeToggle />
              </div>
            </div>
            <div className="ml-500">
              <button className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-full hidden md:flex text-white bg-red-600">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </button>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-10 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-log-in "
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" x2="3" y1="12" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsive;

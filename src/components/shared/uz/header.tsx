import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NAvbar.module.css";
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
import America from "../../imgs/america.png";
import Uzbekistan from "../../imgs/Uzbekistan.png";
import Russia from "../../imgs/Russia.png";
import Turkiya from "../../imgs/Turkiya.png";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header
        data-aos-duration="1000"
        data-aos="fade-down"
        className="sm:mx-20 border-b"
      >
        <nav className="pt-5 pb-2 relative flex justify-between items-center w-full">
          <div className="flex gap-5">
            <Link to="/uz" className="sm:border-r px-3">
              <a className="flex items-center gap-2" href="/uz">
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
            </Link>
            <ul
              className={`${styles.navMenu} ${isActive ? styles.active : ""} mt-2 flex gap-7 max-sm:gap-0 sm:relative -left-24`}
            >
              <li onClick={removeActive} className="max-sm:m-5 gap-1">
                <Link to={"/uz"} className={`${styles.navLink} sm:hidden`}>
                  <Link to="/uz" className="ml-5">
                    <a className="flex items-center gap-2" href="/uz">
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
                  </Link>
                </Link>
              </li>
              <hr className="mx-5" />
              <li onClick={removeActive}>
                <Link to={"/uz"} className={`${styles.navLink} flex gap-2`}>
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
                    className="lucide lucide-home size-5 sm:hidden"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Bosh Sahifa
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link
                  to={"/uz/courses"}
                  className={`${styles.navLink} flex gap-2`}
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
                    className="lucide lucide-list-video size-5 sm:hidden"
                  >
                    <path d="M12 12H3"></path>
                    <path d="M16 6H3"></path>
                    <path d="M12 18H3"></path>
                    <path d="m16 12 5 3-5 3v-6Z"></path>
                  </svg>
                  Kurslar
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link
                  to={"/uz/treyding"}
                  className={`${styles.navLink} flex gap-2`}
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
                    className="sm:hidden lucide lucide-rss size-5"
                  >
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="1"></circle>
                  </svg>
                  Treyding
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link
                  to={"/uz/contacts"}
                  className={`${styles.navLink} flex gap-2`}
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
                    className="sm:hidden lucide lucide-contact size-5"
                  >
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <circle cx="12" cy="10" r="2"></circle>
                    <line x1="8" x2="8" y1="2" y2="4"></line>
                    <line x1="16" x2="16" y1="2" y2="4"></line>
                  </svg>
                  Aloqa
                </Link>
              </li>
              <div className="sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger className="gap-2 items-center inline-flex justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground size-10 w-full bg-red-600 hover:bg-primary/80 h-12">
                    <LuLanguages /> <span>O'zbekcha</span>
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
              </div>
              <div className="flex mx-auto my-4">
                <div className="flex sm:hidden">
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
                </div>
                <div className="sm:hidden">
                  <ModeToggle />
                </div>
              </div>
            </ul>
          </div>
          <div className="flex">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 sm:border-r sm:pr-3">
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
                <div
                  className={`${styles.hamburger} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={toggleActiveClass}
                >
                  <span className={`${styles.bar}`}></span>
                  <span className={`${styles.bar}`}></span>
                  <span className={`${styles.bar}`}></span>
                </div>
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
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

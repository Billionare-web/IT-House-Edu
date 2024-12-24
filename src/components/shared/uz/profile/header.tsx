import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuLanguages } from "react-icons/lu";
import { Link } from "react-router-dom";
import America from "../../../imgs/america.png";
import Uzbekistan from "../../../imgs/Uzbekistan.png";
import Russia from "../../../imgs/Russia.png";
import Turkiya from "../../../imgs/Turkiya.png";
import { ModeToggle } from "../../mode-toggle";

function Header() {
  return (
    <div className="flex gap-2 items-center px-5 z-10 justify-between border-b py-3">
      <Link to={"/uz"} className="flex items-center gap-2">
        <img
          className="w-[50px] max-sm:w-7"
          src="https://ithouseonline.uz/logo.svg"
          alt="ithouseonline.uz/logo.svg"
        />
        <h1 className="font-bold text-[27px] text-foreground max-sm:text-lg">IT HOUSE</h1>
      </Link>
      <div className="flex items-center gap-8 pr-12">
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
      <ModeToggle />
      </div>

    </div>
  );
}

export default Header;

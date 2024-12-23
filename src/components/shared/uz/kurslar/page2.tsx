import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Phyton from "../../../imgs/phyton.png";
import InteryerDizayn from "../../../imgs/InteryerDizayn.png";

function Page2() {
  return (
    <div>
      <ul className="flex py-3 px-32 gap-8 bg-gradient-to-r from-secondary bg-[#E11D48] h-15 mt-20 max-sm:px-7">
        <Link to={"/uz"}>Bosh sahifa</Link>
        <li className="list-disc">Barcha Kurslar</li>
      </ul>
      <h1 className="text-4xl font-semibold px-32 mt-10 max-sm:px-7">
        Barcha Kurslar
      </h1>
      <p className="font-semibold px-32 max-sm:px-7">
        Siz o'rganish va rivojlanish uchun murakkab kurslar taklif etamiz.
      </p>
      <div className="flex items-center justify-between mt-10 px-32 max-sm:px-7 flex-wrap">
        <h1 className="flex max-sm:px-auto">
          Ko'rsatilmoqda <span className="font-semibold">8</span> jami natijalar
        </h1>
        <div className="flex gap-2 items-center max-sm:py-3 flex-wrap">
          <div className="flex gap-2 items-center">
            <h1>Tartiblash Bo'yicha:</h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">
                Filtr
                <FaAngleDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Hammasi</DropdownMenuItem>
                <DropdownMenuItem>Eng yangi</DropdownMenuItem>
                <DropdownMenuItem>Eng past narx</DropdownMenuItem>
                <DropdownMenuItem>Eng yuqori narx</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">
                Daraja
                <FaAngleDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Hammasi</DropdownMenuItem>
                <DropdownMenuItem>Boshlang'ich</DropdownMenuItem>
                <DropdownMenuItem>O'rta</DropdownMenuItem>
                <DropdownMenuItem>Daraja</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">
                Til
                <FaAngleDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Uzbek</DropdownMenuItem>
                <DropdownMenuItem>Russian</DropdownMenuItem>
                <DropdownMenuItem>Turkish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <hr className="mx-32 mt-7 max-sm:mx-7" />
      <div className="flex px-32 justify-between items-center max-sm:flex-col max-sm:px-7 max-sm:gap-5 mt-5">
        <div className="border-2 rounded-2xl max-sm:w-full">
          <img
            className="relative w-full h-72 rounded-xl max-sm:h-56"
            src={Phyton}
            alt=""
          />
          <h1 className="font-bold text-3xl px-3 max-sm:text-xl">
            Phyton
          </h1>
          <hr className="my-3 mx-3 bg-foreground" />
          <div className="flex justify-between max-sm:text-xs">
            <h1 className="font-semibold px-3 pt-1 pb-5">
              Django, Postgresql,{" "}
              <span className="max-sm:hidden">Djangorest framework, JS,</span>
              ...
            </h1>
            <h1 className="text-gray-500 text-xs font-semibold">
              <s>
                1,200,000
                <br />
                so'm
              </s>
            </h1>
            <h1 className="font-semibold px-3">
              1,000,000
              <br />
              so'm
            </h1>
          </div>
        </div>
        <div className="border-2 rounded-2xl max-sm:w-full">
          <img
            className="relative w-full h-72 max-sm:h-56"
            src={InteryerDizayn}
            alt=""
          />
          <h1 className="font-bold text-2xl px-3 mr-20 py-1 max-sm:text-[14px]">
            Interyer va Eksteryer dizayn
          </h1>
          <hr className="my-3 mx-3" />
          <div className="flex justify-end pb-5 max-sm:text-[12px]">
            <h1 className="text-gray-500 text-xs font-semibold">
              <s>2,500,000 so'm</s>
            </h1>
            <h1 className="font-semibold px-3">1,750,000 so'm</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#E11D48] text-center mt-5 px-5 py-2 w-40 rounded-xl mx-[585px] max-sm:mx-auto">
        <Link to={"/uz/courses"}>Prev</Link>
      </div>
    </div>
  );
}

export default Page2;

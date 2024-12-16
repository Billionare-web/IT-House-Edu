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
      <ul className="flex py-3 px-32 gap-8 bg-gradient-to-r from-secondary to-primary h-15 mt-20">
        <Link to={"/uz"}>Bosh sahifa</Link>
        <li className="list-disc">Barcha Kurslar</li>
      </ul>
      <h1 className="text-4xl font-semibold px-32 mt-10">Barcha Kurslar</h1>
      <p className="font-semibold mx-32">
        Siz o'rganish va rivojlanish uchun murakkab kurslar taklif <br />
        etamiz.
      </p>
      <div className="flex items-center justify-between mt-10 px-32">
        <h1>
          Ko'rsatilmoqda <span className="font-semibold">8</span> jami natijalar
        </h1>
        <div className="flex gap-2 items-center">
          <h1>Tartiblash Bo'yicha:</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="border border-input bg-background py-2 px-3 rounded-xl flex items-center gap-10">
              Filtr <FaAngleDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Hammasi</DropdownMenuItem>
              <DropdownMenuItem>Eng yangi</DropdownMenuItem>
              <DropdownMenuItem>Eng past narx</DropdownMenuItem>
              <DropdownMenuItem>Eng yuqori narx</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
      <div className="flex px-32 justify-between items-center">
        <div className="border-2 rounded-2xl">
          <img
            className="relative w-full h-72 -top-1"
            src={InteryerDizayn}
            alt=""
          />
          <h1 className="font-bold text-2xl px-3 mr-44 py-1">
            Interyer va Eksteryer dizayn
          </h1>
          <hr className="my-3 mx-3" />
          <div className="flex justify-end pb-5">
            <h1 className="text-gray-500 text-xs font-semibold">
              <s>2,500,000 so'm</s>
            </h1>
            <h1 className="font-semibold px-3">1,750,000 so'm</h1>
          </div>
        </div>
        <div className="border-2 rounded-2xl">
          <img
            className="relative w-full h-72 rounded-xl"
            src={Phyton}
            alt=""
          />
          <h1 className="font-bold text-3xl px-3">Phyton</h1>
          <hr className="my-3 mx-3" />
          <div className="flex justify-between">
            <h1 className="font-semibold px-3 pt-1 pb-5 mr-4">
              Django, Postgresql, Djangorest framework, JS ,...
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
      </div>
      <div className="bg-[#E11D48] text-center mt-5 px-5 py-2 w-40 rounded-xl ml-[585px]"><Link to={'/uz/courses'}>Prev</Link></div>
    </div>
  );
}

export default Page2;
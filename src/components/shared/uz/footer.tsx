import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-dropdown-menu";

function Footer() {
  return (
    <div className="bg-secondary mt-28 py-10 px-14">
      <div className="flex gap-20 max-sm:flex-col">
        <h1 className="font-semibold">
          IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish
          endi yanada <br />
          osonroq shunchaki boshlang.
        </h1>
        <div className="flex gap-20 max-sm:flex-col">
          <div className="column">
            <h1 className="font-semibold text-3xl">Sahifalar</h1>
            <ul className="mt-7 font-semibold leading-8">
              <li>
                <Link
                  className="hover:text-blue-600 transition decoration-[1px] hover:underline"
                  to={"/uz"}
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition decoration-[1px] hover:underline"
                  to={"/uz/courses"}
                >
                  Kurslar
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition decoration-[1px] hover:underline"
                  to={"/uz/treyding"}
                >
                  Treyding
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-600 transition decoration-[1px] hover:underline"
                  to={"/uz/contacts"}
                >
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h1 className="font-semibold text-3xl">Aloqa</h1>
            <ul className="mt-7 font-semibold leading-8">
              <li>
                <a
                  className="flex gap-3 items-center text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300"
                  href="tel:+998900352727"
                >
                  <FiPhoneCall className="text-xl" /> +998 (90) 035 27 27
                </a>
              </li>
              {/* <li className='flex gap-3 items-center'><FaRegEnvelope className='text-xl' /> ithouseedu@gmail.com</li> */}
              <li>
                <a
                  className="mt-3 flex items-center gap-3 text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300"
                  href="mailto:ithouse@gmail.com"
                >
                  <FaRegEnvelope className="text-xl" /> ithouseedu@gmail.com
                </a>
              </li>
              <li className="mt-3 flex gap-3 items-center leading-5">
                <SlLocationPin className="text-xl" /> Toshkent shahri Uchtepa
                tumani <br />
                OAZIS markazi 2-qavat
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="mt-10 mb-5 h-[1px] w-full bg-zinc-700" />
      <h1 className="font-semibold">© 2024. Barcha huquqlar himoyalangan</h1>
    </div>
  );
}

export default Footer;

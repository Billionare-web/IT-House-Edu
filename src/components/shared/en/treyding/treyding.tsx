import MsOffice from "../../../imgs/ms office.png";
import Phyton from "../../../imgs/phyton.png";
import InteryerDizayn from "../../../imgs/InteryerDizayn.png";
import KompyuterSavodxonligi from "../../../imgs/kompyuter savodxonligi.png";
import WebDasturlash from "../../../imgs/web dasturlash.png";
import English from "../../../imgs/Engish.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

function Treyding() {
  return (
    <div className="">
      <div className="container px-12 pt-20">
        <h1 className="mb-8 font-roboto text-3xl font-semibold">
          Trayding Course :
        </h1>
        <div>
          <div className=" group grid grid-cols-2 gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm group flex flex-col items-center justify-center shadow-green-500 group-hover:shadow-2xl">
              <img
                alt="nurinvest"
                loading="lazy"
                width="350"
                height="350"
                decoding="async"
                data-nimg="1"
                className="grayscale duration-500 group-hover:-translate-y-7 group-hover:grayscale-0 max-sm:w-8"
                src={"https://ithouseonline.uz/assets/brands/nurinvest.svg"}
              />
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xl p-12 shadow-green-500 group-hover:shadow-2xl">
            <p className="font-space-grotesque">
                <b className="text-xl font-medium text-green-600 grayscale group-hover:grayscale-0">
                  "Nur Invest"
                </b>{" "}
                - this is a trading company that trades in honest shares
                and trading training company. We
                trade{" "}
                <span className="font-bold text-green-600 grayscale group-hover:grayscale-0">
                  {" "}
                  Islam{" "}
                </span>
                We will conduct it based on the finance, in our work process
                All activities are opened under the Islamic Development Bank
                AAOIFI is conducted on the basis of Sharia standard. From this
                except{" "}
                <b className="text-green-600 grayscale group-hover:grayscale-0">
                  "Nur Invest"
                </b>{" "}
                company "Trading based on honest share trading"
                is engaged in teaching people about education
                format is conducted online and offline.
              </p>
              <a href="tel: +998917882121">
                <button className="items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-9 rounded-md px-3 mt-2 flex gap-4 bg-green-500 text-lg grayscale hover:animate-pulse hover:bg-green-700 group-hover:grayscale-0">
                  <span>Malumot olish</span>
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
                    className="lucide lucide-link "
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-6 mt-12" />
      <h1 className="px-6 mt-5 text-3xl font-semibold">You May Like</h1>
<Carousel className="mt-5 px-5">
  <CarouselContent>
    <CarouselItem className="basis-1/3">
      <div className="border-2 rounded-2xl">
            <img className="relative w-full h-72 -top-1" src={InteryerDizayn} alt="" />
            <h1 className="font-bold text-2xl px-3 mr-20 py-1">Interyer va Eksteryer dizayn</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-end pb-5">
              <h1 className="text-gray-500 text-xs font-semibold">
                <s>
                  2,500,000 so'm
                </s>
              </h1>
              <h1 className="font-semibold px-3">
                1,750,000 so'm
              </h1>
            </div>
      </div>
    </CarouselItem>
    <CarouselItem className="basis-1/3">
    <div className="border-2 rounded-2xl">
            <img className="relative w-full h-72 -top-1" src={Phyton} alt="" />
            <h1 className="font-bold text-3xl px-3">Phyton</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-between">
              <h1 className="font-semibold px-3 pt-1 pb-5">
                Django, Postgresql, Django rest...
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
    </CarouselItem>
    <CarouselItem className="basis-1/3">
    <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={MsOffice} alt="" />
            <h1 className="font-bold text-3xl mx-2">Office dasturlari</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-between">
              <h1 className="font-semibold mx-3 pt-1 pb-5">
                Ms Word, Ms Exsel...
              </h1>
              <div className="flex">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>1,200,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">1,000,000 so'm</h1>
              </div>
            </div>
          </div>
    </CarouselItem>
    <CarouselItem className="basis-1/3">
    <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={KompyuterSavodxonligi} alt="" />
            <h1 className="font-bold text-3xl mx-2">Kompyuter savodxonligi</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-between">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Kompyuterni anglaymiz</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>0 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3">500,000 so'm</h1>
              </div>
            </div>
          </div>
    </CarouselItem>
    <CarouselItem className="basis-1/3">
    <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={English} alt="" />
            <h1 className="font-bold text-3xl mx-2">English & IT</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-between">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Grammar & Speaking</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>0 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">0 so'm</h1>
              </div>
            </div>
          </div>
    </CarouselItem>
    <CarouselItem className="basis-1/3">
    <div className="border-2 rounded-2xl">
            <img className="w-full h-72" src={WebDasturlash} alt="" />
            <h1 className="font-bold text-3xl mx-2">Web Dasturlash</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-between">
              <h1 className="font-semibold mx-3 pt-1 pb-5">Frontend (React JS)</h1>
              <div className="flex gap-2">
                <h1 className="text-gray-500 text-xs font-semibold">
                  <s>3,000,000 so'm</s>
                </h1>
                <h1 className="font-semibold mx-3 my-2">2,500,000 so'm</h1>
              </div>
            </div>
          </div>
    </CarouselItem>
  </CarouselContent>
</Carousel>
    </div>
  );
}

export default Treyding;

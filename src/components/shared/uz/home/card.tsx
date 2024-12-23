import Phyton from "../../../imgs/phyton.png";
import MsOffice from "../../../imgs/ms office.png";
import KompyuterSavodxonligi from "../../../imgs/kompyuter savodxonligi.png";
import WebDasturlash from "../../../imgs/web dasturlash.png";
import English from "../../../imgs/Engish.png";
import InteryerDizayn from "../../../imgs/InteryerDizayn.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/carousel";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="mt-3">
      <div className="flex justify-center mt-14">
        <div className="flex items-center gap-28 max-sm:flex-col max-sm:gap-5 max-sm:mx-7">
          <div className="column sm:px-20">
            <h1 className="font-bold sm:text-3xl">
              Mashhur Kurslarni Ko'rib Chiqing
            </h1>
            <h4 className="font-semibold text-gray-500 max-sm:text-[15px]">
              Hozirgi kunda talab yuqori bo'lgan IT kurslari.
            </h4>
          </div>
          <div className="flex max-sm:flex-col gap-1 max-sm:w-full max-sm:px-1 max-sm:bg-red-600 rounded-xl py-2">
            <Link
              to={"/uz/courses"}
              className="bg-secondary px-4 py-2 rounded-3xl font-semibold ml-1"
            >
              Hammasi
            </Link>
            <Link
              to={"/uz"}
              className="bg-secondary px-4 py-2 rounded-3xl font-semibold ml-1"
            >
              Eng yangi
            </Link>
            <Link
              to={"/uz"}
              className="bg-secondary px-4 py-2 rounded-3xl font-semibold ml-1"
            >
              Eng past narx
            </Link>
            <Link
              to={"/uz"}
              className="bg-secondary px-4 py-2 rounded-3xl font-semibold ml-1"
            >
              Eng yuqori narx
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:px-32 max-sm:px-9">
        <Carousel className="mt-5">
          <CarouselContent className="max-sm:flex-col max-sm:gap-5">
            <CarouselItem className="basis-1/2">
              <div className="border-2 rounded-2xl">
                <img
                  className="relative w-full h-72 max-sm:h-56"
                  src={InteryerDizayn}
                  alt=""
                />
                <h1 className="font-bold text-2xl px-3 mr-20 py-1 max-sm:text-lg max-sm:text-center">
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
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="border-2 rounded-2xl">
                <img
                  className="relative w-full h-72 rounded-xl max-sm:h-56"
                  src={Phyton}
                  alt=""
                />
                <h1 className="font-bold text-3xl px-3 max-sm:text-xl max-sm:text-center">
                  Phyton
                </h1>
                <hr className="my-3 mx-3 bg-foreground" />
                <div className="flex justify-between max-sm:text-xs">
                  <h1 className="font-semibold px-3 pt-1 pb-5">
                    Django, Postgresql, <span className="max-sm:hidden">Djangorest framework, JS,</span>
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
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="border-2 rounded-2xl">
                <img className="w-full h-72 max-sm:h-56" src={MsOffice} alt="" />
                <h1 className="font-bold text-3xl mx-2 max-sm:text-lg max-sm:text-center">Office dasturlari</h1>
                <hr className="my-3 mx-3 " />
                <div className="flex max-sm:text-xs">
                  <h1 className="font-semibold mx-3 pt-1 pb-5">
                    Ms Word, Ms Exsel <span className="max-sm:hidden">& Ms PowerPoint</span>
                  </h1>
                  <div className="flex">
                    <h1 className="text-gray-500 text-xs font-semibold">
                      <s>1,200,000 so'm</s>
                    </h1>
                    <h1 className="font-semibold mr-3">1,000,000 so'm</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="border-2 rounded-2xl">
                <img
                  className="w-full h-72 max-sm:h-56"
                  src={KompyuterSavodxonligi}
                  alt=""
                />
                <h1 className="font-bold text-3xl mx-2 max-sm:text-lg max-sm:text-center">
                  Kompyuter savodxonligi
                </h1>
                <hr className="my-3 mx-3" />
                <div className="flex justify-between max-sm:text-xs">
                  <h1 className="font-semibold mx-3 pt-1 pb-5">
                    Kompyuterni anglaymiz
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-gray-500 text-xs font-semibold">
                      <s>0 so'm</s>
                    </h1>
                    <h1 className="font-semibold mx-3">500,000 so'm</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="border-2 rounded-2xl">
                <img className="w-full h-72 max-sm:h-56" src={English} alt="" />
                <h1 className="font-bold text-3xl mx-2 max-sm:text-lg max-sm:text-center">English & IT</h1>
                <hr className="my-3 mx-3" />
                <div className="flex justify-between max-sm:text-xs">
                  <h1 className="font-semibold mx-3 pt-1 pb-5">
                    Grammar & Speaking
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-gray-500 text-xs font-semibold">
                      <s>0 so'm</s>
                    </h1>
                    <h1 className="font-semibold mx-3 my-2">0 so'm</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <div className="border-2 rounded-2xl">
                <img className="w-full h-72 max-sm:h-56" src={WebDasturlash} alt="" />
                <h1 className="font-bold text-3xl mx-2 max-sm:text-lg max-sm:text-center">Web Dasturlash</h1>
                <hr className="my-3 mx-3" />
                <div className="flex justify-between max-sm:text-xs">
                  <h1 className="font-semibold mx-3 pt-1 pb-5">
                    Frontend (React <span className="max-sm:hidden">JS) </span>
                  </h1>
                  <div className="flex gap-2">
                    <h1 className="text-gray-500 text-xs font-semibold">
                      <s>3,000,000 so'm</s>
                    </h1>
                    <h1 className="font-semibold mr-3 my-2">2,500,000 so'm</h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="max-sm:hidden" />
          <CarouselNext className="max-sm:hidden" />
        </Carousel>
      </div>
    </div>
  );
}

export default Card;

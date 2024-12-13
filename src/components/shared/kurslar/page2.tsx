import Phyton from "../../imgs/phyton.png";

function Page2() {
  return (
    <div>
    <div className="border-2 rounded-2xl">
            <img className="relative w-full h-72 -top-1" src={Phyton} alt="" />
            <h1 className="font-bold text-3xl px-3">Phyton</h1>
            <hr className="my-3 mx-3" />
            <div className="flex justify-between">
              <h1 className="font-semibold px-3 pt-1 pb-5">
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
  )
}

export default Page2
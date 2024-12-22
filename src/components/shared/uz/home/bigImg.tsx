import { Link } from "react-router-dom"
import BigImg2 from "../../../imgs/hero.png"

function BigImg() {
  return (
    <div>
    <div className="flex px-32 mt-[150px] max-[380px]:text-center">
      <div className="flex justify-between gap-10 max-[380px]:flex max-[380px]:flex-col">
        <div className="flex-col">
          <h1 className='text-5xl font-bold max-[380px]:font-space-grotesk max-[380px]:text-2xl'>Kelajak kasblarini o`rganishni hoziroq <span className='text-blue-600'>biz bilan boshlang.</span></h1>
          <h4 className='text-gray-400 mb-8 mt-[10px]'>IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish endi <br />yanada osonroq shunchaki boshlang.</h4>
          <Link to={"/uz/courses"} className='border-[1px] text-sm rounded-full pt-3 pb-4 px-7 font-semibold hover:bg-secondary'>Kurslarni toping</Link>
        </div>
        <img className="w-[500px]" src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
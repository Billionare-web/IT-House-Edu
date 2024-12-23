import { Link } from "react-router-dom"
import BigImg2 from "../../../imgs/hero.png"

function BigImg() {
  return (
    <div>
    <div className="flex sm:px-32 mt-[150px] max-sm:text-center">
      <div className="flex justify-between gap-10 max-sm:flex max-sm:flex-col">
        <div className="flex-col">
          <h1 className='text-5xl font-bold max-sm:font-space-grotesk max-sm:text-2xl'>Kelajak kasblarini o`rganishni hoziroq <span className='text-blue-600'>biz bilan boshlang.</span></h1>
          <h4 className='text-gray-400 mb-8 mt-[10px]'>IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish endi yanada osonroq shunchaki boshlang.</h4>
          <Link to={"/uz/courses"} className='border-[1px] text-sm rounded-full pt-3 pb-4 px-7 font-semibold hover:bg-secondary'>Kurslarni toping</Link>
        </div>
        <img className="sm:w-[500px] max-sm:w-80 mx-7" src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
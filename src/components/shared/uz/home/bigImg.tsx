import { Link } from "react-router-dom"
import BigImg2 from "../../../hero.png"

function BigImg() {
  return (
    <div>
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-5xl font-bold'>Kelajak kasblarini <br />o`rganishni hoziroq <span className='text-blue-600'>biz <br />bilan boshlang.</span></h1>
          <h4 className='text-gray-400 mb-8'>IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish endi <br />yanada osonroq shunchaki boshlang.</h4>
          <Link to={"/uz/courses"} className='border-2 rounded-full py-3 px-7 hover:bg-transparent'>Kurslarni toping</Link>
        </div>
        <img src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
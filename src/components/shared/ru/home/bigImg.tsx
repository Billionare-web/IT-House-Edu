import { Link } from "react-router-dom"
import BigImg2 from "../../../hero.png"

function BigImg() {
  return (
    <div>
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-5xl font-bold'>Изучайте будущие <br />профессии прямо <br />сейчас <span className='text-blue-600'>начинай с нас</span></h1>
          <h4 className='text-gray-400 mt-3'>Все качественные курсы по ИТ. Изучать ИТ с нами теперь проще, <br />просто начните.</h4>
          <Link to={"/courses"} className='border-2 bg-secondary rounded-full py-3 px-7 '>найти курсы</Link>
        </div>
        <img src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
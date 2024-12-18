import { Link } from "react-router-dom"
import BigImg2 from "../../../imgs/hero.png"

function BigImg() {
  return (
    <div>
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-5xl font-bold'>Şimdi bizimle <br />gelecekteki kariyerleri <br /><span className='text-blue-600'>öğrenmeye başlayın</span></h1>
          <h4 className='text-gray-400 mt-3'>IT'deki tüm kaliteli kurslar. IT'yi bizimle öğrenmek artık daha kolay, hemen <br />başlayın.</h4>
          <Link to={"/courses"} className='border-2 bg-secondary rounded-full py-3 px-7 '>Kursları Bul</Link>
        </div>
        <img src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
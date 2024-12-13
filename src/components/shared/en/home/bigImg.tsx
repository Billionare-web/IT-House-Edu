import { Link } from "react-router-dom"
import BigImg2 from "../../../hero.png"

function BigImg() {
  return (
    <div>
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-5xl font-bold'>Study future professions now <span className="text-blue-600">start with us</span></h1>
          <h4 className='text-gray-400 mt-3'>All quality courses in IT. Learning IT with us is now easier, just get started.</h4>
          <Link to={"/courses"} className='border-2 bg-secondary rounded-full py-3 px-7 '>Find Courses</Link>
        </div>
        <img src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
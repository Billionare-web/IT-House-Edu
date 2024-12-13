import Ustozlar from "../../../imgs/Ustozlar.png";
import Mutaxassislar from "../../../imgs/Mutaxassislar.png";
import Moslashuvchan from "../../../imgs/Moslashuvchan.png";
import Sertifikat from "../../../imgs/Sertifikat.png";

function Platform() {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold mt-10'>Start your Learning Journey Today!</h1>
        <h3 className='text-center text-gray-500'>Our platform is designed to help you learn and grow. We offer a wide range of courses to help you achieve your goals. Whether you are looking to <br />learn a new skill, or to improve your career, we have the right course for you.</h3>
        <div className="flex justify-center gap-5 mt-7">
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Ustozlar} alt="" />
                <h1 className="text-center font-semibold">Learn with Exprerts</h1>
                <h2 className="text-center">Our platform is designed to help <br />you learn and grow.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Mutaxassislar} alt="" />
                <h1 className="text-center font-semibold">Learn Anything</h1>
                <h2 className="text-center">Whether you are looking to learn a <br />new skill.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Moslashuvchan} alt="" />
                <h1 className="text-center font-semibold">Flexible Learning</h1>
                <h2 className="text-center">Flexible learning at your own <br />pace.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Sertifikat} alt="" />
                <h1 className="text-center font-semibold">Industrial Standard</h1>
                <h2 className="text-center">Our courses are designed to meet the standards.</h2>
            </div>
        </div>
    </div>
  )
}

export default Platform
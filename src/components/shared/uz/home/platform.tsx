import Ustozlar from "../../../imgs/Ustozlar.png";
import Mutaxassislar from "../../../imgs/Mutaxassislar.png";
import Moslashuvchan from "../../../imgs/Moslashuvchan.png";
import Sertifikat from "../../../imgs/Sertifikat.png";

function Platform() {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold mt-10'>Biz bilan nimalarga ega bo'lasiz!</h1>
        <h3 className='text-center text-gray-500'>Bizning platformamiz sizga o'rganish va o'sishda yordam bera olish uchun mo'ljallangan. Bizning maqsadimiz sizning maqsadlaringizga <br />erishishga yordam berish.</h3>
        <div className="flex justify-center gap-5 mt-7">
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Ustozlar} alt="" />
                <h1 className="text-center font-semibold">Doimiy o'qituvchi...</h1>
                <h2 className="text-center">Bizning platformamiz sizga <br />o'rganish va o'sishda yordam ber...</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Mutaxassislar} alt="" />
                <h1 className="text-center font-semibold">Doimiy o'qituvchi...</h1>
                <h2 className="text-center">Bizning platformamiz sizga <br />o'rganish va o'sishda yordam ber...</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Moslashuvchan} alt="" />
                <h1 className="text-center font-semibold">Doimiy o'qituvchi...</h1>
                <h2 className="text-center">Bizning platformamiz sizga <br />o'rganish va o'sishda yordam ber...</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Sertifikat} alt="" />
                <h1 className="text-center font-semibold">Doimiy o'qituvchi...</h1>
                <h2 className="text-center">Bizning platformamiz sizga <br />o'rganish va o'sishda yordam ber...</h2>
            </div>
        </div>
    </div>
  )
}

export default Platform
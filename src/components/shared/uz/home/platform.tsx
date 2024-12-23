import Ustozlar from "../../../imgs/Ustozlar.png";
import Mutaxassislar from "../../../imgs/Mutaxassislar.png";
import Moslashuvchan from "../../../imgs/Moslashuvchan.png";
import Sertifikat from "../../../imgs/Sertifikat.png";

function Platform() {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold mt-40'>Biz bilan nimalarga ega bo'lasiz!</h1>
        <h3 className='text-center text-gray-500'>Bizning platformamiz sizga o'rganish va o'sishda yordam bera olish uchun mo'ljallangan. Bizning maqsadimiz sizning maqsadlaringizga <br />erishishga yordam berish.</h3>
        <div className="flex justify-center gap-5 mt-7 max-sm:flex-col px-10">
            <div className="bg-secondary rounded-xl p-5 w-full">
                <img className="ml-[80px] max-sm:ml-20" src={Ustozlar} alt="" />
                <h1 className="text-center font-semibold mt-2">Doimiy o'qituvchi <span className="max-sm:hidden">...</span><span className="sm:hidden">nazorati</span></h1>
                <h2 className="text-center">Bizning platformamiz sizga o'rganish va o'sishda yordam ber<span className="max-sm:hidden"> ...</span><span className="sm:hidden">a </span><span className="sm:hidden">olish uchun <span className="sm:hidden">...</span> <span className="max-sm:hidden">mo'ljallangan.</span></span></h2>
            </div>
            <div className="bg-secondary rounded-xl p-5 w-full">
                <img className="ml-[83px]" src={Mutaxassislar} alt="" />
                <h1 className="text-center font-semibold mt-2">Kuchli mutaxasislar <span className="max-sm:hidden">...</span> <span className="sm:hidden">ko'magi</span></h1>
                <h2 className="text-center">Kurs jarayonida doimiy o'qituvchi <br />nazorati.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5 w-full">
                <img className="ml-[90px]" src={Moslashuvchan} alt="" />
                <h1 className="text-center font-semibold mt-2">Moslashuvchan <span className="max-sm:hidden">...</span> <span className="sm:hidden">O'rganish</span></h1>
                <h2 className="text-center">Istalgan vaqtda bilim olish <br />imkoniyati</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5 w-full">
                <img className="ml-[85px]" src={Sertifikat} alt="" />
                <h1 className="text-center font-semibold mt-2">Sertifikate bilan...</h1>
                <h2 className="text-center">Bizning kurslarni alo bitirgan <br />o'quvchilarni sertifikate bilan...</h2>
            </div>
        </div>
    </div>
  )
}

export default Platform
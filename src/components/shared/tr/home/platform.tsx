import Ustozlar from "../../../imgs/Ustozlar.png";
import Mutaxassislar from "../../../imgs/Mutaxassislar.png";
import Moslashuvchan from "../../../imgs/Moslashuvchan.png";
import Sertifikat from "../../../imgs/Sertifikat.png";

function Platform() {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold mt-10'>Bugün Öğrenme Yolculuğunuza Başlayın!</h1>
        <h3 className='text-center text-gray-500'>Platformumuz sizi öğrenmeye ve gelişmeye teşvik etmek için tasarlanmıştır. Hedeflerinize ulaşmanıza yardımcı olmak için geniş bir kurs yelpazesi sunuyoruz.</h3>
        <div className="flex justify-center gap-5 mt-7">
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Ustozlar} alt="" />
                <h1 className="text-center font-semibold">Uzmanlarla Öğrenin</h1>
                <h2 className="text-center">Platformumuz sizi öğrenmeye ve <br />gelişmeye teşvik etmek için...</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Mutaxassislar} alt="" />
                <h1 className="text-center font-semibold">Her Şeyi Öğrenin</h1>
                <h2 className="text-center">Yeni bir beceri öğrenmek <br />isteseniz bile.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Moslashuvchan} alt="" />
                <h1 className="text-center font-semibold">Esnek Öğrenme</h1>
                <h2 className="text-center">Kendi hızınızda esnek öğrenme.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Sertifikat} alt="" />
                <h1 className="text-center font-semibold">Endüstri Standartlarına...</h1>
                <h2 className="text-center">Kurslarımız standartlara <br />uygundur.</h2>
            </div>
        </div>
    </div>
  )
}

export default Platform
import Ustozlar from "../../../imgs/Ustozlar.png";
import Mutaxassislar from "../../../imgs/Mutaxassislar.png";
import Moslashuvchan from "../../../imgs/Moslashuvchan.png";
import Sertifikat from "../../../imgs/Sertifikat.png";

function Platform() {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold mt-10'>Начните свой Учебный Путь Сегодня!</h1>
        <h3 className='text-center text-gray-500'>Наша платформа создана, чтобы помочь вам учиться и развиваться. Мы предлагаем широкий спектр курсов, чтобы помочь вам <br />достичь ваших целей.</h3>
        <div className="flex justify-center gap-5 mt-7">
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Ustozlar} alt="" />
                <h1 className="text-center font-semibold">Учитесь у Экспертов</h1>
                <h2 className="text-center">Наша платформа создана, чтобы помочь вам учиться и...</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Mutaxassislar} alt="" />
                <h1 className="text-center font-semibold">Учите Все</h1>
                <h2 className="text-center">Вы хотите изучить что-то новое.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Moslashuvchan} alt="" />
                <h1 className="text-center font-semibold">Гибкое Обучение</h1>
                <h2 className="text-center">Гибкое обучение на вашем <br />собственном темпе.</h2>
            </div>
            <div className="bg-secondary rounded-xl p-5">
                <img className="ml-16" src={Sertifikat} alt="" />
                <h1 className="text-center font-semibold">Стандарты...</h1>
                <h2 className="text-center">Наши курсы разработаны в <br />соответствии с стандартами.</h2>
            </div>
        </div>
    </div>
  )
}

export default Platform
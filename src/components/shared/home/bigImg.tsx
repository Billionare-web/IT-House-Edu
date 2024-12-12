import BigImg2 from "../../hero.png"
import { Button } from "../../ui/button"

function BigImg() {
  return (
    <div>
    <div className="flex justify-center mt-40">
      <div className="flex justify-between gap-10">
        <div className="column">
          <h1 className='text-5xl font-bold'>Kelajak kasblarini <br />o`rganishni hoziroq <span className='text-blue-600'>biz <br />bilan boshlang.</span></h1>
          <h4 className='text-gray-400 mt-3'>IT sohasidagi barcha sifatli kurslar. Biz bilan IT sohasini o'rganish endi <br />yanada osonroq shunchaki boshlang.</h4>
          <Button className='bg-secondary py-5 font-semibold mt-5 px-9 border-2 rounded-full text-foreground'>Kurslarni toping</Button>
        </div>
        <img src={BigImg2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default BigImg
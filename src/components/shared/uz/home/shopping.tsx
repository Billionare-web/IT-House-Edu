import { Link } from "react-router-dom";
import ShoppingCart from "../../../imgs/shopping.png"

function Shopping() {
  return (
    <div>
        <ul className="flex gap-8 px-32 py-3 mt-20 h-12 bg-gradient-to-r from-secondary to-primary">
            <Link className="opacity-80 transition-opacity hover:opacity-95" to={"/uz"}>Bosh sahifa</Link>
            <li className="list-disc">Tashrif buyurish</li>
            <li className="list-disc">Xarid savati</li>
        </ul>
        <div className="flex mt-10 px-32 gap-2 items-start">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-2 bg-gradient-to-t from-secondary to-background px-32 py-10">
                <img className="" src={ShoppingCart} alt="" />
                <h1 className="text-center font-semibold text-2xl mt-3">Sizning savatingiz bo'sh</h1>
                <h1 className="text-center mt-3">Aniqroq siz hali hech qanday mahsulotni savatingizga <br />qo'shmagansiz.</h1>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-2 bg-gradient-to-t from-secondary to-background px-5 py-3">
                <h1 className="font-semibold text-2xl">Natijalar</h1>
                <h1 className="mt-3 text-xs">Savatingizdagi mahsulotlarni boshqarish.</h1>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-3"></div>
                <div className="flex gap-60">
                <h1>Jami</h1>
                <h1>0 so'm</h1>
                </div>
                <div className="flex justify-between">
                <h1>Umumiy (Soliq bilan)</h1>
                <h1>0 so'm</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopping
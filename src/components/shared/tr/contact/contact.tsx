import { Link } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { IoPaperPlaneOutline } from "react-icons/io5";

function Contact() {
  return (
    <div>
        <ul className="flex py-3 px-32 gap-8 bg-gradient-to-r from-secondary to-primary h-15 mt-20">
            <Link to={"/uz"}>Anasayfa</Link>
            <li className="list-disc">İletişim</li>
        </ul>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0587187570645!2d69.1834927751461!3d41.2858265022901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89ade0861433%3A0xa6470d048143a930!2sIT%20HOUSE!5e0!3m2!1sru!2s!4v1734067283439!5m2!1sru!2s" width="600" height="450" loading="lazy"></iframe>
        <div className="flex justify-between mt-5 px-32">
            <div>
            <h1 className="font-bold text-4xl">Bizimle iletişime geçin</h1>
            <h1 className="mt-2">Size yardımcı olabilmemiz için bizi arayabilirsiniz. Sorularınız varsa <br />mutlu olun.</h1>
            <h1 className="flex items-center gap-2 mt-10 outline-[#E11D48] outline-2"><FaRegEnvelope />ithouseedu@gmail.com</h1>
            <h1 className="flex items-center gap-2"><LuPhone />+998900352727</h1>
            <h1 className="flex items-center gap-2"><LuPhone />+998781137801</h1>
            </div>
            <div>
                <h1 className="font-bold text-4xl">İletişim formu</h1>
                <Input className="pb-24 pt-5 font-semibold pr-96 mt-3 rounded-xl" placeholder="Bir soru söyle veya Merhaba" />
                <Input className="mt-3 rounded-lg" placeholder="E-posta adresi" />
                <Input className="mt-3 rounded-lg" placeholder="Adınızı girin" />
                <Button className="flex items-center gap-2 mt-5 bg-[#E11D48] rounded-full py-6 px-7 text-white" >Gönderiliyor<IoPaperPlaneOutline /></Button>
            </div>
        </div>
    </div>
  )
}

export default Contact
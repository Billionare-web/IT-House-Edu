import { Link } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Footer from "../footer";
import Header from "../header";

function Contact() {
  return (
    <div>
      <Header />
      <ul className="flex py-3 px-32 gap-8 bg-gradient-to-r from-secondary bg-[#E11D48] h-15 mt-20 max-sm:px-7">
        <Link to={"/uz"}>Bosh sahifa</Link>
        <li className="list-disc">Aloqa</li>
      </ul>
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0587187570645!2d69.1834927751461!3d41.2858265022901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89ade0861433%3A0xa6470d048143a930!2sIT%20HOUSE!5e0!3m2!1sru!2s!4v1734067283439!5m2!1sru!2s"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
      <div className="flex gap-20 mt-5 px-32 max-sm:px-7 max-sm:flex-col">
        <div>
          <h1 className="font-bold text-4xl">Biz bilan aloqa oling</h1>
          <h1 className="mt-2">
            Sizga yordam bera olish uchun bizga qo'ng'iroq qilishingiz mumkin.
            Agar <br />
            savolingiz bo'lsa, baxtli bo'ling.
          </h1>
          <h1 className="flex items-center gap-2 mt-10 outline-[#E11D48] outline-2">
            <FaRegEnvelope />
            ithouseedu@gmail.com
          </h1>
          <h1 className="flex items-center gap-2">
            <LuPhone />
            +998900352727
          </h1>
          <h1 className="flex items-center gap-2">
            <LuPhone />
            +998781137801
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-4xl">Aloqa formasi</h1>
          <Input
            className="pb-24 pt-5 font-semibold pr-72 mt-3 rounded-xl max-sm:pr-0"
            placeholder="Savol yoki Salom deb ayting"
          />
          <Input
            className="mt-3 rounded-lg"
            placeholder="Elektron pochta manzili"
          />
          <Input
            className="mt-3 rounded-lg"
            placeholder="Ismingizni kiriting"
          />
          <Button className="flex items-center gap-2 mt-5 bg-[#E11D48] rounded-full py-6 px-7 text-white">
            Yuborish
            <IoPaperPlaneOutline />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

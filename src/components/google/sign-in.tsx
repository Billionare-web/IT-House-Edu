import React, { useEffect, useState } from "react";
import { app } from "../../firebase/firebase";
import { FaGithub } from "react-icons/fa";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

// Firebase Auth va Google Provider-ni sozlash
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  // Foydalanuvchi uchun `user` holatini aniqlash
  const [user, setUser] = useState<User | null>(null);

  // Google bilan kirish funksiyasi
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        console.log(loggedInUser);
      })
      .catch((error) => console.error(error));
  };

  // Chiqish funksiyasi
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  // Foydalanuvchi holatini kuzatish
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="container">
      {!user ? (
        <div className="bg-white text-black rounded-2xl mt-16 p-5 w-96 ml-[500px] z-10">
          <h1 className="font-bold text-xl">Kirish</h1>
          <h1 className="text-[rgba(0,0,0,0.65)] mb-10">
            "IT House Education" da ishlashni davom <br />
            ettirish uchun
          </h1>
          <Button className="border-[1px] border-[rgba(88,87,87,0.65)] rounded py-[6px] bg-white shadow-none pr-[110px] pl-7">
            <Link
              className="flex items-center gap-5"
              to={
                "https://github.com/login/oauth/authorize?access_type=offline&client_id=Ov23liJCdVjWNVHRM455&redirect_uri=https%3A%2F%2Fclerk.ithouseonline.uz%2Fv1%2Foauth_callback&response_type=code&scope=user%3Aemail+read%3Auser&state=slgolrkax05x7qbmf3i0vbnh22syr9m5p452sm3y"
              }
            >
              <FaGithub />
              GitHub orqali davom etish
            </Link>
          </Button>
          <button
            className="flex items-center gap-5 pl-7 border-[1px] border-[rgba(88,87,87,0.65)] rounded w-full py-[6px] mt-[5px] font-semibold text-[14px]"
            onClick={handleLogin}
          >
            <FcGoogle className="text-[18px]" />
            Google orqali davom etish
          </button>
          <div className="flex items-center mt-10 gap-2">
            <Separator className="h-[1px] w-[147px] bg-[rgba(88,87,87,0.65)] mt-1" />
            <h1 className="text-[rgba(88,87,87,0.65)] font-semibold">yoki</h1>
            <Separator className="h-[1px] w-[147px] bg-[rgba(88,87,87,0.65)] mt-1" />
          </div>
          <h1 className="font-bold text-xs mb-2 mt-10">
            Pochta yoki foydalanuvchi nomi
          </h1>
          <Input className="border-[rgba(88,87,87,0.65)]" />
          <Button className="bg-[#103FEF] text-white font-semibold w-full mt-5 hover:bg-[#0D33BF]">
            DAVOM ETISH
          </Button>
          <h1 className="text-xs mt-8 mb-7">
            Akkount yo'qmi?{" "}
            <Link className="text-blue-600" to={""}>
              Ro'yxatdan o'tish
            </Link>
          </h1>
        </div>
      ) : (
        <div className="mt-20 z-10 ml-[1240px]">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL || ""}
                alt="User Avatar"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-secondary rounded-xl">
              <DropdownMenuLabel className="px-4 pt-4">
                {" "}
                <h2 className="text-xs font-medium leading-none text-muted-foreground">
                  {user.email}
                </h2>
              </DropdownMenuLabel>
              <DropdownMenuLabel className="mt-3 px-2 text-foreground">
                {" "}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-secondary p-1">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user.photoURL || ""}
                      alt="User Avatar"
                    />
                  </div>
                  <h2 className="font-semibold text-md">{user.displayName}</h2>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="h-[1px] w-full bg-foreground mt-3" />
              <DropdownMenuItem className="text-gray-400 p-2 w-full text-left rounded mt-1 hover:bg-secondary hover:text-foreground">
                <Link to={"/uz/profile"}>Profilni Boshqarish</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-400 mt-1 hover:text-foreground p-2">
                {" "}
                <button
                  onClick={handleLogout}
                  className="w-full text-left hover:bg-secondary rounded p-1"
                >
                  Chiqish
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Login;